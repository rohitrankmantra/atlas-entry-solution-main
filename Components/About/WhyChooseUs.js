"use client";

import {Scale, FileCheck , Home , Plane , HeartHandshake , GraduationCap } from "lucide-react";


const data = [
  {
    icon: <Scale size={40} />,
    title: "100% Legal & Transparent Process",
    desc: "We guide you through fully legal and government-approved pathways for relocation to Portugal.No false promises, no hidden costs — complete transparency at every step."
  },
  {
    icon: <FileCheck size={40} />,
    title: "Complete Documentation Support",
    desc: "From visa applications to residence permits, we handle the entire documentation process for you.Our experts ensure everything is accurate, timely, and stress-free."
  },
  {
    icon: <Plane  size={40} />,
    title: "Smooth & Organized Relocation",
    desc: "We manage travel planning, arrival coordination, and local assistance to ensure a seamless relocation experience.You move to Portugal with confidence and peace of mind."
  },
  {
    icon: <Home  size={40} />,
    title: "Welcome Stay with Accommodation & Meals",
    desc: "Upon arrival, we provide comfortable accommodation along with meals, helping you settle in easily during your initial days."
  },
  {
    icon: <GraduationCap  size={40} />,
    title: "Professional Training & Career Preparation",
    desc: "We offer job-oriented training aligned with European market standards, increasing your employability and long-term success."
  },
  {
    icon: <HeartHandshake  size={40} />,
    title: "Ongoing Support & Local Integration",
    desc: "Our support doesn’t stop after arrival. We assist with local registration, guidance, and smooth integration into Portuguese life."
  }
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Assets/about/about-bg1.jpg')" 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center ">

        {/* Heading */}
        <h2 className="text-3xl text-gray-800 md:text-4xl font-bold mb-2">
          Why Choose Us
        </h2>

        {/* Divider */}
        <div className="w-32 h-1 bg-[#012D71] mx-auto mb-12 opacity-70"></div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((item, i) => (
            <div
              key={i}
              className="border border-white/40 rounded-xl p-6 text-center backdrop-blur-sm bg-[#1C398E]  transition shadow-lg"
            >
              {/* Icon */}
              <div className="w-20 text-white h-20 mx-auto mb-4 rounded-full border-2 border-white flex items-center justify-center">
                {item.icon}
              </div>

              <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>

              <p className="text-gray-200 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
