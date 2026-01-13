export default function Process() {
  const steps = [
    {
      title: "Requirements verification",
      desc: "Profile analysis and suitability for the procedure.",
    },
    {
      title: "Document preparation",
      desc: "We organize all the necessary documentation for the entry and regularization procedure.",
    },
    {
      title: "Travel organization",
      desc: "From booking to departure, we support the candidate step by step.",
    },
    {
      title: "Welcome in Portugal",
      desc: [
        "Upon arrival : ",
        "Accommodation and meals included, Immediate support, Assistance with local procedures",
      ],
    },
    {
      title: "Professional training",
      desc: "Training programs designed to enhance skills and prepare the candidate for working life in Europe.",
    },
    {
      title: "Orientation",
      desc: "Information on hiring sectors, practical guidance, advice, and tools for entering the market.",
    },
    {
      title: "Ongoing support",
      desc: "Constant assistance until complete integration.",
    },
  ];

  return (
    <section id="process" className="relative w-full mx-auto px-2 md:px-6 py-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Assets/home/bg-2.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80"></div>

      {/* Content */}
      <div className="relative z-10 mx-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 text-center">
          Our Process
        </h2>
        

        <p className="text-xl text-center text-gray-600 mb-3">
          Our process is divided into 7 steps :{" "}
        </p>
        <div className="w-40 h-1 bg-[#1C398E] mb-10 rounded mx-auto "></div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-[#1C398E] -translate-x-1/2"></div>

          <div className="space-y-16">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex items-center ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Connector dot */}
                <div className="absolute md:block hidden left-1/2 w-5 h-5 bg-[#1C398E] rounded-full border-4 border-white shadow -translate-x-1/2"></div>

                {/* Card */}
                <div
                  className={`md:w-[48%] w-full p-6 bg-[#1C398E] shadow-xl text-white rounded-xl border border-gray-200 ${
                    i % 2 === 0 ? "text-left" : "text-left"
                  }`}
                >
                  <h3 className="text-xl  font-semibold">
                    {i + 1}. {step.title}
                  </h3>
                  <p className="text-gray-100 mt-2">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
