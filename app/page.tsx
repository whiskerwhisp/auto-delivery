// app/page.tsx

import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import FeatureBlock from "@/components/FeatureBlock";
import FeatureReverse from "@/components/FeatureReverse";
import WhyWeExist from "@/components/WhyWeExist";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="bg-stone-50 text-stone-900">

      <Hero />
      <CTA />

      <FeatureBlock />
      <FeatureReverse />

      <WhyWeExist />
      <HowItWorks />

      <Gallery />

      <Footer />

    </div>
  );
}
