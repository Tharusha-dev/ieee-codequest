
'use client';

import { useState, useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import Terminal from '@/components/Terminal';
import Introduction from '@/components/Introduction';
import Timeline from '@/components/Timeline';
import Prizes from '@/components/Prizes';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import Registration from '@/components/Registration';
import RegistrationSection from '@/components/RegistrationSection';
import CursorFollower from '@/components/CursorFollower';

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
      <div className="top" style={{ backgroundImage: 'url(/hacker-header.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Hero togglePopup={togglePopup} />
        <Terminal />
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
