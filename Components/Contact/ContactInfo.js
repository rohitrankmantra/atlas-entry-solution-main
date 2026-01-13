"use client";

import { Phone, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="relative py-16 sm:py-20 bg-gray-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1C398E]"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-gray-100 drop-shadow-lg">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Phone Card */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 sm:p-6 bg-gray-100 rounded-2xl shadow-lg border hover:shadow-2xl transition-all duration-300 text-center sm:text-left">
            <div className="p-4 bg-[#96aae7] rounded-full shrink-0">
              <Phone className="text-[#1C398E] w-6 h-6" />
            </div>

            <div className="break-all">
              <h3 className="text-lg sm:text-xl font-bold text-gray-700 mb-1">
                Phone
              </h3>
              <a
                href="tel:+35679605019"
                className="text-gray-500 text-base sm:text-lg hover:text-[#1C398E]"
              >
                +356 7960 5019
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 sm:p-6 bg-gray-100 rounded-2xl shadow-lg border hover:shadow-2xl transition-all duration-300 text-center sm:text-left">
            <div className="p-4 bg-[#96aae7] rounded-full shrink-0">
              <Mail className="text-[#1C398E] w-6 h-6" />
            </div>

            <div className="break-all">
              <h3 className="text-lg sm:text-xl font-bold text-gray-700 mb-1">
                Email
              </h3>
              <a
                href="mailto:atlas.solutionslda@gmail.com"
                className="text-gray-500 text-base sm:text-lg hover:text-[#1C398E]"
              >
                atlas.solutionslda@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
