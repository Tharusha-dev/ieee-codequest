import GlitchText from '@/TextAnimations/GlitchCss';

const Hero = () => {
  return (
    <header className="text-center h-[25vw] flex flex-col items-center justify-center" style={{ backgroundImage: 'url(/hacker-header.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <GlitchText>CodeQuest: Vault Edition</GlitchText>
      <p className="mt-4 text-lg md:text-xl">IEEESTUDENTBRANCHOF UNIVERSITYOFCOLOMBOSCHOOLOFCOMPUTING PROUDLYPRESENTS</p>
    </header>
  );
};

export default Hero;
