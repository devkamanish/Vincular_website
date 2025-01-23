"use client";

import React from "react";

const MarketStats = () => {
  const data = [
    { label: "FOREIGN MANUFACTURERS CERTIFICATION SCHEME", value: 60 },
    { label: "PRODUCT CERTIFICATION SCHEME (ISI MARK)", value: 54 },
    { label: "RESEARCH & TESTING", value: 42 },
    { label: "BIS COMPULSORY REGISTRATION SCHEME", value: 48 },
    { label: "CONFORMITY ASSESSMENT", value: 52 },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-purple-100 to-white py-16 px-5">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 w-11/12 md:w-4/5 mx-auto">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 items-center">
          <h2 className="text-center text-3xl font-bold mb-8">
            Still, Not Sure Why We Stand Out?
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-md h-[450px] flex flex-col justify-center">
            <ul className="space-y-4">
              {[
                "Delivering value since 2012",
                "Reduced cost of compliance & faster time to market",
                "200+ years of collective experience and knowledge",
                "Pan India presence enabling swift coordination with regulators and customers",
                "Empanelment with ex-government officials",
                "Active members of various industry organizations such as MAIT, MATCOF, C’, and AIMED among others",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-purple-500 text-lg mt-1">✔</span>
                  <p className="text-base font-medium">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 items-center">
          <h2 className="text-center text-3xl font-bold mb-8 items-center">Market Share</h2>
        <div className="bg-white p-8 rounded-2xl shadow-md h-[450px] flex flex-col justify-center gap-7">
            {data.map((item, index) => (
              <div key={index} className="w-full">
                <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{item.label}</span>
                  <span className="text-sm font-medium">{item.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketStats;
