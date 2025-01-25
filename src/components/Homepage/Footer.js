

import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";


export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 rounded-lg">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
      
          <div className="col-span-1">
            <img
              src="https://www.greatplacetowork.in/wp-content/uploads/2023/07/color_variation_primary.jpg"
              alt="Great Place to Work Badge"
              className="w-32 mb-4"
            />
          </div>

         
          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-4">Services</h2>
            <ul className="space-y-2">
              <li>Bureau of Indian Standards</li>
              <li>BEE Certifications</li>
              <li>Telecom</li>
              <li>Voice Compliance</li>
              <li>CDSCO Approvals</li>
              <li>Data Protection Compliance</li>
            </ul>
          </div>
          
  
          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
            <ul className="space-y-2">
              <li>Newsletter</li>
              <li>Latest News</li>
              <li>Articles/Blog</li>
              <li>Webinars</li>
              <li>CSR</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              Address: Surya Building, 3rd Floor, 27th Main, 1st Cross, HSR Layout,
              Bangalore 560102
            </p>
            <p className="mb-2">Phone: +91 80888 05577</p>
            <p className="mb-4">
              For sales enquiry: <a href="mailto:sales@vincular.in" className="text-purple-400">sales@vincular.in</a>
              <br />
              For other enquiry: <a href="mailto:info@vincular.in" className="text-purple-400">info@vincular.in</a>
            </p>

            <div className="flex space-x-4 text-xl">
              <a href="https://x.com/home" className="hover:text-purple-400"><FaXTwitter />
              </a>
              <a href="#" className="hover:text-purple-400"><FaInstagram /></a>
              <a href="#" className="hover:text-purple-400"><FaLinkedin />
              </a>
              <a href="#" className="hover:text-purple-400"><FaYoutube /></a>
              <a href="#" className="hover:text-purple-400"><MdFacebook />
              </a>
            </div>
          </div>

          <div className="col-span-1 flex justify-end items-start">
            <img
              src="/VincularLogo.png"
              alt="Vincular Logo"
              className="w-40"
            />
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-400">
          <p>&copy; 2025 by Vincular. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
