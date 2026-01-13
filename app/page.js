import HeroSection from "@/Components/Home/HeroSection"
import WhoWeAre from "@/Components/Home/WhoWeAre";
import Process from "@/Components/Home/Process";
import WhatYouGet from "@/Components/Home/WhatYouGet";
import FAQ from "@/Components/Home/FAQ";
import Testimonials from "@/Components/Home/Testimonials";
import LegalNotice from "@/Components/Home/LegalNotice";
import Opportunity from "@/Components/Home/Opportunity";

export default function Home() {
  return (
    <main className="bg-white text-gray-800 md:pt-14 ">
      <HeroSection />
      <Opportunity/>
      <WhoWeAre />
      <Process />
      <WhatYouGet />
      <FAQ />
      <Testimonials />
      <LegalNotice />
    </main>
  );
}
