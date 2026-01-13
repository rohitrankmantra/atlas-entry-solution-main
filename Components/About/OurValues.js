"use client";

export default function OurValues() {
  const leftTexts = [
    "Transparency",
    "Trust",
    "Legal Compliance",
    "Care",
    "Professionalism",
  ];

  const rightTexts = [
    "Clear and honest process",
    "Building long-term relationships",
    "100% law-abiding procedures",
    "Personalized support to every client",
    "Experienced team & verified process",
  ];

  return (
    <section
      className="w-full py-16 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/Assets/home/bg-7.png')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT IMAGE */}
        <div className="relative w-full h-[400px] md:h-full rounded-xl overflow-hidden">
          <img
            src="/Assets/home/slider-4.jpg"
            alt="Relocation"
            className="w-full h-full object-cover"
          />

          {/* CENTER HEADING */}
          <h2 className="absolute inset-0 flex items-center justify-center text-white bg-black/40 rounded-xl text-2xl md:text-6xl font-bold">
            Our Values
          </h2>
        </div>

        {/* RIGHT SIDE — 5 ROWS */}
        <div className="relative flex flex-col justify-center space-y-10 text-white">
          {leftTexts.map((left, index) => (
            <div key={index} className="flex items-center w-full">

              {/* LEFT DIV */}
              <div className="bg-white/20 backdrop-blur-md p-4 text-md rounded-lg shadow-sm w-[40%] border border-white/30">
                <p className="font-medium">{left}</p>
              </div>

              {/* LINE */}
              <div className="flex-1 h-0.5 bg-white mx-4"></div>

              {/* RIGHT DIV */}
              <div className="bg-white/20 text-sm backdrop-blur-md p-4 rounded-lg shadow-sm w-[40%] border border-white/30">
                <p className="font-medium">{rightTexts[index]}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
