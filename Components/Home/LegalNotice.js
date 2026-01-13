export default function LegalNotice() {
  return (
    <section
      className="py-16 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/Assets/home/legal-notice-banner.png')",
      }}
    >
      {/* Dark Overlay (optional) */}
      <div className="absolute inset-0 "></div>

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="rounded-3xl shadow-xl border border-b-4 border-[#1C398E] p-10 bg-white/90 backdrop-blur-md">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Legal Notice
          </h2>
          <div className="w-40 h-1 bg-[#1C398E] mb-8 rounded "></div>

          <p className="text-gray-700 text-lg leading-relaxed">
            We are{" "}
            <span className="font-semibold">NOT an employment agency</span>.
            We do not offer jobs or guarantee hiring. Our services are limited
            to{" "}
            <span className="font-semibold">
              documentation, logistical support, training, and informational
              guidance
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
