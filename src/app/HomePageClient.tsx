
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import Terminal from '@/components/Terminal';
import CursorFollower from '@/components/CursorFollower';
import Registration from '@/components/Registration';

const Introduction = dynamic(() => import('@/components/Introduction'));
const Timeline = dynamic(() => import('@/components/Timeline'));
const Prizes = dynamic(() => import('@/components/Prizes'));
const Faq = dynamic(() => import('@/components/Faq'));
const Footer = dynamic(() => import('@/components/Footer'));
const RegistrationSection = dynamic(() => import('@/components/RegistrationSection'));

export default function HomePageClient({ flag }: { flag: string }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMouseInMain, setIsMouseInMain] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mainRef = useRef<HTMLElement | null>(null);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const mainElement = mainRef.current;
    if (!mainElement) return;

    const handleMouseEnter = () => {
      setIsMouseInMain(true);
    };

    const handleMouseLeave = () => {
      setIsMouseInMain(false);
    };

    mainElement.addEventListener('mouseenter', handleMouseEnter);
    mainElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      mainElement.removeEventListener('mouseenter', handleMouseEnter);
      mainElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {isMouseInMain && !isMobile && <CursorFollower />}
      <div id="hero" className="top" style={{ position: 'relative', width: '100%', height: '100vh', paddingTop: '100px' }}>
        <Image
          alt="Hacker themed header"
          src="/hacker-header.webp"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Hero togglePopup={togglePopup} />
          <Terminal />
        </div>
      </div>

      <main ref={mainRef} className="flex flex-col items-center justify-center min-h-screen p-8 pt-20 pb-20 gap-16 sm:p-20">
        <Introduction id="introduction" />
        <Timeline id="timeline" />
        <Prizes id="prizes" />
        <RegistrationSection id="registration" togglePopup={togglePopup} />
        <Registration isOpen={isPopupOpen} togglePopup={togglePopup} flag={flag} />
        <Faq id="faq" />
        {/* <Footer /> */}
      </main>
    </>
  );
}
