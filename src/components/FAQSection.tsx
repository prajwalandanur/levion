import { useState } from "react";
import arrowDown from "@/assets/arrow-down.png";

const faqData = [
  {
    question: "Do you develop both websites and mobile applications?",
    answer:
      "Yes, we develop both websites and mobile applications, ensuring they work seamlessly together to deliver a smooth and consistent user experience across platforms.",
  },
  {
    question: "How long does it usually take to develop a website or app?",
    answer:
      "The timeline depends on the complexity of the project. Simple websites may take a few weeks, while more advanced applications or platforms can take several months.",
  },
  {
    question: "What digital marketing services do you offer?",
    answer:
      "We offer performance-focused digital marketing including Meta ads, Google ads, lead generation campaigns, and conversion-driven growth strategies tailored to your business goals.",
  },
  {
    question:
      "How long does it take to start seeing results from digital marketing?",
    answer:
      "Paid campaigns can begin generating results within a few days, while consistent performance improvements typically happen over a few weeks through continuous optimization.",
  },
  {
    question: "Do you provide mentoring for startups or new founders?",
    answer:
      "Yes, we mentor startups by guiding product strategy, technology decisions, and growth planning to help turn ideas into scalable and sustainable businesses.",
  },
];

const GoldBoxSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 800 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      d={`
        M 18,8
        Q 12,4 28,5
        L 770,7
        Q 790,7 788,16
        L 790,54
        Q 791,64 776,63
        L 26,66
        Q 10,67 12,54
        Z
      `}
      fill="transparent"
      transform="rotate(-0.2, 400, 35)"
    />
    <path
      d={`
        M 22,10
        Q 14,6 30,6
        L 768,8
        Q 788,8 786,18
        L 788,52
        Q 789,64 774,63
        L 28,66
        Q 12,67 14,54
        L 12,20
        Q 11,10 22,10
        Z
      `}
      stroke="#FEC107"
      strokeWidth="1.8"
      fill="none"
      strokeLinejoin="round"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
    />
    <path
      d={`
        M 26,13
        Q 18,10 34,10
        L 764,11
        Q 782,11 781,20
        L 783,50
        Q 784,60 770,59
        L 32,62
        Q 16,63 18,51
        L 16,23
        Q 15,13 26,13
        Z
      `}
      stroke="#FEC107"
      strokeWidth="1.2"
      fill="none"
      strokeLinejoin="round"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
      transform="rotate(0.15, 400, 35)"
    />
  </svg>
);

const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="w-full">
    <button
      onClick={onToggle}
      className="w-full text-left group transition-transform duration-200 active:scale-[0.98]"
    >
      <div className="relative flex items-center justify-between gap-3 md:gap-5 py-4 px-6 md:py-6 md:px-10 transition-all duration-200 group-hover:scale-[1.01]">
        <GoldBoxSVG />

        <span className="relative z-10 font-[Satoshi] font-semibold text-foreground text-[15px] md:text-[20px] lg:text-[22px] leading-snug">
          {question}
        </span>

        <img
          src={arrowDown}
          alt=""
          className="relative z-10 w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 shrink-0 transition-transform duration-300 ease-out"
          style={{
            transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)",
          }}
        />
      </div>
    </button>

    <div
      className="overflow-hidden transition-all duration-300 ease-out"
      style={{
        maxHeight: isOpen ? "300px" : "0px",
        opacity: isOpen ? 1 : 0,
      }}
    >
      <p className="font-[Satoshi] font-bold text-foreground text-[14px] md:text-[17px] lg:text-[19px] leading-relaxed px-6 md:px-10 pt-3 pb-5">
        {answer}
      </p>
    </div>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-8 md:mt-12 w-full md:max-w-[70%] mx-auto px-4 sm:px-6 lg:px-0">
      
      <h2
        className="text-center font-[Slackey] uppercase text-[36px] md:text-[64px] lg:text-[80px] mb-12 md:mb-16"
        style={{ lineHeight: 1.1 }}
      >
        <span className="text-foreground">LET'S </span>
        <span className="text-[hsl(var(--testimonial-yellow))]">CLEAR</span>
        <br />
        <span className="text-[hsl(var(--testimonial-yellow))]">THINGS</span>
        <span className="text-foreground"> UP</span>
      </h2>

      <div className="flex flex-col gap-4 md:gap-5">
        {faqData.map((item, i) => (
          <FAQItem
            key={i}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;