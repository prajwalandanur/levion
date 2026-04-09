import heroImage from "@/assets/hero_section_image.png";
import heroDesktop from "@/assets/hero_section_desktop.webp";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="w-full pt-2 pb-16">
        
        <div className="animate-fade-in-up w-full">
          
          <picture>
            {/* Desktop */}
            <source
              media="(min-width: 1024px)"
              srcSet={heroDesktop}
            />

            {/* Mobile */}
            <img
              src={heroImage}
              alt="Brands Built Better – Design, Drive, Develop"
              className="w-full h-auto object-contain"
              loading="eager"
            />
          </picture>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;