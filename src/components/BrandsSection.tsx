import southCanara from "@/assets/south-canara.png";
import snackshack from "@/assets/snackshack.png";
import gvInfotech from "@/assets/gv-infotech.png";
import ealert from "@/assets/ealert.png"; // ✅ new import
import frameBorder from "@/assets/frame-border.png";

const logos = [
  { src: southCanara, alt: "South Canara Agro Mart" },
  { src: ealert, alt: "Ealert" }, // ✅ added here
  { src: gvInfotech, alt: "GV InfoTech" },
  { src: snackshack, alt: "SnackShack" },
];

export default function BrandsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat">
      
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-12 pb-4 sm:px-10 sm:pt-16 sm:pb-6 md:px-20">
        
        {/* Heading */}
        <div className="mb-6 sm:mb-8 md:mb-10 text-center">
          <h2
            className="uppercase text-[32px] md:text-[52px] lg:text-[64px] xl:text-[72px]"
            style={{
              fontFamily: "'Slackey', cursive",
              lineHeight: 1.1,
              fontWeight: 400,
            }}
          >
            <span className="text-impact-dark">Brands We've</span>
            <br />
            <span className="text-impact-yellow">Helped</span>
          </h2>
        </div>

        {/* Logo container */}
        <div className="relative mx-auto w-full max-w-[1200px]">
          
          <div className="relative overflow-hidden px-12 md:px-20 py-10 md:py-12 h-[200px] md:h-[260px] lg:h-[320px] flex items-center">
            
            {/* Frame */}
            <img
              src={frameBorder}
              alt=""
              className="pointer-events-none absolute inset-0 h-full w-full object-fill"
            />

            {/* Marquee */}
            <div className="relative w-full overflow-hidden">
              
              <div className="flex w-max items-center gap-10 md:gap-16 animate-marquee hover:[animation-play-state:paused]">
                
                {/* First set */}
                {logos.map((logo, i) => (
                  <img
                    key={`a-${i}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-[50px] md:h-[70px] lg:h-[90px] w-auto object-contain"
                  />
                ))}

                {/* Duplicate */}
                {logos.map((logo, i) => (
                  <img
                    key={`b-${i}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-[50px] md:h-[70px] lg:h-[90px] w-auto object-contain"
                  />
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}