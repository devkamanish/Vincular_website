"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    image: "https://thumbs.dreamstime.com/z/portrait-smiling-handsome-european-man-standing-public-train-station-happy-backpack-traveler-holiday-vacation-tourism-97630354.jpg?ct=jpeg", 
    name: "Helen Guo",
    handle: "@HelenGuo_",
    feedback:
      "Been using PostPilot for years. Good for re-engagement. And you can get creative with your messaging.",
  },
  {
    id: 2,
    image: "https://thumbs.dreamstime.com/z/close-up-portrait-glad-excited-cheerful-handsome-beaming-toothy-smile-foreigner-demonstrating-two-sign-taking-self-110314064.jpg?ct=jpeg", 
    name: "Nathan Woods",
    handle: "@HeisNathan",
    feedback:
      "We have done some rad winbacks to 360-720 days since purchase that have rocked. PostPilot team is one of my favs.",
  },
  {
    id: 3,
    image: "https://thumbs.dreamstime.com/z/travel-concept-studio-portrait-handsome-young-man-hat-wit-backpack-isolated-white-76117034.jpg?ct=jpeg", 
    name: "Helen Guo",
    handle: "@HelenGuo_",
    feedback:
      "Been using PostPilot for years. Good for re-engagement. And you can get creative with your messaging.",
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

const Testimonials = () => {
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-gradient-to-r from-purple-50 to-white py-12">
      <h2 className="text-center text-3xl font-bold mb-8">
        Feedback from You, Excellence from Us!
      </h2>
      <div className="w-11/12 md:w-10/12 mx-auto relative">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-3">
              <div className="bg-white shadow-md rounded-lg border border-gray-200 p-6 h-[220px] flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-base">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.handle}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
