"use client";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Faq = () => {
  const faqs = [
    {
      question: "What is CodeQuest: Vault Edition?",
      answer: "It is a Capture the Flag (CTF) hackathon aimed at enhancing cybersecurity skills among undergraduates, organized by the IEEE Student Branch of the University of Colombo School of Computing."
    },
    {
      question: "Who can participate?",
      answer: "The hackathon is aimed at undergraduates. More specific eligibility criteria may be available on the registration page."
    },
    {
      question: "What is the format of the competition?",
      answer: "The competition includes online workshops, an initial online round, and a final on-site physical CTF hackathon."
    },
    {
      question: "What are the prizes?",
      answer: "The prize pool includes 60,000 LKR for 1st place, 40,000 LKR for 2nd place, and 20,000 LKR for 3rd place."
    },
    {
      question: "How can I register?",
      answer: "Click on the register button on the home page, and solve the CTF challenge."
    }
  ];

  return (
    <section className="w-full max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const [ref, isIntersecting] = useIntersectionObserver<HTMLDetailsElement>({ threshold: 0.1 });
          return (
            <details
              key={index}
              ref={ref}
              className={`bg-gray-800/50 p-4 rounded-lg cursor-pointer transition-all duration-500 ${isIntersecting ? 'fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <summary className="font-bold text-xl hover:text-green-500 transition-colors">{faq.question}</summary>
              <p className="mt-2 text-lg text-gray-300">{faq.answer}</p>
            </details>
          )
        })}
      </div>
    </section>
  );
};

export default Faq;
