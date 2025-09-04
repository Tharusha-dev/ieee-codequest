"use client";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Link from 'next/link';

const Introduction = ({ id }: { id: string }) => {
  const [ref1, isIntersecting1] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
  const [ref2, isIntersecting2] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
  const [ref3, isIntersecting3] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
  const [ref4, isIntersecting4] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
  const [ref5, isIntersecting5] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
  const [ref6, isIntersecting6] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id={id} className="text-center max-w-4xl">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div
          ref={ref1}
          className={`bg-gray-800/50 p-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(0,255,0,0.2)] hover:scale-105 ${isIntersecting1 ? 'fade-in-up' : 'opacity-0'}`}
        >
 
          <h3 className="text-2xl font-bold mb-4">Decrypt intricate puzzles.</h3>
        </div>
        <div
          ref={ref2}
          className={`bg-gray-800/50 p-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(0,255,0,0.2)] hover:scale-105 ${isIntersecting2 ? 'fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >

          <h3 className="text-2xl font-bold mb-4">Exploit security vulnerabilities.</h3>
        </div>
        <div
          ref={ref3}
          className={`bg-gray-800/50 p-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(0,255,0,0.2)] hover:scale-105 ${isIntersecting3 ? 'fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >

          <h3 className="text-2xl font-bold mb-4">Master logic-based challenges inspired by real-world cyber threats.</h3>
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">What Awaits You?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div
            ref={ref4}
            className={`bg-gray-800/50 p-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(0,255,0,0.2)] hover:scale-105 ${isIntersecting4 ? 'fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.6s' }}
          >

            <h3 className="text-2xl font-bold mb-4">Gain cutting-edge insights from industry experts through exclusive workshops.</h3>
          </div>
          <div
            ref={ref5}
            className={`bg-gray-800/50 p-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(0,255,0,0.2)] hover:scale-105 ${isIntersecting5 ? 'fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.8s' }}
          >
           
            <h3 className="text-2xl font-bold mb-4">Compete in thrilling online & on-site hackathon rounds.</h3>
          </div>
          <div
            ref={ref6}
            className={`bg-gray-800/50 p-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(0,255,0,0.2)] hover:scale-105 ${isIntersecting6 ? 'fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '1s' }}
          >
  
            <h3 className="text-2xl font-bold mb-4">Claim prestigious prizes and connect with top professionals.</h3>
          </div>
        </div>
      </div>
      <div className="mt-16">
    
        <span className="cursor">_</span>
        <a href="https://codequest.ucscieee.lk/CodeQuest.pdf" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-green-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-xl hover:bg-green-600 transition-colors duration-300 shadow-[0_0_15px_3px_rgba(0,255,0,0.2)]"
            download
          >
            Download Booklet
          
        </a>
      </div>
    </section>
  );
};

export default Introduction;
