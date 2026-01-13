// components/AboutHero.js
"use client";

export default function AboutHero() {
  return (
    <section
      className="relative w-full bg-cover bg-center h-[50vh] md:h-[70vh]"
      style={{ backgroundImage: "url('/Assets/home/slider-3.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 bg-opacity-50"></div>

      {/* Heading */}
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
          About Us
        </h1>
      </div>
    </section>
  );
}
