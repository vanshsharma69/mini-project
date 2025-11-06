import React, { useState, useEffect, useContext } from "react";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../context/AuthContext"; // 👈 Import context

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext); // 👈 Access user + logout

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      if (e.target.tagName === "A" && e.target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <nav className="w-full bg-[#1E2B6C] text-white px-6 py-4 shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="font-bold text-2xl tracking-wide">
          <a href="/">AryaCare+</a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-base">
          <li><a href="/" className="hover:text-blue-200 font-semibold">Home</a></li>
          <li><a href="#about" className="hover:text-blue-200">About Us</a></li>
          <li><a href="#services" className="hover:text-blue-200">Services</a></li>
          <li><a href="#doctors" className="hover:text-blue-200">Doctors</a></li>
          <li><a href="#news" className="hover:text-blue-200">News</a></li>
          <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-5">
          <a
            href="#appointment"
            className="bg-blue-100 text-[#1E2B6C] font-semibold px-6 py-2 rounded-full hover:bg-blue-200 transition-all"
          >
            Appointment
          </a>

          {/* If logged in, show user info + logout */}
          {user ? (
            <div className="flex items-center gap-4">
              <button
                onClick={logout}
                className="bg-white text-[#1E2B6C] font-semibold px-5 py-2 rounded-full hover:bg-gray-200 transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <a
              href="/login"
              className="bg-white text-[#1E2B6C] font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition-all"
            >
              Login
            </a>
          )}
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
        <div className="md:hidden mt-4 space-y-4 text-center bg-[#1E2B6C]/95 py-6 rounded-xl shadow-lg">
          <ul className="flex flex-col space-y-4 text-lg font-medium">
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#doctors" onClick={() => setIsOpen(false)}>Doctors</a></li>
            <li><a href="#news" onClick={() => setIsOpen(false)}>News</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>

          <div className="flex flex-col items-center space-y-4 mt-6">
            <a
              href="#appointment"
              className="bg-blue-100 text-[#1E2B6C] font-semibold px-6 py-2 rounded-full hover:bg-blue-200 transition-all w-4/5"
              onClick={() => setIsOpen(false)}
            >
              Appointment
            </a>

            {user ? (
              <>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="bg-white text-[#1E2B6C] font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition-all w-4/5"
                >
                  Logout
                </button>
              </>
            ) : (
              <a
                href="/login"
                className="bg-white text-[#1E2B6C] font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition-all w-4/5"
                onClick={() => setIsOpen(false)}
              >
                Login
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

