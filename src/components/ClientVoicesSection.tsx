
import TestimonialsCards from "@/components/TestimonialsCards";
import FAQSection from "@/components/FAQSection";
import GetStartedSection from "@/components/GetStartedSection";
import ContactFormSection from "@/components/ContactFormSection";

const ClientVoicesSection = () => {
  return (
    <section className="relative pt-6 pb-20 md:pt-10 md:pb-24 lg:pt-12 lg:pb-28 overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-center font-[Slackey] uppercase text-[36px] md:text-[64px] lg:text-[80px] leading-tight mb-16 md:mb-20 px-4">
          <span className="text-foreground">CLIENT </span>
          <span className="text-[hsl(var(--testimonial-yellow))]">VOICES</span>
        </h2>

        <TestimonialsCards />

        <FAQSection />

        <GetStartedSection />

      </div>
    </section>
  );
};

export default ClientVoicesSection;
