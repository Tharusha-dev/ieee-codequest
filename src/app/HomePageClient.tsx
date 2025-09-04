
'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import Terminal from '@/components/Terminal';
import Introduction from '@/components/Introduction';
import Timeline from '@/components/Timeline';
import Prizes from '@/components/Prizes';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import Registration from '@/components/Registration';
import RegistrationSection from '@/components/RegistrationSection';

export default function HomePageClient({ flag }: { flag: string }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <div className="top" style={{ backgroundImage: 'url(/hacker-header.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Hero togglePopup={togglePopup} />
        <Terminal />
      </div>

      <main className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
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
