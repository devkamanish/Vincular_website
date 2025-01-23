"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    id: 1,
    image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    heading: "Exploring the World",
    text: "Discover the most amazing places around the globe for your next adventure.",
  },
  {
    id: 2,
    image: "https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg",
    heading: "Tech Trends 2025",
    text: "Stay updated with the latest advancements in technology and innovation.",
  },
  {
    id: 3,
    image: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    heading: "Healthy Living Tips",
    text: "Simple steps to improve your lifestyle and boost your well-being.",
  },
  {
    id: 4,
    image: "https://i0.wp.com/picjumbo.com/wp-content/uploads/mysterious-fantasy-forest-with-old-bridges-free-image.jpg?w=600&quality=80",
    heading: "Delicious Recipes",
    text: "Cook mouth-watering dishes with these easy-to-follow recipes.",
  },
  {
    id: 5,
    image: "https://t3.ftcdn.net/jpg/06/15/49/68/360_F_615496890_W34yB8VDE6n5pehb5QCt1ek5oEvRo9qA.jpg",
    heading: "Fitness Goals",
    text: "Achieve your dream body with effective workouts and expert advice.",
  },
  {
    id: 6,
    image: "https://static.vecteezy.com/system/resources/thumbnails/052/123/756/small_2x/delicate-yellow-blossomed-tree-photo.jpg",
    heading: "Home Decor Ideas",
    text: "Transform your space with stunning and affordable home decor tips.",
  },
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-[-15px] transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-10 h-10 bg-purple-500 text-white flex justify-center items-center rounded-full shadow-lg hover:bg-purple-600">
        &#8250;
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-[-15px] transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-10 h-10 bg-purple-500 text-white flex justify-center items-center rounded-full shadow-lg hover:bg-purple-600">
        &#8249;
      </div>
    </div>
  );
};

const AuditParticipants = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-gradient-to-r from-purple-100 to-white py-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">International Audits & Participations</h2>
      </div>
      <div className="w-10/12 md:w-3/4 mx-auto relative">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.id} className="px-3">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden h-[480px] w-[300px] mx-auto">
                <div className="p-4 ">
                <img
                  src={d.image}
                  alt={d.heading}
                  className="h-52 w-auto object-cover rounded-lg "
                />
                </div>
               
                <div className="p-5 flex flex-col justify-center items-center text-center h-[220px]">
                  <h3 className="text-lg font-semibold mb-3">{d.heading}</h3>
                  <p className="text-sm text-gray-600 mb-4">{d.text}</p>
                  <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AuditParticipants;
