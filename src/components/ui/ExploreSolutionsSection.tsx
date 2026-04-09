import React from 'react';
import paperTexture from '@/assets/paper-texture.png';
import exploreSolutions from '@/assets/explore-solutions.png';
import vectorArrow from '@/assets/vector-arrow.png';
import webTechIllustration from '@/assets/web-tech-illustration.png';

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

const ExploreSolutionsSection: React.FC = () => {
  return (
    <section
      className="relative w-full py-8 md:py-12 overflow-hidden"
      style={{
        backgroundColor: '#F9F4E8',
        backgroundImage: `url(${paperTexture})`,
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
      }}
    >
      {/* Explore Solutions Heading */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative flex justify-center">
        <div className="relative inline-flex items-start">
          <img
            src={exploreSolutions}
            alt="Explore Solutions"
            className="w-[280px] md:w-[420px] h-auto select-none"
            draggable={false}
          />
          <img
            src={vectorArrow}
            alt=""
            className="absolute -right-[70px] md:-right-[100px] top-1 md:top-2 w-[60px] md:w-[90px] h-auto select-none animate-float"
            draggable={false}
            style={{ filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.10))' }}
          />
        </div>
      </div>

      {/* Web & Tech Systems Card */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 mt-10 md:mt-14">
        <div
          className="rounded-[2rem] overflow-hidden relative"
          style={{ backgroundColor: '#FEC107' }}
        >
          {/* Top section: illustration + text side by side */}
          <div className="flex flex-col md:flex-row items-start px-8 md:px-12 pt-8 md:pt-10 gap-6 md:gap-8">
            {/* Left - Illustration */}
            <div className="w-full md:w-[34%] flex justify-center md:justify-start shrink-0 mb-4 md:mb-0">
              <img
                src={webTechIllustration}
                alt="Web & Tech Systems illustration"
                className="w-[220px] md:w-[300px] h-auto select-none transition-transform duration-300 ease-in-out hover:scale-110"
                draggable={false}
              />
            </div>

            {/* Right - Header Content */}
            <div className="w-full md:w-[66%] md:pt-2 md:pl-2">
              {/* Label */}
              <p
                className="text-sm md:text-base font-extrabold tracking-wide mb-1"
                style={{ fontFamily: "'Slackey', cursive", color: '#000' }}
              >
                Web & Tech Systems
              </p>

              {/* Heading */}
              <h3
                className="text-3xl md:text-[2.6rem] lg:text-[3.2rem] font-bold leading-[1.12] mb-5"
                style={{ fontFamily: "'Slackey', cursive", color: '#fff' }}
              >
                Effective Digital<br />Solutions
              </h3>

              {/* Description */}
              <p
                className="text-sm md:text-base leading-relaxed max-w-lg"
                style={{ fontFamily: "'Satoshi Variable', sans-serif", color: '#000' }}
              >
                Empower your business with custom web and technology solutions designed to fit your needs. Leave digital challenges behind and enjoy a smooth online presence with efficient, streamlined operations.
              </p>
            </div>
          </div>

          {/* Services Grid - centered under content */}
          <div className="px-8 md:px-12 pt-8 pb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6 md:max-w-[900px] md:mx-auto">
              {[...services.left, ...services.right].map((s) => (
                <p
                  key={s}
                  className="text-sm md:text-lg font-bold"
                  style={{ fontFamily: "'Satoshi Variable', sans-serif", color: '#000' }}
                >
                  {s}
                </p>
              ))}
            </div>
          </div>

          {/* CTA Button - centered */}
          <div className="flex justify-center px-8 md:px-12 pt-4 pb-10">
            <button
              className="px-10 py-3 rounded-lg border-2 border-black bg-white text-black font-bold text-base transition-transform hover:scale-105 active:scale-95"
              style={{ fontFamily: "'Slackey', cursive" }}
            >
              Get Started
            </button>
          </div>
        </div>
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
