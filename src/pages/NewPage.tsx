
import FooterSection from "@/components/FooterSection";
import teamShubhanga from "@/assets/team-shubhanga.png";
import teamSrujan from "@/assets/team-srujan.png";
import teamPrajwal from "@/assets/team-prajwal.png";
import linkedinIcon from "@/assets/linkedin-icon.png";

const teamMembers = [
{
  name: "Shubhanga",
  role: "CEO & Co-Founder",
  image: teamShubhanga,
  linkedin: "https://linkedin.com/in/shubhanga-cs-595858227",
  imageSize: "w-[80%]",
  description:
  "The driving force behind Levion Studio, blending technology and vision to lead the studio and shape the products and platforms we build."
},
{
  name: "Srujan",
  role: "CTO & Co-Founder",
  image: teamSrujan,
  linkedin: "https://linkedin.com/in/srujan-km-12s",
  imageSize: "w-[80%]",
  description:
  "Leads the technology at Levion Studio, architecting and building reliable systems that power the digital products we create."
},
{
  name: "Prajwal",
  role: "CMO & Co-Founder",
  image: teamPrajwal,
  linkedin: "https://linkedin.com/in/prajwal-andanur-9b4a71265",
  imageSize: "w-[76%]",
  description:
  "Works closely with brands to craft strategies, campaigns, and creative experiences that help them grow and connect with their audience."
}];


const NewPage = () => {
  return (
    <>
    <div
      className="min-h-screen">
      
      
      {/* Our Story Section */}
      <section className="py-20 md:py-28 lg:py-32 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto text-center">
        <h2 className="font-[Slackey] uppercase text-[36px] md:text-[56px] lg:text-[72px] leading-tight mb-8 md:mb-12">
          <span className="text-foreground text-6xl">OUR </span>
          <span className="text-[hsl(var(--testimonial-yellow))] text-6xl">STORY</span>
        </h2>
        <p className="font-['Satoshi_Variable'] font-bold text-foreground text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed">
          Levion Studio is a strategy-led digital studio focused on designing and
          building meaningful digital experiences. We work with businesses to
          transform ideas into thoughtful products, platforms, and brands that
          grow with purpose.
        </p>
      </section>

      {/* The People Section */}
      <section className="pb-20 md:pb-28 lg:pb-32 px-6 md:px-12 lg:px-20">
        <h2 className="text-center font-[Slackey] uppercase text-[36px] md:text-[56px] lg:text-[72px] leading-tight mb-16 md:mb-20">
          <span className="text-foreground text-6xl">THE </span>
          <span className="text-[hsl(var(--testimonial-yellow))] text-6xl">PEOPLE</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-10 lg:gap-14 max-w-5xl mx-auto">
          {teamMembers.map((member) =>
          <div key={member.name} className="flex flex-col items-center text-center flex-1 max-w-[274px] mx-auto">
              {/* Yellow Card with Photo */}
              <div className="relative w-full aspect-[4/4.8] rounded-2xl bg-[#FEC107] overflow-hidden mb-4">
                <img
                src={member.image}
                alt={member.name}
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 ${member.imageSize} h-auto object-contain transition-transform duration-300 hover:scale-110 cursor-pointer`} />
              
              </div>

              {/* Name & LinkedIn row */}
              <div className="relative w-full flex items-center mb-2">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="absolute left-[2%]">
                  <img src={linkedinIcon} alt="LinkedIn" className="w-10 h-10" />
                </a>
                <span className="font-[Slackey] text-foreground text-[18px] md:text-[22px] w-full text-center">
                  {member.name}
                </span>
              </div>

              {/* Role */}
              <p className="font-['Satoshi_Variable'] font-bold text-foreground text-[13px] md:text-[14px] mb-3 -mt-[2%]">
                {member.role}
              </p>

              {/* Description */}
              <p className="font-['Satoshi_Variable'] text-foreground text-[13px] md:text-[14px] leading-relaxed font-semibold text-center px-[14px]">
                {member.description}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="pb-20 md:pb-28 lg:pb-32 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
        <h2 className="text-center font-[Slackey] uppercase text-[36px] md:text-[56px] lg:text-[72px] leading-tight mb-8 md:mb-12">
          <span className="text-foreground text-6xl">OUR </span>
          <span className="text-[hsl(var(--testimonial-yellow))] text-6xl">VISION</span>
        </h2>
        <div className="space-y-6 text-left">
          <p className="font-['Satoshi_Variable'] text-foreground text-[15px] lg:text-[20px] leading-relaxed font-semibold text-left md:text-base">
            We envision a future where businesses grow with purpose and contribute meaningfully to the world around them. At Levion Studio, we collaborate with brands that believe in building something valuable not just for themselves, but for the communities they serve.
          </p>
          <p className="font-['Satoshi_Variable'] text-foreground text-[15px] lg:text-[20px] leading-relaxed font-semibold md:text-base">
            We believe businesses should operate with clarity, efficiency, and impact. By combining technology, design, and strategy, we help brands build strong foundations that allow them to focus on what matters most delivering real value to their customers.
          </p>
          <p className="font-['Satoshi_Variable'] text-foreground text-[15px] lg:text-[20px] leading-relaxed font-semibold md:text-base">
            If you're looking to strengthen your brand, scale your digital presence, and create meaningful impact, we're here to help turn your ideas into reality.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="pb-20 md:pb-28 lg:pb-32 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
        <h2 className="text-center font-[Slackey] uppercase text-[36px] md:text-[56px] lg:text-[72px] leading-tight mb-8 md:mb-12">
          <span className="text-foreground">OUR </span>
          <span className="text-[hsl(var(--testimonial-yellow))]">MISSION</span>
        </h2>
        <div className="space-y-6 text-left">
          <p className="font-['Satoshi_Variable'] text-foreground text-[15px] lg:text-[20px] leading-relaxed font-semibold md:text-base">
            Our mission is to help businesses transform their ideas into thoughtful digital products, brands, and platforms that create lasting value.
          </p>
          <p className="font-['Satoshi_Variable'] text-foreground text-[15px] lg:text-[20px] leading-relaxed font-semibold md:text-base">
            Through a blend of strategy, technology, and creative thinking, we partner with organizations to simplify complex challenges and build solutions that drive growth.
          </p>
          <p className="font-['Satoshi_Variable'] text-foreground text-[15px] lg:text-[20px] leading-relaxed font-semibold md:text-base">
            We aim to be more than just a service provider we strive to be a long-term partner in shaping and supporting the journey of the brands we work with.
          </p>
          <p className="font-['Satoshi_Variable'] text-foreground text-[15px] lg:text-[20px] leading-relaxed font-semibold md:text-base">
            At Levion Studio, every project is an opportunity to create something purposeful, impactful, and built to last.
          </p>
        </div>
      </section>
    </div>
    <FooterSection />
    </>);

};

export default NewPage;