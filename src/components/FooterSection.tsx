import levionLogo from "@/assets/levion-logo.png";
import yellowScribble from "@/assets/yellow-scribble.png";
import iconInstagram from "@/assets/icon-instagram.png";
import iconLinkedin from "@/assets/icon-linkedin.png";
import iconFacebook from "@/assets/icon-facebook.png";
import iconPhone from "@/assets/icon-phone.png";
import iconEmail from "@/assets/icon-email.png";
import paperTexture from "@/assets/paper-texture.png";

const FooterSection = () => {
  return (
    <footer
      // ✅ FIX 1: Reduced padding (mobile first)
      className="relative pt-4 pb-6 md:pt-6 md:pb-10 overflow-hidden"
      style={{
        backgroundImage: `url(${paperTexture})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      
      {/* Divider */}
      <div className="w-full mb-6 md:mb-10">
        <div className="w-full border-t-[2px] border-[#FEC107]"></div>
        <div className="w-full border-t-[2px] border-[#FEC107] mt-[4px]"></div>
      </div>

      {/* Container */}
      <div className="w-full px-5 sm:px-8 lg:px-16 xl:px-20">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">

          {/* LEFT */}
          <div className="flex flex-col gap-4 max-w-[500px]">
            
            {/* Logo (slightly smaller on mobile) */}
            <img
              src={levionLogo}
              alt="Levion Studio"
              className="w-[180px] sm:w-[220px] md:w-[260px]"
            />

            {/* Description */}
            <p className="font-[Satoshi] font-medium text-[14px] md:text-[17px] leading-[1.5] text-foreground/80">
              Levion Studio is a modern digital studio blending strategy, design, and technology to build brands that move forward.
            </p>

            {/* Social Icons (reduced size) */}
            <div className="flex items-center gap-2 mt-1">
              <img src={iconInstagram} className="w-10 h-10 md:w-14 md:h-14" />
              <img src={iconLinkedin} className="w-10 h-10 md:w-14 md:h-14" />
              <img src={iconFacebook} className="w-9 h-9 md:w-[65px] md:h-[65px]" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4 text-left md:text-right w-full md:w-auto">
            
            {/* Heading */}
            <div>
              <h3 className="font-[Slackey] text-[22px] md:text-[34px]">
                LET'S TALK
              </h3>
              <img
                src={yellowScribble}
                alt=""
                className="w-[160px] md:w-[240px] mt-1 md:ml-auto"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 md:justify-end">
              <img src={iconPhone} className="w-6 h-6 md:w-9 md:h-9" />
              <span className="font-[Satoshi] font-semibold text-[14px] md:text-[18px]">
                +91 83100 29635, +91 98801 01775
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 md:justify-end">
              <img src={iconEmail} className="w-6 h-6 md:w-10 md:h-10" />
              <span className="font-[Satoshi] font-semibold text-[14px] md:text-[18px]">
                contact@levionstudio.com
              </span>
            </div>

            {/* Footer text */}
            <div className="mt-1 flex flex-col gap-1 md:items-end">
              <a className="font-[Satoshi] font-bold text-[13px] md:text-[16px] hover:underline">
                Privacy Policy
              </a>
              <p className="font-[Satoshi] text-[12px] md:text-[14px] text-foreground/80">
                © 2026 All Rights Reserved by Levion Studio.
              </p>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterSection;