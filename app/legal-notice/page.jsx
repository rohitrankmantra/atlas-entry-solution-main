"use client";

export default function LegalNotice() {
  return (
    <section className="w-full">

      {/* ===== HERO SECTION ===== */}
      <div
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/Assets/legal.jpg')" }}
      >
        <div className="absolute inset-0 flex justify-center items-center bg-black/50"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold">
          LEGAL NOTICE
        </h1>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-gray-700">

        <p className="uppercase text-sm tracking-wide mb-6">
          LEGAL NOTICE
        </p>

        <h2 className="text-3xl font-bold mb-8">
          PUBLISHER
        </h2>

        <p className="mb-6 leading-relaxed">
          The website <strong>www.atlasentrysolutions.com</strong> (hereinafter the
          “Website”) is published by the company{" "}
          <strong>Atlas Entry Solutions</strong>, registered with the
          Companies and Trade Register of Portugal, with registered office at{" "}
          <strong>Oporto, Portugal</strong> and whose Intracommunity
          VAT number is <strong>2025070679</strong>.
        </p>

        <p className="mb-4">
          Phone: <strong>+356 7960 5019</strong>
        </p>


        <p className="mb-6">
          Email : <strong>atlas.solutionslda@gmail.com</strong>
        </p>

        {/* <p className="leading-relaxed">
          Publishing Director: <strong>
            Mrs Panagiota Palaiologou, Vice President Marine & Offshore Division
            Hellenic, Black Sea & Adriatic Zone
          </strong>
        </p> */}

      </div>
    </section>
  );
}
