import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logoImg from "@/assets/levion_studio_logo.png";
import goldCircleImg from "@/assets/gold_circle.png";

const navItems = [
  { label: "Home", type: "route", path: "/" },
  { label: "Services", type: "scroll", id: "services" },
  { label: "Our Work", type: "scroll", id: "our-work" },
  { label: "About Us", type: "route", path: "/new" },
  { label: "Contact Us", type: "route", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // ✅ NEW
  const navigate = useNavigate();

  // ✅ SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-sm bg-white/5 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-4 md:px-8">
        
        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="shrink-0 cursor-pointer"
        >
          <img src={logoImg} alt="Levion Studio" className="h-10 w-auto md:h-12" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="flex flex-col items-center gap-4 border-t border-white/10 bg-white/5 backdrop-blur-sm px-4 pb-6 pt-4 md:hidden">
          {navItems.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </nav>
      )}
    </header>
  );
};

const NavItem = ({ item }: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (item.type === "route") {
      navigate(item.path);
    } else {
      if (location.pathname === "/") {
        const el = document.getElementById(item.id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(item.id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className="group relative inline-flex items-center justify-center px-6 py-3 font-body text-base md:text-lg font-medium tracking-wide text-foreground transition-colors hover:text-foreground/80"
    >
      {/* Circle Decoration */}
      <img
        src={goldCircleImg}
        alt=""
        className="pointer-events-none absolute inset-0 m-auto h-[140%] w-[140%] object-contain"
      />

      <span className="relative z-10 whitespace-nowrap">
        {item.label}
      </span>
    </button>
  );
};

export default Header;