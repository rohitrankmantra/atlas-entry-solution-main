"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { IoIosStar } from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const testimonials = [
    {
      text: "The support I received was exceptional. They made my relocation process smooth and hassle-free.",
      name: "John Doe",
      designation: "Software Engineer",
      rating: 5,
      image: "/Assets/testimonial/testi-11.png",
    },
    {
      text: "Professional team with excellent guidance throughout the entire process. Highly recommended!",
      name: "Jane Smith",
      designation: "Marketing Manager",
      rating: 5,
      image: "/Assets/testimonial/testi-12.png",
    },
    {
      text: "Training and documentation support was outstanding. They really care about their clients.",
      name: "Ahmed Khan",
      designation: "Business Analyst",
      rating: 4,
      image: "/Assets/testimonial/testi-13.png",
    },
    {
      text: "Smooth process from start to finish. The team was always available to answer my questions.",
      name: "Maria Lopez",
      designation: "HR Consultant",
      rating: 5,
      image: "/Assets/testimonial/testi-14.png",
    },
    {
      text: "Great experience with friendly staff. They made me feel comfortable throughout the journey.",
      name: "Lucas Brown",
      designation: "Project Manager",
      rating: 4,
      image: "/Assets/testimonial/testi-16.png",
    },
    {
      text: "Outstanding service! They exceeded my expectations in every aspect of the relocation.",
      name: "Sarah Chen",
      designation: "Entrepreneur",
      rating: 5,
      image: "/Assets/testimonial/testi-15.png",
    },
  ];

  return (
    <section className="py-16 bg-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== SECTION HEADER ===== */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-40 h-1 bg-[#1C398E] mb-6 rounded mx-auto"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what people have to say
            about their experience with us.
          </p>
        </div>

        {/* ===== SLIDER ===== */}
        <div className="relative">
          {/* NAV BUTTONS */}
          <button
            ref={prevRef}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex
                       bg-white w-12 h-12 rounded-full shadow-lg items-center justify-center
                       hover:bg-gray-50 hover:cursor-pointer transition-all duration-200 border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            ref={nextRef}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex
                       bg-white w-12 h-12 rounded-full shadow-lg items-center justify-center
                       hover:bg-gray-50 hover:cursor-pointer transition-all duration-200 border border-gray-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* SWIPER */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={800}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl p-8 h-full text-center shadow-md hover:shadow-lg transition-all duration-300">
                  {/* IMAGE */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md"
                    />
                  </div>

                  {/* NAME */}
                  <h3 className="text-lg font-semibold text-[#1C398E]">
                    {t.name}
                  </h3>

                  {/* DESIGNATION */}
                  <p className="text-sm text-gray-600 mb-3">{t.designation}</p>

                  {/* RATING */}
                  <div className="flex justify-center items-center mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <IoIosStar
                        key={i}
                        className={`w-5 h-5 ${
                          i < Number(t.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* REVIEW */}
                  <p className="text-gray-600 text-base leading-relaxed">
                    “{t.text}”
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
