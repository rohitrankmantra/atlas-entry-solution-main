"use client";

export default function OurMission() {
  return (
    <section
      className="relative w-full h-[70vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('/Assets/home/bg-5.avif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold">Our Mission</h1>

        {/* Divider */}
        <div className="w-20 h-[3px] bg-white mx-auto my-4"></div>

        <p className="text-sm md:text-lg text-center leading-relaxed">
          Our mission is to provide a reliable and secure relocation pathway to
          Portugal. We believe in transparency, trust, and professionalism
          helping every client build a brighter future through legal migration.
        </p>
      </div>
    </section>
  );
}
