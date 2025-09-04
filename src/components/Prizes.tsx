"use client";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Prizes = () => {
  const [ref1, isIntersecting1] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
  const [ref2, isIntersecting2] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
  const [ref3, isIntersecting3] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="w-full max-w-4xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Prizes</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div
          ref={ref1}
          className={`bg-gray-800/50 p-6 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.2)] ${isIntersecting1 ? 'fade-in-up' : 'opacity-0'}`}
        >
          <h3 className="text-2xl font-bold text-green-400">2nd Place</h3>
          <p className="text-4xl font-bold mt-2">40,000 <span className="text-lg">LKR</span></p>
        </div>
        <div
          ref={ref2}
          className={`bg-green-500 text-gray-900 p-6 rounded-lg scale-110 transition-all duration-200 hover:scale-115 hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.2)] ${isIntersecting2 ? 'fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <h3 className="text-2xl font-bold">1st Place</h3>
          <p className="text-5xl font-bold mt-2">60,000 <span className="text-lg">LKR</span></p>
        </div>
        <div
          ref={ref3}
          className={`bg-gray-800/50 p-6 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.2)] ${isIntersecting3 ? 'fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >
          <h3 className="text-2xl font-bold text-green-400">3rd Place</h3>
          <p className="text-4xl font-bold mt-2">20,000 <span className="text-lg">LKR</span></p>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
