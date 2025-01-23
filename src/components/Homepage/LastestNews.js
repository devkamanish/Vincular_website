"use client";

import React from "react";

const LatestNews = () => {
  const newsData = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCl02Y58poAkat8KtlVXrUdh4JcWyxdftjCg&s", 
      heading: "Domestic Electric Clothes Washers Must Carry ISI Mark",
    },
    {
      id: 2,
      image: "https://5.imimg.com/data5/EP/JC/BR/SELLER-83054718/cctc-camera-bis-registration.png", 
      heading: "Deadline Extended for CCTV Camera Registration by 6 Months",
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/41d6-OLkHQL._AC_UF1000,1000_QL80_.jpg",
      heading:
        "Aluminium and Aluminium Alloy Products Must Carry ISI Mark from April 2025",
    },
  ];

  return (
    <div className="w-full bg-white py-12">
      <h2 className="text-center text-3xl font-bold mb-10">
        Stay Up-to-Date with Latest News & Notifications
      </h2>

      <div className="flex justify-center items-center">
      <div className="flex bg-purple-50 flex-wrap justify-center gap-6 px-5 w-[70%] ">
        {newsData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg w-[360px] h-[300px] p-6 flex flex-col justify-evenly my-4"
          >
            <div className="h-[240px] flex items-center justify-center">
              <img
                src={item.image}
                alt={item.heading}
                className="object-contain h-full w-full"
              />
            </div>
            {/* <h3 className="text-lg font-medium text-center mt-4">
              {item.heading}
            </h3> */}
          </div>
        ))}
      </div>
      </div>
    
    </div>
  );
};

export default LatestNews;
