import ContactForm from "@/Components/Contact/ContactForm";
import ContactHero from "@/Components/Contact/ContactHero";
import ContactInfo from "@/Components/Contact/ContactInfo";


export default function Contact() {
  return (
    <div className="bg-white text-gray-800 md:pt-16 ">
      <ContactHero />
      <ContactForm />
      <ContactInfo/>
    </div>
  );
}
