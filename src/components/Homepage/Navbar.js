"use client"

import React, { useState } from 'react';
import Link from "next/link"
import { AiOutlineSearch } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";


export default function Navbar() {
  const [mobileMenu, setmobileMenu] = useState(false);

  return (
    
    <nav className="bg-white  h-[px] md:h-[46px] w-full">
      <div className="max-w-[1440px] mx-auto px-4 flex justify-between items-center h-full">
        
        <div className="flex items-center space-x-2">
          <img
            src="/VincularLogo.png"
            alt="Vincular Logo"
            className="h-8 md:h-6 w-36"
          />
         
        </div>
      
        <div className="hidden md:flex space-x-8 ">
          <Link href="#about"
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
            onClick={() => console.log('Hello About Us')}
          >
            About Us
          </Link>
          <Link href= "#services"
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
            onClick={() => console.log('Hello Services')}
          >
            Services/Our Expertise
          </Link>
          <Link href= "#news"
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            News & More
          </Link>
          <Link href = "#reach"
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            Reach Out/Say Hello
          </Link>
        </div>

        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-1 text-gray-600 cursor-pointer">
            <span>search</span>
            <AiOutlineSearch  />
          </div>
        
          {/* Mobile Menu */}
          <button
            onClick={() => setmobileMenu(!mobileMenu)}
            className="md:hidden focus:outline-none"
          >
            <IoMenu />

          </button>
        </div>
      </div>

    
      {mobileMenu && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="space-y-2 p-4">
            <li>
              <Link href= "#about"
                className="block text-gray-600 hover:text-gray-800 cursor-pointer"
                onClick={() => {
                  console.log('Navigate to About Us');
                  setmobileMenu(false);
                }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link href= "#services"
                className="block text-gray-600 hover:text-gray-800 cursor-pointer"
                onClick={() => {
                  setmobileMenu(false);
                }}
              >
                Services/Our Expertise
              </Link>
            </li>
            <li>
              <Link href = "#news"
                className="block text-gray-600 hover:text-gray-800 cursor-pointer"
                onClick={() => {
                  setmobileMenu(false);
                }}
              >
                News & More
              </Link>
            </li>
            <li>
              <Link href = "#reach"
                className="block text-gray-600 hover:text-gray-800 cursor-pointer"
                onClick={() => {
                  setmobileMenu(false);
                }}
              >
                Reach Out/Say Hello
              </Link>
            </li>
          </ul>
        </div>
      )}

    
    </nav>
  );
}

