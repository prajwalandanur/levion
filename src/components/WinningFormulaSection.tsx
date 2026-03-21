
import winningImage from "@/assets/winning_image.png";

const WinningFormulaSection = () => {
  return (
    <section
      className="relative w-full py-12 md:py-20"
      
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">

        {/* Heading */}
        <h2 className="text-center font-slackey text-4xl md:text-6xl lg:text-8xl leading-tight mb-12 md:mb-16">
          <span className="text-winning-black">OUR </span>
          <span className="text-winning-yellow">WINNING</span>
          <br />
          <span className="text-winning-black">FORMULA</span>
        </h2>

        {/* ✅ FULL IMAGE */}
        <div className="flex justify-center">
          <img
            src={winningImage}
            alt="Winning Formula"
            className="
              w-full 
              max-w-[1000px] 
              h-auto 
              object-contain
            "
          />
        </div>

      </div>
    </section>
  );
};

export default WinningFormulaSection;