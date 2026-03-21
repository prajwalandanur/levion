interface StatItemProps {
  value: string;
  label: React.ReactNode;
  index: number;
}

const StatItem = ({ value, label }: StatItemProps) => {
  return (
    <div className="flex min-h-[100px] cursor-pointer items-center justify-center px-4 py-2 text-center md:min-h-[140px] md:px-6 md:py-3 lg:min-h-[160px]">
      
      <div className="flex flex-col items-center justify-center gap-1 md:gap-2 rounded-xl px-4 py-3 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg">
        
        <span className="whitespace-nowrap font-['Slackey'] text-[23px] leading-none text-impact-yellow md:text-[36px] lg:text-5xl xl:text-[51px]">
          {value}
        </span>

        <span className="mx-auto max-w-[14ch] font-['Satoshi'] text-[11px] uppercase tracking-wide text-impact-dark md:text-[12px] lg:text-base font-semibold text-center">
          {label}
        </span>

      </div>
    </div>
  );
};

const stats = [
  { value: "120%+", label: <>Average Client<br />Growth</> },
  { value: "2M+", label: <>Audience<br />Reached</> },
  { value: "40+", label: <>Projects<br />Delivered</> },
  { value: "5+", label: <>Years<br />Experience</> },
];

export default function ImpactSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
    
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-10 sm:py-20 md:px-20">
        
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-16 md:mb-24">
          <h2
            className="uppercase"
            style={{
              fontFamily: "'Slackey', cursive",
              fontSize: "clamp(34px, 7vw, 67px)",
              lineHeight: 1.1,
              fontWeight: 400,
            }}
          >
            <span className="text-impact-dark">Our </span>
            <span className="text-impact-yellow">Impact</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Text */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:pr-12">
            
            <p
              className="text-impact-dark leading-snug"
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: "clamp(16px, 3vw, 27px)",
                fontWeight: 500,
              }}
            >
              We believe great work comes from care, creativity, and attention to detail.
            </p>

            <p
              className="text-impact-body leading-snug"
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: "clamp(16px, 3vw, 27px)",
                fontWeight: 500,
              }}
            >
              Every project we take on is crafted with the same focus and dedication to deliver work that truly stands out.
            </p>

          </div>

          {/* Stats Grid */}
          <div className="mx-auto w-full max-w-[740px] px-0 sm:px-2">
            <div className="relative grid w-full grid-cols-2 grid-rows-2">
              
              {/* Divider lines */}
              <div className="pointer-events-none absolute left-1/2 top-0 h-full -translate-x-1/2 border-l-[1.5px] border-gray-500/60" />
              <div className="pointer-events-none absolute left-0 top-1/2 w-full -translate-y-1/2 border-t-[1.5px] border-gray-500/60" />

              {stats.map((stat, index) => (
                <StatItem key={index} index={index} value={stat.value} label={stat.label} />
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}