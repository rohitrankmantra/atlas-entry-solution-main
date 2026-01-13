"use client";

import { useState } from "react";
import { Star, X } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ReviewSection() {
  const [showModal, setShowModal] = useState(false);

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John D.",
      message:
        "The team was extremely professional and transparent. Highly recommended.",
      date: "Jan 2025",
    },
    {
      id: 2,
      name: "Maria S.",
      message:
        "Excellent support and clear communication throughout the process.",
      date: "Dec 2024",
    },
    {
      id: 3,
      name: "Ahmed K.",
      message:
        "Smooth experience with constant guidance. Very reliable service.",
      date: "Nov 2024",
    },
  ]);

  const submitReview = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newReview = {
      id: Date.now(),
      name: formData.get("name"),
      message: formData.get("message"),
      date: new Date().toLocaleString("en-US", {
        month: "short",
        year: "numeric",
      }),
    };

    setReviews([newReview, ...reviews]);

    toast.success("Thank you! Your review has been added.", {
      position: "top-center",
      style: { background: "#1C398E", color: "#fff" },
    });

    e.target.reset();
    setShowModal(false);
  };

  return (
    <section className="py-20 bg-gray-50 relative">
      <ToastContainer />

      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Customer Reviews
          </h2>
          <div className="w-32 h-1 bg-[#1C398E] mx-auto my-4 rounded"></div>
          <p className="text-gray-600">
            ⭐ 5.0 Rating • Trusted by our clients
          </p>
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
                <span className="ml-2 text-sm text-gray-500">5.0</span>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                “{review.message}”
              </p>

              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-700">
                  {review.name}
                </span>{" "}
                • {review.date}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#1C398E] text-white px-10 py-3 rounded-xl font-semibold hover:scale-95 transition"
          >
            Write a Review
          </button>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            onClick={() => setShowModal(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          ></div>

          <div className="relative bg-white w-full max-w-lg mx-4 rounded-3xl shadow-2xl p-8">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
            >
              <X />
            </button>

            <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
              Share Your Experience
            </h3>
            <div className="w-20 h-1 bg-[#1C398E] mx-auto mb-6 rounded"></div>

            <form onSubmit={submitReview} className="space-y-4">
              <input
                name="name"
                required
                placeholder="Your Full Name"
                className="modal-input"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="modal-input"
              />
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell us about your experience"
                className="modal-input"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#1C398E] text-white py-3 rounded-xl font-semibold hover:scale-95 transition"
              >
                Submit Review
              </button>

             
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal-input {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid #d1d5db;
          outline: none;
        }
        .modal-input:focus {
          border-color: #1c398e;
        }
      `}</style>
    </section>
  );
}
