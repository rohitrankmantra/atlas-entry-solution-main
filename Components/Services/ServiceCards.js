"use client";

import Image from "next/image";
import { services } from "@/app/data/servicesdata";

export default function ServicesSection() {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Assets/services/services-bg-3.jpg')", 
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-6">
          Our Services
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          We provide complete support for legal relocation, training, accommodation, and integration in Portugal.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/70 border border-b-4  border-[#1C398E] backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition p-5 flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-48 relative rounded-lg overflow-hidden mb-5">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl text-[#1C398E] font-bold mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm mb-4">
                {service.description}
              </p>

              {/* Key Points */}
              <h4 className="font-semibold text-gray-800 mb-2">{service.keyPointHeading}</h4>

              <ul className="text-gray-700 text-sm space-y-1 mb-2">
                {service.keyPoints.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
