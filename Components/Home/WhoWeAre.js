"use client";

import { CheckCircle } from "lucide-react";

export default function WhoWeAre() {
  const points = [
    "Documentary assistance",
    "Practical preparation",
    "Travel logistics",
    "Arrival support",
    "Food & accommodation",
    "Training programs",
    "Orientation & personal support",
  ];

  return (
    <section id="who" className="relative w-full pb-20 bg-white">
      {/* ===== MOBILE HEADING ===== */}
      <h2 className="block md:hidden text-4xl text-center text-gray-700 font-bold pt-10 pb-4">
        Who We Are
      </h2>
      <div className="block md:hidden w-40 h-1 mx-auto bg-[#1C398E] mb-6 rounded"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row h-auto md:h-[600px]">
        {/* ---------- IMAGE ---------- */}
        <div className="relative md:w-1/2 h-64 md:h-auto m-4 md:m-0 order-2 md:order-1 rounded-xl md:rounded-none overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/Assets/home/whoweare.png')" }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 "></div>

          {/* Diagonal cut (desktop only) */}
          <div className="hidden md:block absolute top-0 right-0 h-full w-20 bg-[#1C398E] clip-path-polygon-diagonal"></div>
        </div>

        {/* ---------- CONTENT ---------- */}
        <div className="md:w-1/2 bg-white px-8 pt-3 relative z-10 order-3 md:order-2">
          {/* ===== DESKTOP HEADING ===== */}
          <h2 className="hidden md:block text-5xl text-gray-700 font-bold pb-5">
            Who We Are
          </h2>
          <div className="hidden md:block w-40 h-1 md:mx-5 bg-[#1C398E] mb-5 rounded"></div>

          <p className="text-gray-700 text-justify text-lg mb-6">
            We are a company that helps non-EU citizens embark on a legal,
            concrete, and recognized path to relocate to Portugal. Our role is
            to provide comprehensive support to make your relocation smooth,
            efficient, and legally compliant.
          </p>

          {/* Key Points */}
          <div className="grid sm:grid-cols-2 gap-4">
            {points.map((point, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              >
                <CheckCircle className="text-[#1C398E] w-5 h-5 shrink-0" />
                <span className="text-gray-700 font-medium">{point}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-justify text-lg mt-6">
            Our service does not provide employment and does not operate as a
            recruitment agency. We provide exclusively administrative,
            logistical, and training support.
          </p>
        </div>
      </div>

      {/* ===== CLIP PATH ===== */}
      <style jsx>{`
        .clip-path-polygon-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
        }
      `}</style>
    </section>
  );
}
