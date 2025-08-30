import GlitchText from '@/TextAnimations/GlitchCss';

const Hero = () => {
  return (
    <div className="text-center h-[25vw] flex flex-col items-center justify-center" style={{ backgroundImage: 'url(/hacker-header.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <GlitchText className="text-[4vw]">CodeQuest: Vault Edition</GlitchText>
      <p className="mt-4 text-lg md:text-xl">IEEESTUDENTBRANCHOF UNIVERSITYOFCOLOMBOSCHOOLOFCOMPUTING PROUDLYPRESENTS</p>
    </div>
  );
};

export default Hero;
