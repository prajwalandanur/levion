import levionLogo from "@/assets/levion-logo.png";
import yellowScribble from "@/assets/yellow-scribble.png";
import iconInstagram from "@/assets/icon-instagram.png";
import iconLinkedin from "@/assets/icon-linkedin.png";
import iconFacebook from "@/assets/icon-facebook.png";
import iconPhone from "@/assets/icon-phone.png";
import iconEmail from "@/assets/icon-email.png";
import paperTexture from "@/assets/paper-texture.png";
import footerDivider from "@/assets/footer-divider.png";

const FooterSection = () => {
  return (
    <footer
      className="relative pt-6 pb-10 md:pb-14 overflow-hidden"
      style={{
        backgroundImage: `url(${paperTexture})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
      
      {/* Double-line golden divider */}
      <div className="w-full mb-10 md:mb-14">
        <div className="w-full border-t-[2px] border-[#FEC107]"></div>
        <div className="w-full border-t-[2px] border-[#FEC107] mt-[5px]"></div>
      </div>
      <div className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-6 max-w-[380px]">
            {/* Logo */}
            <img
              src={levionLogo}
              alt="Levion Studio - Our Work, Your Way"
              className="w-[180px] sm:w-[210px] h-auto" />
            

            {/* Description */}
            <p className="font-[Satoshi] font-medium text-[14px] sm:text-[15px] md:text-[16px] text-foreground/80 leading-[1.65]">
              Levion Studio is a modern digital studio blending strategy, design, and technology to build brands that move forward.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-1 mt-2">
              <a
                href="https://www.instagram.com/levionstudi0/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 ease-out hover:scale-110 active:scale-95">
                
                <img src={iconInstagram} alt="Instagram" className="w-14 h-14 md:w-16 md:h-16" />
              </a>
              <a
                href="https://www.linkedin.com/company/levion-studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 ease-out hover:scale-110 active:scale-95">
                
                <img src={iconLinkedin} alt="LinkedIn" className="w-14 h-14 md:w-16 md:h-16" />
              </a>
              <a
                href="https://www.facebook.com/share/v/1B7rACXiVT/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 ease-out hover:scale-110 active:scale-95">
                
                <img src={iconFacebook} alt="Facebook" className="w-[59px] h-[59px] md:w-[67px] md:h-[67px] relative top-[1px]" />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Get In Touch heading */}
            <div>
              <h3 className="font-[Slackey] text-[24px] sm:text-[28px] md:text-[32px] text-foreground leading-tight">
                LET'S TALK 
              </h3>
              <img
                src={yellowScribble}
                alt=""
                className="w-[180px] sm:w-[220px] h-auto mt-1"
                style={{ maxHeight: "12px" }} />
              
            </div>

            {/* Phone */}
            <a
              href="tel:+918310029635"
              className="flex items-center gap-3 group transition-transform duration-200 ease-out hover:translate-x-1">
              
              <img src={iconPhone} alt="" className="w-6 h-6 md:w-7 md:h-7" />
              <span className="font-[Satoshi] font-semibold text-[15px] md:text-[17px] text-foreground">
                +91 831 002 9635
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@levionstudio.com"
              className="flex items-center gap-3 transition-transform duration-200 ease-out hover:translate-x-1">
              
              <img src={iconEmail} alt="" className="w-7 h-7 md:w-8 md:h-8" />
              <span className="font-[Satoshi] font-semibold text-[15px] md:text-[17px] text-foreground">
                contact@levionstudio.com
              </span>
            </a>

            {/* Privacy & Copyright */}
            <div className="mt-4 flex flex-col gap-1">
              <a
                href="#"
                className="font-[Satoshi] font-bold text-[14px] md:text-[15px] text-foreground hover:underline">
                
                Privacy Policy
              </a>
              <p className="font-[Satoshi] font-medium text-[12px] md:text-[13px] text-foreground/60 leading-[1.5]">
                © 2026 All Rights Reserved by Levion Studio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>);

};

export default FooterSection;