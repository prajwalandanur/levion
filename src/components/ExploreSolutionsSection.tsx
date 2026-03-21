import React from 'react';
import exploreSolutions from '@/assets/explore-solutions.png';
import vectorArrow from '@/assets/vector-arrow.png';
import webTechIllustration from '@/assets/web-tech-illustration.png';
import innovationIllustration from '@/assets/innovation-strategy-illustration.png';
import brandingIllustration from '@/assets/branding-illustration.png';
import marketingIllustration from '@/assets/marketing-illustration.png';

const services = {
  left: [
    'Web Design & Development',
    'eCommerce Platforms',
    'eLearning Platforms',
    'FinTech Platforms',
  ],
  right: [
    'Mobile Application Development',
    'Industrial Software Automation',
    'POS & Inventory Management',
    'Event & Ticket Platforms',
  ],
};

const innovationServices = {
  left: [
    'Business Model Innovation',
    'Product Market Fit Strategy',
    'Consumer & Market Research',
    'Systems & Process Management',
  ],
  right: [
    'Competitive & Stakeholder Analysis',
    'Roadmap & Go-to-Market Strategy',
    'MVP Planning & Product Strategy',
    'Customer Acquisition Strategy',
  ],
};

const brandingServices = {
  left: [
    'Brand Identity & Design',
    'Brand Strategy & Positioning',
    'Content Strategy & Planning',
    'Social Media Content Calendar',
  ],
  right: [
    'Online Reputation Management',
    'Brand Launch & Campaign Activation',
    'Event Marketing & Management',
    'Demand Generation & Growth Strategy',
  ],
};

const marketingServices = {
  left: [
    'SEO Strategy & Search Growth',
    'Marketing Campaign Planning',
    'Consumer & Market Research',
    'AI-Powered Ad Content Creation',
  ],
  right: [
    'Meta & Google Ads Management',
    'Lead Generation Funnels & Pages',
    'Social Media Advertising & Growth',
    'Performance Marketing & Paid Ads',
  ],
};

interface ServiceCardProps {
  label: string;
  heading: React.ReactNode;
  description: string;
  illustration: string;
  illustrationAlt: string;
  servicesList: { left: string[]; right: string[] };
  layout: 'image-left' | 'image-right';
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  label,
  heading,
  description,
  illustration,
  illustrationAlt,
  servicesList,
  layout,
}) => {
  const isImageLeft = layout === 'image-left';

  return (
    <div
      className="rounded-[1.5rem] overflow-hidden relative shadow-md"
      style={{ backgroundColor: '#FEC107' }}
    >
      {/* Top section */}
      <div className="flex flex-col md:flex-row items-center md:items-start px-6 md:px-12 pt-8 md:pt-10 gap-4 md:gap-8">
        {/* Illustration */}
        <div
          className={`w-full md:w-[38%] flex justify-center shrink-0 ${
            isImageLeft ? 'md:order-1 md:justify-start' : 'md:order-2 md:justify-end'
          } order-2`}
        >
          <img
            src={illustration}
            alt={illustrationAlt}
            className="w-[180px] md:w-[320px] h-auto select-none transition-transform duration-300 ease-in-out hover:scale-110"
            draggable={false}
          />
        </div>

        {/* Text Content */}
        <div
          className={`w-full md:w-[62%] text-center md:text-left md:pt-2 ${
            isImageLeft ? 'md:order-2' : 'md:order-1'
          } order-1`}
        >
          <p
            className="text-sm md:text-base font-extrabold tracking-wide mb-1"
            style={{ fontFamily: "'Slackey', cursive", color: '#000' }}
          >
            {label}
          </p>

          <h3
            className="text-2xl md:text-[2.6rem] lg:text-[3.2rem] font-bold leading-[1.12] mb-4 md:mb-5"
            style={{ fontFamily: "'Slackey', cursive", color: '#fff' }}
          >
            {heading}
          </h3>

          <p
            className="text-sm md:text-base font-medium leading-relaxed max-w-lg mx-auto md:mx-0"
            style={{ fontFamily: "'Satoshi Variable', sans-serif", color: '#000' }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-6 md:px-12 pt-6 md:pt-8 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-4 md:gap-y-6 md:max-w-[900px] md:mx-auto">
          {[...servicesList.left, ...servicesList.right].map((s) => (
            <p
              key={s}
              className="text-sm md:text-lg font-bold text-center sm:text-left"
              style={{ fontFamily: "'Satoshi Variable', sans-serif", color: '#000' }}
            >
              {s}
            </p>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center px-6 md:px-12 pt-4 pb-8 md:pb-10">
        <button
          className="px-10 md:px-12 py-3 md:py-3.5 rounded-lg border-2 border-black bg-white text-black font-bold text-sm md:text-base transition-transform hover:scale-105 active:scale-95"
          style={{ fontFamily: "'Slackey', cursive" }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

const ExploreSolutionsSection: React.FC = () => {
  return (
    <section
      className="relative w-full py-8 md:py-12 overflow-hidden"
      
    >
      {/* Explore Solutions Heading */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative flex justify-center">
        <div className="relative inline-flex items-start">
          <img
            src={exploreSolutions}
            alt="Explore Solutions"
            className="w-[220px] md:w-[420px] h-auto select-none"
            draggable={false}
          />
          <img
            src={vectorArrow}
            alt=""
            className="absolute -right-[50px] md:-right-[100px] top-1 md:top-2 w-[40px] md:w-[90px] h-auto select-none animate-float"
            draggable={false}
            style={{ filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.10))' }}
          />
        </div>
      </div>

      {/* Web & Tech Systems Card */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 mt-8 md:mt-14">
        <ServiceCard
          label="Web & Tech Systems"
          heading={<>Effective Digital<br />Solutions</>}
          description="Empower your business with custom web and technology solutions designed to fit your needs. Leave digital challenges behind and enjoy a smooth online presence with efficient, streamlined operations."
          illustration={webTechIllustration}
          illustrationAlt="Web & Tech Systems illustration"
          servicesList={services}
          layout="image-left"
        />
      </div>

      {/* Innovation & Strategy Card */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 mt-10 md:mt-16">
        <ServiceCard
          label="Innovation & Strategy"
          heading={<>Create.<br />Execute.<br />Thrive.</>}
          description="Accelerate your growth with data-driven strategies. Stay ahead of the competition, move past the risk of stagnation, and build a path toward sustained, long-term success."
          illustration={innovationIllustration}
          illustrationAlt="Innovation & Strategy illustration"
          servicesList={innovationServices}
          layout="image-right"
        />
      </div>

      {/* Branding & Engagement Card */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 mt-10 md:mt-16">
        <ServiceCard
          label="Innovation & Strategy"
          heading={<>Elevate Your<br />Reach.</>}
          description="Create a distinct brand identity that connects with your audience. Elevate your branding and leave a lasting impression that keeps your customers coming back."
          illustration={brandingIllustration}
          illustrationAlt="Branding & Engagement illustration"
          servicesList={brandingServices}
          layout="image-left"
        />
      </div>

      {/* Marketing & Advertising Card */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 mt-10 md:mt-16">
        <ServiceCard
          label="Marketing & Advertising"
          heading={<>Creativity<br />That Sells.</>}
          description="Grow your business with performance-driven digital marketing. Our expertise in SEO, Google Meta Ads, and AI-powered content helps brands reach the right customers and scale faster online."
          illustration={marketingIllustration}
          illustrationAlt="Marketing & Advertising illustration"
          servicesList={marketingServices}
          layout="image-right"
        />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ExploreSolutionsSection;
