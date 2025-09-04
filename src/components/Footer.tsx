"use client";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Footer = () => {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });

  return (
    <footer
      ref={ref}
      className={`text-center text-gray-400 mt-16 transition-opacity duration-1000 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
    >
      <p>&copy; {new Date().getFullYear()} IEEE Student Branch of UCSC. All Rights Reserved.</p>
      <p className="text-sm">Designed with &lt;3 by Tharusha</p>
    </footer>
  );
};

export default Footer;
