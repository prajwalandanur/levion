import heroImage from "@/assets/hero_section_image.png";


const HeroSection = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      
    >
      <div className="flex w-full flex-col items-center px-0 pt-2 pb-16">
        {/* Hero image - full width */}
        <div className="animate-fade-in-up w-full">
          <img
            src={heroImage}
            alt="Brands Built Better – Design, Drive, Develop"
            className="mx-auto w-full max-w-[1100px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
