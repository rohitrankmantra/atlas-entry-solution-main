"use client";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/Assets/home/slider-1.jpg",
  "/Assets/home/slider-2.jpg",
  "/Assets/home/slider-3.jpg",
  "/Assets/home/slider-4.jpg",
];

export default function ImageSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="w-full mt-16 mx-auto h-[60vh] sm:h-[70vh] md:h-[90vh] relative">
      {/* Slider */}
      <Slider {...settings}>
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-[60vh] sm:h-[70vh] md:h-[90vh]"
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </Slider>

      {/* Static Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-30 text-white z-30">
        <h2 className="text-3xl md:text-5xl font-bold mb-3">
          Empowering Your Vision with Expert Solutions
        </h2>
        <p className="text-md md:text-lg mb-4">
          We help you turn ideas into reality through strategic guidance, modern digital solutions, and a client-focused approach tailored to your goals.
        </p>

      </div>
    </section>
  );
}

// ---------- Custom Arrows ----------
function CustomArrow({ onClick, direction }) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 z-40 bg-black/50 hover:bg-black hover:cursor-pointer text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
        direction === "next" ? "right-4" : "left-4"
      }`}
    >
      {direction === "next" ? "→" : "←"}
    </button>
  );
}
