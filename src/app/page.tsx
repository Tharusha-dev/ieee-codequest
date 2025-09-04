import Hero from '@/components/Hero';
import Terminal from '@/components/Terminal';
import Introduction from '@/components/Introduction';
import Timeline from '@/components/Timeline';
import Prizes from '@/components/Prizes';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
     
      <div className="top"   style={{ backgroundImage: 'url(/hacker-header.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Hero />
      <Terminal />
    </div>
    

    <main className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Introduction />
      <Timeline />
      <Prizes />
      <Faq />
      <Footer />
    </main>
    </>
  );
}
