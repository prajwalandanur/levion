import { Link } from "react-router-dom";
import getStartedImg from "@/assets/get-started-section.png";
import onlyTakes5Min from "@/assets/only-takes-5-min.png";
import letsConnectBtn from "@/assets/lets-connect-btn.png";
import number1 from "@/assets/number-1.png";
import number2 from "@/assets/number-2.png";
import number3 from "@/assets/number-3.png";

const GetStartedSection = () => {
  return (
    <div className="mt-10 md:mt-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="relative w-full">
        <img
          src={getStartedImg}
          alt="Get started in 3 easy steps"
          className="w-full h-auto rounded-[24px] md:rounded-[32px]"
        />

        {/* Number 1 - positioned above "Schedule a call" */}
        <img
          src={number1}
          alt="Step 1"
          className="absolute w-[10%] sm:w-[10%] md:w-[10%] h-auto object-contain transition-transform duration-300 ease-out hover:scale-[1.25] hover:-translate-y-[8%] cursor-pointer"
          style={{ top: "22%", left: "40%" }}
        />

        {/* Number 2 - positioned above "Review proposal" */}
        <img
          src={number2}
          alt="Step 2"
          className="absolute w-[11%] sm:w-[11%] md:w-[11%] h-auto object-contain transition-transform duration-300 ease-out hover:scale-[1.25] hover:-translate-y-[8%] cursor-pointer"
          style={{ top: "22.5%", left: "60%" }}
        />

        {/* Number 3 - positioned above "Get to Work" */}
        <img
          src={number3}
          alt="Step 3"
          className="absolute w-[11%] sm:w-[11%] md:w-[11%] h-auto object-contain transition-transform duration-300 ease-out hover:scale-[1.25] hover:-translate-y-[8%] cursor-pointer"
          style={{ top: "24%", left: "83%" }}
        />

        {/* Let's connect button */}
        <Link to="/contact" className="absolute cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.08] active:scale-[0.96]"
          style={{ bottom: "8%", left: "3%", width: "25%" }}
        >
          <img src={letsConnectBtn} alt="Let's connect!" className="w-full h-auto" />
        </Link>

        {/* "only takes 5 minutes" arrow pointing to button */}
        <img
          src={onlyTakes5Min}
          alt="only takes 5 minutes"
          className="absolute w-[25%] h-auto object-contain"
          style={{ bottom: "-12%", left: "27%" }}
        />
      </div>
    </div>
  );
};

export default GetStartedSection;
