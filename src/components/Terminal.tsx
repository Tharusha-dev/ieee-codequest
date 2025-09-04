"use client";
import { useState, useEffect } from "react";

const Terminal = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const commands = [
    { cmd: "whoami", output: "A curious hacker" },
    { cmd: "ls -l", output: `total 1
-rwx-r--r-- 1 root root 1024 Aug 29 2025 codequest` },
    { cmd: "./codequest --info", output: "CodeQuest: The ultimate university-level coding competition. Join us for a day of challenges, learning, and fun!" },
    { cmd: "cat /etc/motd", output: "Welcome to CodeQuest! Sharpen your skills and compete with the best." },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.1 }
    );

    const target = document.querySelector("#terminal");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      let commandIndex = 0;

      const typeCommand = () => {
        if (commandIndex < commands.length) {
          const command = commands[commandIndex];
          let charIndex = 0;
          setLines((prev) => [...prev, "$ "]);
          const typingInterval = setInterval(() => {
            if (charIndex <= command.cmd.length) {
              setLines((prev) => {
                const newLines = [...prev];
                newLines[newLines.length - 1] = `$ ${command.cmd.substring(0, charIndex)}`;
                return newLines;
              });
              charIndex++;
            } else {
              clearInterval(typingInterval);
              setTimeout(() => {
                setLines((prev) => [...prev, command.output]);
                commandIndex++;
                setTimeout(typeCommand, 1000); // Wait 2 seconds before typing next command
              }, 500);
            }
          }, 100); // Typing speed
        }
      };

      typeCommand();
    }
  }, [isIntersecting]);

  return (
    <div id="terminal" className="bg-black text-green-400 font-mono p-4 rounded-lg my-8 mx-auto w-11/12 md:w-3/4 lg:w-1/2 relative top-[-5vw]">
      <div className="flex items-center pb-2 border-b border-gray-700">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="mt-2 h-64 overflow-y-auto no-scrollbar">
        {lines.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap">
            {line}
          </div>
        ))}
        <div className="inline-block w-2 h-4 bg-green-400 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Terminal;
