import ServiceHero from "@/Components/Services/ServiceHero";
import ServiceSection from "@/Components/Services/ServiceSection";
import ServiceCards from "@/Components/Services/ServiceCards";


export default function Services() {
  return (
    <div className="bg-white text-gray-800 md:pt-16 ">
      <ServiceHero/>
      <ServiceSection/>
      <ServiceCards/>
    </div>
  );
}
