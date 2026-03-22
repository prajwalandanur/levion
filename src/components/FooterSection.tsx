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
      className="relative pt-6 pb-8 md:pb-10 overflow-hidden"
      style={{
        backgroundImage: `url(${paperTexture})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      
      {/* Divider */}
      <div className="w-full mb-8 md:mb-10">
        <div className="w-full border-t-[2px] border-[#FEC107]"></div>
        <div className="w-full border-t-[2px] border-[#FEC107] mt-[5px]"></div>
      </div>

      {/* 🔥 FULL WIDTH PUSHED LAYOUT */}
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0">

          {/* LEFT */}
          <div className="flex flex-col gap-5 max-w-[500px]">
            
            {/* Logo (bigger) */}
            <img
              src={levionLogo}
              alt="Levion Studio"
              className="w-[220px] sm:w-[260px] md:w-[280px]"
            />

            {/* Description */}
            <p className="font-[Satoshi] font-medium text-[16px] md:text-[18px] leading-[1.6] text-foreground/80">
              Levion Studio is a modern digital studio blending strategy, design, and technology to build brands that move forward.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              <img src={iconInstagram} className="w-16 h-16 md:w-18 md:h-18" />
              <img src={iconLinkedin} className="w-16 h-16 md:w-18 md:h-18" />
              <img src={iconFacebook} className="w-[60px] h-[60px] md:w-[75px] md:h-[75px]" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-5 text-left md:text-right">
            
            {/* Heading */}
            <div>
              <h3 className="font-[Slackey] text-[28px] md:text-[36px]">
                LET'S TALK
              </h3>
              <img
                src={yellowScribble}
                alt=""
                className="w-[220px] md:w-[260px] mt-1 ml-auto"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 md:justify-end">
              <img src={iconPhone} className="w-8 h-8 md:w-10 md:h-10" />
              <span className="font-[Satoshi] font-semibold text-[17px] md:text-[20px]">
                +91 83100 29635, +91 98801 01775
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 md:justify-end">
              <img src={iconEmail} className="w-9 h-9 md:w-11 md:h-11" />
              <span className="font-[Satoshi] font-semibold text-[17px] md:text-[20px]">
                contact@levionstudio.com
              </span>
            </div>

            {/* Footer text */}
            <div className="mt-2 flex flex-col gap-1 md:items-end">
              <a className="font-[Satoshi] font-bold text-[15px] md:text-[17px] hover:underline">
                Privacy Policy
              </a>
              <p className="font-[Satoshi] text-[13px] md:text-[15px] text-foreground/80">
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