
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
  const mainRef = useRef<HTMLElement | null>(null);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

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
      {isMouseInMain && <CursorFollower />}
      <div className="top" style={{ position: 'relative', width: '100%', height: '100vh' }}>
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

      <main ref={mainRef} className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <Introduction />
        <Timeline />
        <Prizes />
        <RegistrationSection togglePopup={togglePopup} />
        <Registration isOpen={isPopupOpen} togglePopup={togglePopup} flag={flag} />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
