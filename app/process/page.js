import ProcessHero from "@/Components/Process/ProcessHero";
import ProcessSection from "@/Components/Process/ProcessSection";
import ProcessCTA from "@/Components/Process/ProcessCTA";


export default function Process() {
  return (
    <div className="bg-white text-gray-800 md:pt-16 ">
      <ProcessHero/>
      <ProcessSection/>
      <ProcessCTA/>
    </div>
  );
}
