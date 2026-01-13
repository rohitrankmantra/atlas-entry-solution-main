"use client";

export default function ServiceSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: "url('/Assets/services/bg-6.png')", 
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-white/10"></div>

      <div className="relative max-w-3xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          What We Offer
        </h2>

        <p className="text-gray-100  text-center  text-base md:text-lg leading-relaxed">
          At PRP, we provide a complete and legally compliant pathway for non-EU citizens to relocate to Portugal with confidence. Our services are designed to assist you at every stage — from documentation to settlement — ensuring a smooth and secure transition into your new European life.
        </p>
      </div>
    </section>
  );
}
