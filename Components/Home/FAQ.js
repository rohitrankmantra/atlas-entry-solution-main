"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "Do you guarantee employment?",
      answer: "No. We are not a temporary employment agency and do not provide employment. We offer training, support, and orientation.",
    },
    {
      question: "Can I participate if I am illegally resident in Europe?",
      answer: "Yes, if you meet the requirements.",
    },
    {
      question: "How long does the program take?",
      answer: "It depends on your personal situation and the documentation stage.",
    },
    {
      question: "What does the cost include?",
      answer: "Documents, transfer, reception, training, support.",
    },
    {
      question: "Is knowledge of Portuguese required?",
      answer: "No, but the training includes language and integration skills.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Assets/home/bg-8.webp')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/50"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-gray-700">
        <h2 className="text-4xl font-bold mb-3 text-center">FAQ</h2>
        <div className="w-32 h-1 bg-[#254292] mb-10 rounded mx-auto "></div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#254292] backdrop-blur-md rounded-xl shadow-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between hover:cursor-pointer items-center px-6 py-4 text-left text-lg font-medium focus:outline-none"
              >
                <span className="text-white">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-white transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-6 pb-4 text-gray-100 transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
