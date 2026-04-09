import HeroSection from "@/components/HeroSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ExploreSolutionsSection from "@/components/ExploreSolutionsSection";
import WinningFormulaSection from "@/components/WinningFormulaSection";
import ImpactSection from "@/components/ImpactSection";
import BrandsSection from "@/components/BrandsSection";

// 🔥 From Project B
import ClientVoicesSection from "@/components/ClientVoicesSection";
import FooterSection from "@/components/FooterSection";


function Index() {
  return (
    <div className="min-h-screen pt-24">
 
      <HeroSection />
      <WhoWeAreSection />
      <WhatWeDoSection />

      {/* 🔥 ADD THIS */}
      <div id="services">
        <ExploreSolutionsSection />
      </div>

      <WinningFormulaSection />

      {/* 🔥 ADD THIS */}
      <div id="our-work">
        <ImpactSection />
      </div>

      <BrandsSection />
      <ClientVoicesSection />
      <FooterSection />
    </div>
  );
}

export default Index;