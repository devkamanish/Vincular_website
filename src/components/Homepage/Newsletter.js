"use client";

import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full flex justify-center items-center bg-white py-10 px-5">
      <div className="w-full max-w-3xl bg-purple-50 rounded-xl shadow-lg p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-xl font-semibold text-purple-700 mb-2">Newsletter</h2>
        <p className="text-gray-600 mb-6">
          Transform your Business. Subscribe to our Newsletter.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full sm:w-auto flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="submit"
            className="bg-purple-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-purple-600 transition"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
