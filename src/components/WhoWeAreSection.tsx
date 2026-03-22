import { useNavigate } from "react-router-dom";

import illustration from "@/assets/who_we_are_illustration.png";
import goldScribble from "@/assets/gold_scribble.png";
import scheduleBtn from "@/assets/schedule_consultation.png";

const WhoWeAreSection = () => {
  const navigate = useNavigate();

  return (
    // ✅ FIX 1 & 3: Reduce top & bottom spacing (mobile optimized)
    <section className="relative w-full overflow-hidden py-10 md:py-20">
      
      {/* ✅ FIX 2: Center everything properly */}
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-6 text-center md:flex-row md:items-center md:gap-12 md:px-8 md:text-left">

        {/* Left text column */}
        <div className="flex w-full flex-col items-center gap-4 md:w-[60%] md:items-start">
          
          {/* Heading */}
          <h2 className="font-[Slackey] uppercase leading-[1.05] flex flex-wrap justify-center gap-4 md:justify-start md:gap-8 lg:gap-12">
  
  <span className="text-[#FEC107] text-[40px] md:text-[64px] lg:text-[80px]">
    WHO
  </span>

  <span className="text-foreground text-[40px] md:text-[64px] lg:text-[80px]">
    WE
  </span>

  <span className="text-foreground text-[40px] md:text-[64px] lg:text-[80px]">
    ARE
  </span>

</h2>

          {/* Description */}
          <p className="font-body text-[16px] font-medium leading-[140%] tracking-[0.02em] text-foreground md:text-[20px]">
            Levion Studio is a digital studio specializing in branding, software
            development, and growth systems.
          </p>

          {/* Bold statement */}
          <div className="relative inline-block">
            <p className="font-body text-[15px] font-bold leading-[140%] tracking-[0.02em] text-foreground md:text-[20px]">
              We help businesses turn ideas into powerful digital experiences that drive{" "}
              
              <span className="relative inline-block">
                real growth
                <img
                  src={goldScribble}
                  alt=""
                  className="pointer-events-none absolute left-1/2 top-full mt-1 w-[120px] -translate-x-1/2 md:left-0 md:translate-x-0 md:w-[180px]"
                />
              </span>
              
              .
            </p>
          </div>

          {/* Mobile illustration */}
          <div className="flex w-full items-center justify-center md:hidden">
            <img
              src={illustration}
              alt="Digital marketing illustration"
              className="h-auto w-full max-w-[240px]"
            />
          </div>

          {/* CTA */}
          <div className="mt-2">
            <button
              onClick={() => navigate("/contact")}
              className="inline-block transition-transform duration-300 hover:scale-105"
            >
              <img
                src={scheduleBtn}
                alt="Schedule Free Consultation"
                className="h-auto w-[220px] md:w-[360px]"
              />
            </button>
          </div>

        </div>

        {/* Right illustration */}
        <div className="hidden w-full items-center justify-center md:flex md:w-[40%]">
          <img
            src={illustration}
            alt="Digital marketing illustration"
            className="h-auto w-full max-w-[320px]"
          />
        </div>

      </div>
    </section>
  );
};

export default WhoWeAreSection;