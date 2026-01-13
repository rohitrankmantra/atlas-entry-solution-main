"use client";

import Link from "next/link";
import { Check } from "lucide-react";

export default function Opportunity() {
  const points = [
    "Documentation support",
    "Organized relocation",
    "Welcome with room and board",
    "Professional training",
    "Ongoing support",
  ];

  return (
    <section className="w-full bg-gray-100 py-16">
        
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
          Do you want a legal future in Europe?
          <br className="hidden md:block" />
          <span className="text-[#1C398E]"> PRP is your opportunity.</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-gray-600 text-md md:text-lg max-w-3xl">
          We offer a comprehensive program for legal relocation to Portugal,
          with full support for documents, travel, training, and integration.
        </p>

        {/* Points */}
        <ul className="mt-8 grid sm:grid-cols-2 gap-4">
          {points.map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-700 text-base">
              <Check className="text-[#1C398E]" size={20} />
              {item}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="mailto:atlas.solutionslda@gmail.com"
            className="inline-block bg-[#1C398E] text-white px-8 py-3 rounded-lg font-medium 
            transition-transform duration-300 hover:scale-95 hover:bg-[#1C398E]"
          >
            Request Information
          </a>
        </div>
      </div>
    </section>
  );
}
