import GlitchText from '@/TextAnimations/GlitchCss';

const Hero = () => {
  return (
    <div
      className="text-center h-[25vw] flex flex-col items-center justify-center fade-in"
    >
      <GlitchText className="text-[4vw]">CodeQuest: Vault Edition</GlitchText>
      <p
        className="mt-4 text-lg md:text-xl fade-in-up"
        style={{ animationDelay: '0.5s' }}
      >
        IEEESTUDENTBRANCHOF UNIVERSITYOFCOLOMBOSCHOOLOFCOMPUTING PROUDLYPRESENTS
      </p>
    </div>
  );
};

export default Hero;
