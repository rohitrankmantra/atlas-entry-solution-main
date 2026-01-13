import React from "react";
import Link from "next/link";

const ProcessCTA = () => {
  return (
    <section
      className="py-16 px-4 bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: "url('/Assets/process/process-11.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mt-16">
          <div className="bg-[#1C398E] rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Start Your Portugal Relocation With Full Support
            </h3>
            <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
              Get complete assistance for a safe and legal relocation to Portugal — 
              from documentation and travel planning to training, accommodation, 
              and ongoing support. Your journey starts with one simple step.
            </p>

            <Link href="/contact-us">
              <button className="bg-white hover:cursor-pointer text-[#1C398E] font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Free Consultation
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessCTA;
