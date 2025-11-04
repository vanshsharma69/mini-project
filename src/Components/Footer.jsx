import React from "react";
import { Send, Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0E1A54] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-left">

        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold tracking-wide">MEDDICAL</h2>
          <p className="mt-4 text-gray-300 leading-relaxed text-sm">
            Leading the Way in Medical <br /> Excellence, Trusted Care.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Important Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-blue-300 cursor-pointer">Appointment</li>
            <li className="hover:text-blue-300 cursor-pointer">Doctors</li>
            <li className="hover:text-blue-300 cursor-pointer">Services</li>
            <li className="hover:text-blue-300 cursor-pointer">About Us</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <span className="font-medium">Call:</span> (237) 681-812-255
            </li>
            <li>
              <span className="font-medium">Email:</span>{" "}
              fildineeesoe@gmail.com
            </li>
            <li>
              <span className="font-medium">Address:</span> 0123 Some place,
              <br /> Some country
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <div className="flex items-center bg-[#C8D9FF] rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-3 py-2 bg-transparent text-[#0E1A54] placeholder:text-[#0E1A54]/60 focus:outline-none text-sm"
            />
            <button className="bg-[#C8D9FF] hover:bg-[#B4C9FF] px-3 py-2">
              <Send size={18} className="text-[#0E1A54]" />
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-500 mt-10 mb-6"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-gray-300 text-sm space-y-4 md:space-y-0">
        <p>© 2025 Hospital's Name. All Rights Reserved by PNTEC-LTD</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400 transition">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
