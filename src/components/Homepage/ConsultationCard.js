"use client"
import React from "react";

const ConsultationCard = () => {
  return (
    <section className="flex justify-center items-center py-10 px-4 bg-gradient-to-b from-white to-gray-50 ">
      <div className="w-full max-w-3xl bg-purple-100 rounded-lg shadow-md p-8 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-xl md:text-2xl font-bold text-purple-900">
          Want to Learn More?
        </h2>
        <p className="text-sm md:text-base mt-2 text-purple-700">
          Book a Free Consultation & Get Expert Advice for Free!
        </p>
        <button
          className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold text-sm md:text-base rounded-lg shadow hover:bg-purple-700 transition-all"
        >
          Start Free Consultation Now!
        </button>
      </div>
    </section>
  );
};

export default ConsultationCard;
