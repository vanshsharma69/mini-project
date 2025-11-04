import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#1E2B6C] text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="font-bold text-2xl tracking-wide">
          <Link to="/">AryaCare+</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-base">
          <li>
            <Link to="/" className="hover:text-blue-200 font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-200">
              About us
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-200">
              Services
            </Link>
          </li>
          <li>
            <Link to="/doctors" className="hover:text-blue-200">
              Doctors
            </Link>
          </li>
          <li>
            <Link to="/news" className="hover:text-blue-200">
              News
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-200">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right side - Search + Button */}
        <div className="hidden md:flex items-center space-x-5">
          <Search className="text-white cursor-pointer hover:text-blue-200" size={22} />
          <Link
            to="/book-appointment"
            className="bg-blue-100 text-[#1E2B6C] font-semibold px-6 py-2  hover:bg-blue-200 transition-all"
          >
            Appointment
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          <ul className="flex flex-col space-y-3 text-lg">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link to="/doctors" onClick={() => setIsOpen(false)}>Doctors</Link></li>
            <li><Link to="/news" onClick={() => setIsOpen(false)}>News</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>

          <div className="flex justify-center items-center space-x-3 mt-4">
            <Search className="text-white" size={20} />
            <Link
              to="/book-appointment"
              className="bg-blue-100 text-[#1E2B6C] font-semibold px-6 py-2 rounded-full hover:bg-blue-200 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
