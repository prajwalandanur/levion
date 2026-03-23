
import FooterSection from "@/components/FooterSection";

const NewPage = () => {
  return (
    <>
      <div className="min-h-screen">

        {/* OUR STORY */}
        <section className="py-20 md:py-28 lg:py-32 px-6 md:px-12 lg:px-20 w-full text-center">
          
          <h2 className="font-[Slackey] uppercase text-[42px] md:text-[68px] lg:text-[86px] leading-tight mb-8 md:mb-12">
            <span className="text-foreground">OUR </span>
            <span className="text-[hsl(var(--testimonial-yellow))]">STORY</span>
          </h2>

          <div className="w-full md:max-w-[85%] mx-auto">
            <p className="font-['Satoshi_Variable'] font-bold text-foreground text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed md:leading-loose text-left">

              Levion Studio started with a simple realization — businesses don’t lack ideas, they lack the right execution. In a space where design, technology, and marketing often work in silos, we saw the need for something more connected. A way to bring everything together with clarity and purpose. That’s where we began.

              <br /><br />

              We built Levion Studio on the belief that digital growth should be intentional, seamless, and meaningful. Every project we take on is approached as a problem to solve — not just something to deliver.

              <br /><br />

              At the core of it all is our team — a group of creative thinkers and problem-solvers driven by curiosity. We challenge the obvious, simplify complexity, and build solutions that are both thoughtful and effective. Today, Levion Studio is more than a digital studio. We are partners in growth, helping brands move forward with clarity, purpose, and real impact.

            </p>
          </div>

        </section>


        {/* OUR VISION */}
        <section className="pb-20 md:pb-28 lg:pb-32 px-6 md:px-12 lg:px-20">

          <h2 className="text-center font-[Slackey] uppercase text-[42px] md:text-[68px] lg:text-[86px] leading-tight mb-8 md:mb-12">
            <span className="text-foreground">OUR </span>
            <span className="text-[hsl(var(--testimonial-yellow))]">VISION</span>
          </h2>

          <div className="w-full md:max-w-[85%] mx-auto space-y-8 text-left">

            <p className="font-['Satoshi_Variable'] font-bold text-foreground text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed md:leading-loose">
              We envision a future where businesses grow with purpose and contribute meaningfully to the world around them. At Levion Studio, we collaborate with brands that believe in building something valuable not just for themselves, but for the communities they serve.
            </p>

            <p className="font-['Satoshi_Variable'] font-bold text-foreground text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed md:leading-loose">
              We believe businesses should operate with clarity, efficiency, and impact. By combining technology, design, and strategy, we help brands build strong foundations that allow them to focus on what matters most — delivering real value to their customers.
            </p>

            <p className="font-['Satoshi_Variable'] font-bold text-foreground text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed md:leading-loose">
              If you're looking to strengthen your brand, scale your digital presence, and create meaningful impact, we're here to help turn your ideas into reality.
            </p>

          </div>

        </section>


        {/* OUR MISSION */}
        <section className="pb-20 md:pb-28 lg:pb-32 px-6 md:px-12 lg:px-20">

          <h2 className="text-center font-[Slackey] uppercase text-[42px] md:text-[68px] lg:text-[86px] leading-tight mb-8 md:mb-12">
            <span className="text-foreground">OUR </span>
            <span className="text-[hsl(var(--testimonial-yellow))]">MISSION</span>
          </h2>

          <div className="w-full md:max-w-[85%] mx-auto space-y-8 text-left">

            <p className="font-['Satoshi_Variable'] font-bold text-foreground text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed md:leading-loose">
              Our mission is to help businesses transform their ideas into thoughtful digital products, brands, and platforms that create lasting value.
            </p>

            <p className="font-['Satoshi_Variable'] font-bold text-foreground text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed md:leading-loose">
              Through a blend of strategy, technology, and creative thinking, we partner with organizations to simplify complex challenges and build solutions that drive growth.
            </p>

            <p className="font-['Satoshi_Variable'] font-bold text-foreground text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed md:leading-loose">
              We aim to be more than just a service provider — we strive to be a long-term partner in shaping and supporting the journey of the brands we work with.
            </p>

            <p className="font-['Satoshi_Variable'] font-bold text-foreground text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed md:leading-loose">
              At Levion Studio, every project is an opportunity to create something purposeful, impactful, and built to last.
            </p>

          </div>

        </section>

      </div>

      <FooterSection />
    </>
  );
};

export default NewPage;

