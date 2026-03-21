
import ContactFormSection from "@/components/ContactFormSection";
import FooterSection from "@/components/FooterSection";

const Contact = () => {
  return (
    <div>
      <section
        className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
        >
        
        <div className="relative z-10">
          {/* Let's Chat heading */}
          <div className="mb-6 md:mb-8 px-4 sm:px-6 lg:px-8 max-w-[960px] mx-auto text-center">
            <h2 className="font-[Slackey] uppercase text-[36px] md:text-[64px] lg:text-[80px] leading-tight mb-4 md:mb-5">
              <span className="text-foreground">Let's </span>
              <span className="text-[#FEC107]">Chat</span>
            </h2>
            <p className="font-[Satoshi] text-[16px] sm:text-[18px] text-black leading-[1.6] md:leading-[1.7] font-semibold md:text-lg">
              Whether you have something in mind or just exploring ideas, feel free to reach out.
              <br className="hidden sm:block" />
              At Levion Studio, we keep things simple, clear, and focused on what actually works.
            </p>
            <p className="font-[Satoshi] font-semibold text-[16px] sm:text-[18px] md:text-[20px] text-foreground/80 leading-[1.6] mt-5">
              Send us a message, let's get started.
            </p>
          </div>

          <ContactFormSection />
        </div>
      </section>
      <FooterSection />
    </div>);

};

export default Contact;