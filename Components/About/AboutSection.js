"use client";

export default function AboutSection() {
  return (
    <section className="w-full py-10 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-stretch gap-8">
          
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-center bg-gray-100 p-6 md:p-10 rounded-xl">
            <h2 className="text-3xl text-gray-800 md:text-4xl font-bold mb-4">
              About Us
            </h2>
            <h5 className="text-lg text-[#1C398E] md:text-2xl font-bold mb-4">
              Your Trusted Partner for Legal Relocation to Portugal
            </h5>
            <p className="text-gray-600 text-lg text-justify leading-relaxed">
              We are a professional relocation consultancy dedicated to helping
              individuals and families move to Portugal through a completely
              legal, safe, and structured process. Our goal is to simplify every
              step of your journey — from documentation to arrival — and guide
              you toward a successful life in Portugal.
            </p>
            <p className="text-gray-600 text-justify text-lg leading-relaxed">
              With experienced consultants, transparent procedures, and end-to-end support, we ensure your relocation experience is smooth, stress-free, and well-planned.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 rounded-xl overflow-hidden">
            <img
              src="/Assets/about/about-section.png"
              alt="About Image"
              className="w-[500px] h-[500px] object-cover object-bottom"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
