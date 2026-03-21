import { useState } from "react";
import arrowLeft from "@/assets/arrow-left.png";
import arrowRight from "@/assets/arrow-right.png";

const testimonials = [
  {
    rating: 5,
    text: "Levion Studio helped us turn a complex B2B marketplace idea into a seamless mobile platform.",
    author: "Deekshit, South Canara Agro Mart",
  },
  {
    rating: 4,
    text: "Working with Levion Studio, we built the technology powering our rural fintech platform handling thousands of daily transactions",
    author: "Shantanu, EddoSwipe",
  },
  {
    rating: 5,
    text: "Levion Studio has been great to work with. Shubhang and Srujan are talented techies who helped bring our platform to life.",
    author: "Gourav, GV Infotech",
  },
];

const SpeechBubbleSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 520 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      d={`
        M 35,22
        C 38,10 52,6 80,11
        L 200,6
        C 280,3 390,8 472,10
        Q 510,12 508,30
        L 512,330
        C 513,358 498,374 470,372
        L 60,376
        C 30,377 12,362 14,338
        L 10,40
        C 9,28 18,20 35,22
        Z
      `}
      fill="#FEC107"
      transform="rotate(-2, 260, 190)"
    />
    <path
      d={`
        M 28,22
        C 22,8 36,3 52,4
        L 300,5
        C 308,4 315,2 320,-8
        L 348,-40
        C 352,-44 356,-42 360,-36
        L 382,2
        C 386,5 392,4 400,4
        L 480,6
        C 502,7 510,16 509,28
        L 511,340
        C 512,360 500,370 482,369
        L 46,372
        C 26,373 18,362 18,344
        L 16,36
        C 15,18 22,14 28,22
        Z
      `}
      stroke="hsl(var(--foreground))"
      strokeWidth="2.8"
      fill="none"
      strokeLinejoin="round"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
);

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-1 text-[18px] md:text-[20px] lg:text-[22px]">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={i < count ? "text-white" : "text-foreground"}>
        ★
      </span>
    ))}
  </div>
);

const TestimonialCard = ({
  rating,
  text,
  author,
}: {
  rating: number;
  text: string;
  author: string;
}) => (
  <div className="relative group cursor-default w-full max-w-[320px] md:max-w-[480px] mx-auto transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1">
    <span
      className="absolute -top-6 -left-2 text-[24px] md:text-[36px] font-black text-foreground select-none z-20 font-[Slackey]"
      style={{ lineHeight: 1 }}
    >
      ❝
    </span>

    <div className="relative w-full" style={{ aspectRatio: "520 / 420" }}>
      <SpeechBubbleSVG />
      <div className="absolute inset-[8%] flex flex-col justify-center z-10">
        <StarRating count={rating} />
        <p className="mt-2 md:mt-3 mb-3 md:mb-4 text-foreground font-[Satoshi] text-[15px] md:text-[17px] lg:text-[20px] leading-snug md:leading-relaxed">
          {text}
        </p>
        <p className="text-foreground font-[Satoshi] font-semibold text-[13px] md:text-[16px] lg:text-[17px]">
          -{author}
        </p>
      </div>
    </div>

    <span
      className="absolute -bottom-6 -right-2 text-[24px] md:text-[36px] font-black text-foreground select-none z-20 font-[Slackey]"
      style={{ lineHeight: 1 }}
    >
      ❞
    </span>
  </div>
);

const TestimonialsCards = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const maxStart = testimonials.length - 2;

  const handlePrev = () => setStartIndex((p) => (p <= 0 ? maxStart : p - 1));
  const handleNext = () => setStartIndex((p) => (p >= maxStart ? 0 : p + 1));

  const visibleCards = testimonials.slice(startIndex, startIndex + 2);

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-center gap-4 md:gap-6">
        <button
          onClick={handlePrev}
          className="shrink-0 w-16 h-16 lg:w-20 lg:h-20 transition-transform active:scale-95 hover:scale-105"
          aria-label="Previous testimonials"
        >
          <img src={arrowLeft} alt="" className="w-full h-full object-contain" />
        </button>

        <div className="grid grid-cols-2 gap-8 lg:gap-12 flex-1">
          {visibleCards.map((t, i) => (
            <TestimonialCard key={startIndex + i} {...t} />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="shrink-0 w-16 h-16 lg:w-20 lg:h-20 transition-transform active:scale-95 hover:scale-105"
          aria-label="Next testimonials"
        >
          <img src={arrowRight} alt="" className="w-full h-full object-contain" />
        </button>
      </div>

      {/* Mobile: 1 card + dots */}
      <div className="md:hidden flex flex-col items-center">
        <div className="flex items-center justify-center gap-2 w-full">
          <button
            onClick={() => setMobileIndex((p) => (p <= 0 ? testimonials.length - 1 : p - 1))}
            className="shrink-0 w-10 h-10 transition-transform active:scale-95 hover:scale-105"
            aria-label="Previous testimonial"
          >
            <img src={arrowLeft} alt="" className="w-full h-full object-contain" />
          </button>

          <div className="flex-1 max-w-[320px]">
            <TestimonialCard {...testimonials[mobileIndex]} />
          </div>

          <button
            onClick={() => setMobileIndex((p) => (p >= testimonials.length - 1 ? 0 : p + 1))}
            className="shrink-0 w-10 h-10 transition-transform active:scale-95 hover:scale-105"
            aria-label="Next testimonial"
          >
            <img src={arrowRight} alt="" className="w-full h-full object-contain" />
          </button>
        </div>

        <div className="flex justify-center gap-2.5 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setMobileIndex(i)}
              className={`w-3 h-3 rounded-full border-2 border-foreground transition-colors ${
                i === mobileIndex ? "bg-[hsl(var(--testimonial-yellow))]" : "bg-transparent"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCards;
