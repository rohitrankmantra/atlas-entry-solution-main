// components/AboutHero.js
"use client";

export default function ServiceHero() {
  return (
    <section
      className="relative w-full bg-cover bg-center h-[50vh] md:h-[70vh]"
      style={{ backgroundImage: "url('/Assets/services/services-bg-1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 bg-opacity-50"></div>

      {/* Heading */}
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-white text-3xl md:text-6xl font-bold text-center px-4">
          Our Services
        </h1>
      </div>
    </section>
  );
}
