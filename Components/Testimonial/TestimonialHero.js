// components/AboutHero.js
"use client";

export default function TestimonialHero() {
  return (
    <section
      className="relative w-full bg-contain bg-center h-[50vh] md:h-[70vh]"
      style={{ backgroundImage: "url('/Assets/testimonial/testimonialbg-1.png')" }}
    >
      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Heading */}
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-white text-3xl md:text-6xl font-bold text-center px-4">
          Testimonial
        </h1>
      </div>
    </section>
  );
}
