// components/ProcessSection.jsx
"use client";
import React from "react";
import {
  Search,
  ClipboardList,
  PlaneTakeoff,
  Home,
  GraduationCap,
  Compass,
  LifeBuoy,
} from "lucide-react";

const ProcessSection = () => {
  const processes = [
    {
      id: 1,
      title: "Requirements verification",
      description: "Profile analysis and suitability for the procedure.",
      icon: <Search />,
      color: "[#1C398E]",
    },
    {
      id: 2,
      title: "Document preparation",
      description:
        "We organize all the necessary documentation for the entry and regularization procedure.",
      icon: <ClipboardList />,
      color: "[#1C398E]",
    },
    {
      id: 3,
      title: "Travel organization",
      description:
        "From booking to departure, we support the candidate step by step.",
      icon: <PlaneTakeoff />,
      color: "[#1C398E]",
    },
    {
      id: 4,
      title: "Welcome in Portugal",
      description: [
        "Upon arrival :",
        "Accommodation and meals included, Immediate support, Assistance with local procedures",
      ],
      icon: <Home />,
      color: "[#1C398E]",
    },
    {
      id: 5,
      title: "Professional training",
      description:
        "Training programs designed to enhance skills and prepare the candidate for working life in Europe.",
      icon: <GraduationCap />,
      color: "[#1C398E]",
    },
    {
      id: 6,
      title: "Orientation",
      description:
        "Information on hiring sectors, practical guidance, advice, and tools for entering the market.",
      icon: <Compass />,
      color: "[#1C398E]",
    },
    {
      id: 7,
      title: "Ongoing support",
      description: "Constant assistance until complete integration.",
      icon: <LifeBuoy />,
      color: "[#1C398E]",
    },
  ];

  return (
    <section className="py-20 px-4 bg-linear-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#1C398E]"></div>
            <span className="text-sm font-semibold text-[#1C398E] uppercase tracking-wider">
              Our Process
            </span>
            <div className="w-12 h-0.5 bg-[#1C398E]"></div>
          </div>

          <h2 className="text-2xl md:text-5xl font-bold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            How We Work
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A seamless journey from concept to completion, ensuring excellence at
            every step.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Center Connecting Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#1C398E] transform -translate-x-1/2 hidden lg:block"></div>

          {/* Process Items */}
          <div className="space-y-8 lg:space-y-12">
            {processes.map((process, index) => (
              <div
                key={process.id}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-1 lg:w-1/2">
                  <div className="group relative">
                    {/* Timeline Node */}
                    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-4 border-[#1C398E] rounded-full z-20 shadow-md">
                      <div
                        className={`absolute inset-0 rounded-full bg-${process.color} opacity-0 group-hover:opacity-100 transition duration-300`}
                      ></div>
                    </div>

                    {/* Card */}
                    <div
                      className={`lg:ml-12 p-5 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:cursor-pointer duration-300 group-hover:scale-[1.03] border border-gray-100 ${
                        index % 2 === 0 ? "lg:mr-12" : "lg:ml-12"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div
                          className={`shrink-0 w-12 h-12 rounded-xl bg-${process.color} flex items-center justify-center text-xl text-white shadow-md group-hover:scale-110 transition-transform`}
                        >
                          {process.icon}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs font-bold text-[#1C398E] bg-blue-50 px-3 py-1 rounded-full">
                              Step {process.id}
                            </span>
                            <h3 className="text-xl font-bold text-gray-800">
                              {process.title}
                            </h3>
                          </div>

                          <p className="text-gray-600 leading-relaxed text-base">
                            {Array.isArray(process.description)
                              ? process.description.join(" ")
                              : process.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Spacer */}
                <div className="lg:hidden w-full flex justify-center py-3">
                  <div className="w-1 h-10 bg-linear-to-b from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
