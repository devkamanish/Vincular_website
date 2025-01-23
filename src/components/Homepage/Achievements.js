"use client";
import React, { useState, useEffect } from "react";

const Achievements = () => {
  const stats = [
    { label: "Total Projects Handled", value: 30000 },
    { label: "Happy Clients", value: 700 },
    { label: "Presence in Countries", value: 10 },
    { label: "Experts at Your Service", value: 80 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const duration = 5000; 
  const delay = 3000; 

  useEffect(() => {
    let interval;
    let timeout;

    const startCounting = () => {
      const startTime = Date.now();

      interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;

        setCounts(() =>
          stats.map((stat) => {
            const progress = Math.min(elapsedTime / duration, 1); 
            return Math.floor(progress * stat.value); 
          })
        );

        if (elapsedTime >= duration) {
          clearInterval(interval); 

          timeout = setTimeout(() => {
            setCounts(stats.map(() => 0)); 
            startCounting(); 
          }, delay);
        }
      }, 50); 
    };

    startCounting();

    return () => {
      clearInterval(interval);
      clearTimeout(timeout); 
    };
  }, [stats]);

  return (
    <section className="w-full py-8 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold text-black">
              Since 2012, <br /> Our Achievements
            </h2>
            <p className="text-gray-600 mt-4">
              Vincular has established itself as a trusted partner in India's
              regulatory framework by facilitating approvals for a wide range of
              consumer products, ensuring strict adherence to safety and
              environmental norms. Our expertise enables businesses to
              confidently enter and succeed in the Indian market.
            </p>
          </div>

          {/* Stats Section */}
          <div className="md:w-1/2 grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg text-center border h-full"
              >
                <h3 className="text-2xl font-bold text-black">
                  {counts[index].toLocaleString()}+
                </h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
