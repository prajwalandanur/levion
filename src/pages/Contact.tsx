import ContactFormSection from "@/components/ContactFormSection";
import FooterSection from "@/components/FooterSection";

const Contact = () => {
  return (
    <div>
      <section
        className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
      >
        <div className="relative z-10">
          
          {/* Heading + Content */}
          <div className="mb-6 md:mb-8 px-4 sm:px-6 lg:px-8 w-full text-center">
            
            {/* ✅ Heading (consistent across site) */}
            <h2 className="font-[Slackey] uppercase text-[42px] md:text-[68px] lg:text-[86px] leading-tight mb-4 md:mb-5">
              <span className="text-foreground">Let's </span>
              <span className="text-[#FEC107]">Chat</span>
            </h2>

            {/* 🔥 Paragraph Container (70% width on desktop) */}
            <div className="w-full md:max-w-[70%] mx-auto">
              
              {/* Main paragraph */}
              <p className="font-[Satoshi] text-[17px] sm:text-[19px] md:text-[21px] lg:text-[23px] text-black leading-[1.7] font-semibold">
                Whether you have something in mind or just exploring ideas, feel free to reach out.
                <br className="hidden sm:block" />
                At Levion Studio, we keep things simple, clear, and focused on what actually works.
              </p>

              {/* Secondary line */}
              <p className="font-[Satoshi] font-semibold text-[17px] sm:text-[19px] md:text-[21px] lg:text-[23px] text-foreground/80 leading-[1.7] mt-5">
                Send us a message, let's get started.
              </p>

            </div>
          </div>

          {/* Contact Form */}
          <ContactFormSection />
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Contact;