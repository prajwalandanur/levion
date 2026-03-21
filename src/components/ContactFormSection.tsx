import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import dropdownArrow from "@/assets/dropdown-arrow.png";

const GoldBoxSVG = () =>
<svg
  className="absolute inset-0 w-full h-full"
  viewBox="0 0 800 70"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none">
  
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
    transform="rotate(-0.2, 400, 35)" />
  
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
    vectorEffect="non-scaling-stroke" />
  
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
    transform="rotate(0.15, 400, 35)" />
  
  </svg>;


const GoldBoxTallSVG = () =>
<svg
  className="absolute inset-0 w-full h-full"
  viewBox="0 0 800 200"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none">
  
    <path
    d={`
        M 22,10
        Q 14,6 30,6
        L 768,8
        Q 788,8 786,18
        L 788,182
        Q 789,194 774,193
        L 28,196
        Q 12,197 14,184
        L 12,20
        Q 11,10 22,10
        Z
      `}
    stroke="#FEC107"
    strokeWidth="1.8"
    fill="none"
    strokeLinejoin="round"
    strokeLinecap="round"
    vectorEffect="non-scaling-stroke" />
  
    <path
    d={`
        M 26,13
        Q 18,10 34,10
        L 764,11
        Q 782,11 781,20
        L 783,180
        Q 784,190 770,189
        L 32,192
        Q 16,193 18,181
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
    transform="rotate(0.15, 400, 100)" />
  
  </svg>;


const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });
  const [subjectOpen, setSubjectOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const subjectRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const subjectOptions = [
  "Software Development",
  "Marketing",
  "Product Designing",
  "Brand Consultation"];


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (subjectRef.current && !subjectRef.current.contains(e.target as Node)) {
        setSubjectOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    const { name, value } = e.target;
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, phone: digitsOnly });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.endsWith("@gmail.com")) {
      newErrors.email = "Email must end with @gmail.com";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone must be exactly 10 digits";
    }
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.subject) newErrors.subject = "Please select a subject";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      toast({ title: "Message sent successfully" });
      setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
    } catch {
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-12 md:mt-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">
        {/* Name & Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          <div>
            <label className="font-[Satoshi] font-bold text-[13px] md:text-[15px] text-black mb-1 block ml-1">Your Name <span className="text-red-500">*</span></label>
            <div className="relative py-3 px-5 md:py-4 md:px-7">
              <GoldBoxSVG />
              <input
                type="text"
                name="name"
                placeholder=""
                value={formData.name}
                onChange={handleChange}
                maxLength={100}
                className="relative z-10 w-full bg-transparent font-[Satoshi] text-[14px] md:text-[16px] outline-none font-extrabold text-black placeholder:text-foreground/40" />
            </div>
            {errors.name && <p className="text-red-500 text-xs font-[Satoshi] mt-1 ml-1">{errors.name}</p>}
          </div>
          <div>
            <label className="font-[Satoshi] font-bold text-[13px] md:text-[15px] text-black mb-1 block ml-1">Your Email <span className="text-red-500">*</span></label>
            <div className="relative py-3 px-5 md:py-4 md:px-7">
              <GoldBoxSVG />
              <input
                type="email"
                name="email"
                placeholder=""
                value={formData.email}
                onChange={handleChange}
                maxLength={255}
                className="relative z-10 w-full bg-transparent font-[Satoshi] text-[14px] md:text-[16px] text-foreground placeholder:text-foreground/40 outline-none font-extrabold" />
            </div>
            {errors.email && <p className="text-red-500 text-xs font-[Satoshi] mt-1 ml-1">{errors.email}</p>}
            <p className="text-[10px] md:text-[11px] font-[Satoshi] font-bold text-black mt-1 ml-1">(no spam, we promise)</p>
          </div>
        </div>

        {/* Phone & Company row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          <div>
            <label className="font-[Satoshi] font-bold text-[13px] md:text-[15px] text-black mb-1 block ml-1">Phone Number <span className="text-red-500">*</span></label>
            <div className="relative py-3 px-5 md:py-4 md:px-7">
              <GoldBoxSVG />
              <input
                type="tel"
                name="phone"
                placeholder=""
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                className="relative z-10 w-full bg-transparent font-[Satoshi] text-[14px] md:text-[16px] outline-none font-extrabold text-black placeholder:text-foreground/40" />
            </div>
            {errors.phone && <p className="text-red-500 text-xs font-[Satoshi] mt-1 ml-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="font-[Satoshi] font-bold text-[13px] md:text-[15px] text-black mb-1 block ml-1">Company Name <span className="text-red-500">*</span></label>
            <div className="relative py-3 px-5 md:py-4 md:px-7">
              <GoldBoxSVG />
              <input
                type="text"
                name="company"
                placeholder=""
                value={formData.company}
                onChange={handleChange}
                maxLength={100}
                className="relative z-10 w-full bg-transparent font-[Satoshi] text-[14px] md:text-[16px] text-foreground placeholder:text-foreground/40 outline-none font-extrabold" />
            </div>
            {errors.company && <p className="text-red-500 text-xs font-[Satoshi] mt-1 ml-1">{errors.company}</p>}
          </div>
        </div>

        {/* Subject dropdown */}
        <div>
          <label className="font-[Satoshi] font-bold text-[13px] md:text-[15px] text-black mb-1 block ml-1">How can we help? <span className="text-red-500">*</span></label>
          <div className="relative" ref={subjectRef}>
            <div
              className="relative py-3 px-5 md:py-4 md:px-7 cursor-pointer"
              onClick={() => setSubjectOpen(!subjectOpen)}>
              
              <GoldBoxSVG />
              <div className="relative z-10 w-full flex items-center justify-between font-extrabold font-serif">
                <span className={`font-[Satoshi] text-[14px] md:text-[16px] ${formData.subject ? 'text-foreground' : 'text-foreground/40'}`}>
                  {formData.subject || "Select a subject"}
                </span>
                <img
                  src={dropdownArrow}
                  alt="dropdown"
                  className={`w-6 h-7 md:w-7 md:h-8 object-contain transition-transform duration-200 ${subjectOpen ? 'rotate-180' : ''}`} />
              </div>
            </div>
            {subjectOpen &&
            <div className="absolute left-2 right-2 top-full z-30 mt-1 bg-[#FEC107] border-2 border-[#FEC107] rounded-[8px] overflow-hidden shadow-lg">
                {subjectOptions.map((option, i) =>
              <div
                key={option}
                className={`px-5 md:px-7 py-3 font-[Satoshi] font-semibold text-[14px] md:text-[16px] text-black cursor-pointer hover:bg-[#e5ad06] transition-colors duration-150 ${i < subjectOptions.length - 1 ? 'border-b border-black/10' : ''}`}
                onClick={() => {
                  setFormData({ ...formData, subject: option });
                  setSubjectOpen(false);
                  if (errors.subject) setErrors({ ...errors, subject: "" });
                }}>
                    {option}
                  </div>
              )}
              </div>
            }
          </div>
          {errors.subject && <p className="text-red-500 text-xs font-[Satoshi] mt-1 ml-1">{errors.subject}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="font-[Satoshi] font-bold text-[13px] md:text-[15px] text-black mb-1 block ml-1">Your Message <span className="text-red-500">*</span></label>
          <div className="relative py-3 px-5 md:py-4 md:px-7 min-h-[150px] md:min-h-[180px]">
            <GoldBoxTallSVG />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              maxLength={1000}
              rows={5}
              className="relative z-10 w-full h-full bg-transparent font-[Satoshi] text-[14px] text-foreground placeholder:text-foreground/40 outline-none resize-none font-extrabold md:text-lg" placeholder="Tell us about your requirement" />
          </div>
          {errors.message && <p className="text-red-500 text-xs font-[Satoshi] mt-1 ml-1">{errors.message}</p>}
        </div>

        {/* Submit button */}
        <div className="flex justify-center mt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-black text-white font-[Slackey] text-[14px] px-8 md:px-10 py-3 md:py-4 rounded-[10px] flex items-center gap-3 transition-transform duration-300 ease-out hover:scale-[1.05] active:scale-[0.96] cursor-pointer md:text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            style={{ boxShadow: "0 4px 0 0 #FEC107" }}>
            
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && <Send className="w-4 h-4 md:w-5 md:h-5" />}
          </button>
        </div>
      </form>
    </div>);

};

export default ContactFormSection;