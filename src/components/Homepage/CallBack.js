"use client"

import { SlPhone } from "react-icons/sl";

export default function CallBack() {
  return (
    <div className="flex justify-center items-center  bg-white py-12">
      <div className="bg-purple-50 p-10 rounded-lg shadow-md  ">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center text-4xl text-purple-600 mb-4">
            <span><SlPhone />
            </span>
          </div>
          <h1 className="text-2xl font-semibold text-gray-800">Request a call back.</h1>
          <p className="text-base text-gray-600 mt-3">
            Would you like to speak to one of our Senior Technical advisers over the phone? Just submit your details and we'll be in touch shortly. You can also email us if you would prefer.
          </p>
        </div>
        
        <form>
          <div className="mb-6">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="John Doe"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 p-3"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="business@mail.com"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 p-3"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Company Name"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 p-3"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              placeholder="+1 234 567 89 00"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-medium py-3 rounded-md hover:bg-gray-800"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}


