"use client";

import React from "react";
import { FaStar } from "react-icons/fa";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Everything I need to run and market my business is in one central place.",
      author: "KAT PARK",
      profession: "Salon Gisele",
    },
    {
      id: 2,
      rating: 4,
      text: "I never overbook myself and always have time between clients.",
      author: "KAT PARK",
      profession: "Salon Gisele",
    },
    {
      id: 3,
      rating: 5,
      text: "Amazing scheduling system! I absolutely LOVE it!",
      author: "AKISHA BOYD",
      profession: "Xtreme Lashes Stylist",
    },
    {
      id: 4,
      rating: 4,
      text: "Most helpful site I’ve ever been on. You're awesome!",
      author: "MEGAN DUCHI",
      profession: "",
    },
  ];

  return (
    <section
      className="relative pt-10 pb-16 px-4 bg-contain bg-center bg-repeat"
      style={{
        backgroundImage: "url('/Assets/testimonial/testi-bg-1.png')", 
      }}
    >

      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* Content */}
      <div className="max-w-4xl mx-auto relative z-10 ">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl text-gray-800 font-bold">Stories</h1>
          <p className="text-xl text-gray-600 mt-4">
            Testimonials from professionals who love StyleSeat.
          </p>
        </div>

        <div className="space-y-14">
          {testimonials.map((t) => (
            <div key={t.id} className="relative">
              <div className="bg-white/90  p-8 shadow-xl border border-[#1C398E] text-gray-900 backdrop-blur-md">

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-xl" />
                  ))}
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">{t.text}</p>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 bg-[#1C398E] rounded-full" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{t.author}</h4>
                    {t.profession && (
                      <p className="text-gray-600 text-sm">{t.profession}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#1C398E] "></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#1C398E] "></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
