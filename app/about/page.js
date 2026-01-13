import AboutHero from "@/Components/About/AboutHero";
import AboutSection from "@/Components/About/AboutSection";
import OurMission from "@/Components/About/OurMission";
import WhyChooseUs from "@/Components/About/WhyChooseUs";
import OurValues from "@/Components/About/OurValues";
import Testimonial from "@/Components/Home/Testimonials";

export default function About() {
  return (
    <div className="bg-white text-gray-800 md:pt-16 ">
      <AboutHero />
      <AboutSection />
      <OurMission/>
      <WhyChooseUs/>
      <OurValues/>
      <Testimonial/>
    </div>
  );
}
