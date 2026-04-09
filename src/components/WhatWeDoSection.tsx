import { useState } from 'react';


const HexagonShape = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <polygon points="28,2 50,15 50,41 28,54 6,41 6,15" fill="#E8740C" />
  </svg>
);

const CircleShape = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <circle cx="28" cy="28" r="24" fill="#E8A0B5" />
  </svg>
);

const SquareShape = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <rect x="4" y="4" width="48" height="48" fill="#D4B84A" />
  </svg>
);

const TriangleShape = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <polygon points="28,4 52,52 4,52" fill="#6B83C9" />
  </svg>
);

const services = [
  { Shape: HexagonShape, label: ["Web & Tech", "Systems"] },
  { Shape: CircleShape, label: ["Innovation &", "Strategy"] },
  { Shape: SquareShape, label: ["Branding &", "Engagement"] },
  { Shape: TriangleShape, label: ["Marketing &", "Advertising"] },
];

const ServiceItem = ({ Shape, label }: { Shape: React.FC; label: string[] }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex items-center gap-4 transition-all duration-300"
      style={{
        transform: hovered ? "scale(1.05)" : "scale(1)",
        filter: hovered ? "drop-shadow(0 8px 16px rgba(0,0,0,0.12))" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-14 h-14 flex items-center justify-center">
        <Shape />
      </div>

      <p
        className="leading-tight text-center md:text-left"
        style={{
          fontFamily: "'Satoshi', sans-serif",
          fontWeight: 700,
          fontSize: "1.15rem",
          color: "#000",
        }}
      >
        {label[0]}
        <br />
        {label[1]}
      </p>
    </div>
  );
};

const WhatWeDoSection = () => {
  return (
    <section
      className="w-full py-16 md:py-24"
      
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            style={{
              fontFamily: "'Slackey', cursive",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            }}
          >
            <span style={{ color: "#FEC107" }}>WHAT</span>{" "}
            <span style={{ color: "#000000" }}>WE DO</span>
          </h2>
        </div>

        {/* Services */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              Shape={service.Shape}
              label={service.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;