import illustration from "@/assets/who_we_are_illustration.png";
import goldScribble from "@/assets/gold_scribble.png";
import scheduleBtn from "@/assets/schedule_consultation.png";

const WhoWeAreSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-8 px-6 md:flex-row md:items-center md:gap-12 md:px-8">

        {/* Left text column */}
        <div className="flex w-full flex-col items-start gap-5 md:w-[60%]">
        <h2 className="font-[Slackey] uppercase leading-[0.95] flex items-center gap-4 md:gap-6 lg:gap-8">
  <span className="text-[#FEC107] text-[36px] md:text-[56px] lg:text-[72px]">
    WHO
  </span>
  <span className="text-foreground text-[36px] md:text-[56px] lg:text-[72px]">
    WE
  </span>
  <span className="text-foreground text-[36px] md:text-[56px] lg:text-[72px]">
    ARE
  </span>
</h2>

          {/* Description */}
          <p className="font-body text-[18px] font-medium leading-[140%] tracking-[0.02em] text-foreground md:text-[20px]">
            Levion Studio is a digital studio specializing in branding, software
            development, and growth systems.
          </p>

          {/* Bold statement */}
          <div className="relative inline-block">
  <p className="font-body text-[16px] font-bold leading-[140%] tracking-[0.02em] text-foreground md:text-[20px]">
    We help businesses turn ideas into powerful digital experiences that drive{" "}
    
    <span className="relative inline-block">
      real growth
      <img
        src={goldScribble}
        alt=""
        className="pointer-events-none absolute left-0 top-full mt-1 w-[150px] md:w-[180px]"
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
              className="h-auto w-full max-w-[280px]"
            />
          </div>

          {/* CTA */}
          <div className="mt-4">
            <a
              href="#"
              className="inline-block transition-transform duration-300 hover:scale-105"
            >
              <img
                src={scheduleBtn}
                alt="Schedule Free Consultation"
                className="h-auto w-[260px] md:w-[360px]"
              />
            </a>
          </div>
        </div>

        {/* Right illustration */}
        <div className="hidden w-full items-center justify-center md:flex md:w-[40%]">
          <img
            src={illustration}
            alt="Digital marketing illustration"
            className="h-auto w-full max-w-[360px]"
          />
        </div>

      </div>
    </section>
  );
};

export default WhoWeAreSection;