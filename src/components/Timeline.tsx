"use client";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Timeline = ({ id }: { id: string }) => {
  const events = [
    { date: "11 APR", title: "Workshop 01", description: "Awareness Session", time: "00:00 IST" },
    { date: "20 APR", title: "Workshop 02", description: "Tools deep dive", time: "19:00 IST" },
    { date: "04 MAY", title: "Initial Round", description: "", time: "00:00 IST" },
    { date: "08 June", title: "Final Round Awareness Session", description: "", time: "19:00 IST" },
    { date: "09 June", title: "Final Round", description: "Physical CTF Hackathon", time: "09:00 IST" },
  ];

  return (
    <section id={id} className="w-full max-w-4xl">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Timeline</h2>
      <div className="relative">
        <div className="border-l-2 border-green-400 absolute h-full left-1/2 -translate-x-1/2"></div>
        {events.map((event, index) => {
          const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
          return (
            <div
              key={index}
              ref={ref}
              className={`mb-8 flex justify-between items-center w-full transition-all duration-500 ${isIntersecting ? (index % 2 === 0 ? 'slide-in-right' : 'slide-in-left') : 'opacity-0'} ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-5/12"></div>
              <div className="z-20 flex items-center justify-center w-8 h-8 bg-green-400 rounded-full">
                <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
              </div>
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                <p className="text-green-400 text-xl">{event.date}</p>
                <h3 className="text-3xl font-bold">{event.title}</h3>
                <p className="text-xl">{event.description}</p>
                <p className="text-lg text-gray-400">{event.time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Timeline;
