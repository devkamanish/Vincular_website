"use client";

import React from "react";
import Slider from "react-slick";

const products = [
  {
    name: "Food Mixer",
    image:
      "https://m.media-amazon.com/images/I/61GgOnh8e6L._AC_UF894,1000_QL80_.jpg", // Replace with your image paths
  },
  {
    name: "Water Heater",
    image:
      "https://www.valueplusretail.com/cdn/shop/products/GHWAIAPWB0031.jpg?v=1652880552",
  },
  {
    name: "Insulated Container",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIs4awIICqrZWZk4Eyavn1eC_PRP52h0EyPA&s",
  },
  {
    name: "Canvas Shoes",
    image:
      "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/665715991691e4002b9c5c9e/white-shoes-4.jpg",
  },
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-[-20px] md:right-[-25px] transform -translate-y-1/2 z-10 cursor-pointer"
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
      className="absolute top-1/2 left-[-20px] md:left-[-25px] transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-10 h-10 bg-purple-500 text-white flex justify-center items-center rounded-full shadow-lg hover:bg-purple-600">
        &#8249;
      </div>
    </div>
  );
};

const Products = () => {
  const settings = {
    dots: false, // Show navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-10 bg-gradient-to-r from-purple-100 to-white">
      <h2 className="text-center text-2xl font-bold mb-8">
        Quality Control Order for Latest Products:
      </h2>
      <div className="w-auto md:w-4/5 mx-auto ">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="p-4">
              <div className="bg-white w-[240px] h-[300px] md:h-[320px] rounded-xl shadow-md flex flex-col items-center justify-evenly p-4 mx-auto">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <h3 className="text-lg font-medium text-center">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;


