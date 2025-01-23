"use client";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9XGU1ukqlQZOz6mv0uYkP3Q0VFNVitisjog&s",
    "https://media.istockphoto.com/id/1071758044/photo/compliance-flow-chart-concept.jpg?s=612x612&w=0&k=20&c=PAZjsAiim_D9FiVZpwcakFCkL8r1JotmzEwQK-jiSK4=",
    "https://vincular.in/wp-content/uploads/2024/12/Master-Banner-768x639.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="flex justify-center items-center rounded-2xl">
      <section className="w-full h-[560px] bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-4 md:py-8 overflow-hidden mt-1">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-2 md:space-y-4">
          <h1 className="text-lg md:text-3xl font-bold text-black">
            India’s Best Product Regulatory Compliance Consultants
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Our commitment to excellence and client satisfaction makes us the
            preferred partner for global businesses entering the Indian market.
          </p>
          <form className="mt-2">
            <label
              htmlFor="search"
              className="block text-sm font-medium text-gray-700"
            >
              Start Free Consultation Now!
            </label>
            <div className="mt-2 flex">
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Try BIS, ISI, WPC, TEC Etc..."
                className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-r-lg hover:bg-gray-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="mt-4 md:mt-0 md:w-1/2 flex justify-center items-center">
          <img
            src={images[currentImageIndex]}
            alt="loading.."
            className="w-full max-w-[300px] md:w-[400px] md:h-[350px] object-contain rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
