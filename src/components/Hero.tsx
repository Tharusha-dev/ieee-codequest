import GlitchText from '@/TextAnimations/GlitchCss';

const Hero = ({ togglePopup }) => {
  return (
    <div
      className="text-center h-[25vw] flex flex-col items-center justify-center fade-in"
    >
      <GlitchText className="text-[4vw]">CodeQuest: Vault Edition</GlitchText>
      <p
        className="mt-4 text-lg md:text-xl fade-in-up"
        style={{ animationDelay: '0.5s' }}
      >
        IEEE STUDENT BRANCH OF UCSC PROUDLY PRESENTS
      </p>
      <button
        onClick={togglePopup}
        className="text-xl mt-8 px-8 py-3 bg-transparent border-2 border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-black transition-all duration-300 fade-in-up"
        style={{ animationDelay: '1s' }}
      >
        Register
      </button>
    </div>
  );
};

export default Hero;
