"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Loading Toast
    const toastId = toast.loading("Sending message...", {
      position: "top-center",
      style: {
        background: "#1C398E",
        color: "#fff",
      },
    });

    emailjs
      .sendForm(
        "service_lgvxmr4",
        "template_oar8dii",
        formRef.current,
        "DozN3G_eZ7ZgA19T5"
      )
      .then(
        () => {
          toast.update(toastId, {
            render: "Form submitted successfully!",
            type: "success",
            isLoading: false,
            autoClose: 3000,
            style: {
              background: "#1C398E",
              color: "#fff",
            },
          });

          setLoading(false);
          formRef.current.reset();
        },
        () => {
          toast.update(toastId, {
            render: "❌ Something went wrong. Try again!",
            type: "error",
            isLoading: false,
            autoClose: 3000,
            style: {
              background: "#1C398E",
              color: "#fff",
            },
          });

          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-14 relative overflow-hidden">
      {/* Toast Container */}
      <ToastContainer />

      {/* Background */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-repeat opacity-20"
        style={{ backgroundImage: "url('/Assets/contact/contact-bg-101.png')" }}
      ></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Ready to Make Your Move to Portugal?
          <br className="hidden sm:block" />
          Let’s Get Started Today!
        </h2>

        <div className="w-28 sm:w-40 h-1 bg-[#1C398E] mb-8 rounded mx-auto"></div>

        <div className="bg-[#1C398E] rounded-3xl shadow-xl p-6 sm:p-10">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid gap-5 md:grid-cols-2 md:gap-6"
          >
            <input name="name" required placeholder="Name" className="input" />
            <input name="surname" required placeholder="Surname" className="input" />
            <input name="country" placeholder="Country" className="input" />
            <input type="email" name="email" required placeholder="Email" className="input" />
            <input name="whatsapp" placeholder="WhatsApp" className="input" />

            <textarea
              rows={4}
              name="message"
              required
              placeholder="Message"
              className="md:col-span-2 input"
            ></textarea>

            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="border border-white text-white py-3 px-20 rounded-xl font-semibold hover:scale-95 transition"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Input Style */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid #ccc;
          background: transparent;
          color: white;
          outline: none;
        }
        .input::placeholder {
          color: #e5e5e5;
        }
      `}</style>
    </section>
  );
}
