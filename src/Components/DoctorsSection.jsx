import React, { useEffect, useState } from "react";
import { Linkedin, Facebook, Instagram } from "lucide-react";

export default function DoctorsSection() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadDoctors = async () => {
    try {
      const res = await fetch("https://aryacare-backend.onrender.com/api/docters");
      const data = await res.json();
      setDoctors(data);
    } catch (err) {
      console.log("Error fetching doctors:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadDoctors();
  }, []);

  if (loading)
    return <p className="text-center py-20 text-xl font-semibold">Loading Doctors...</p>;

  return (
    <section className="py-20 bg-[#F9FBFF] text-center">
      {/* Header */}
      <div className="mb-12">
        <p className="text-blue-500 font-semibold uppercase tracking-wide mb-2">
          Trusted Care
        </p>
        <h2 className="text-4xl font-bold text-[#0E273A]">Our Doctors</h2>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 md:px-20 max-w-7xl mx-auto">
        {doctors.map((doc) => (
          <div
            key={doc._id}
            className="bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Doctor Image */}
            <img
              src={doc.image}
              alt={doc.name}
              className="w-full h-[400px] object-cover"
            />

            {/* Blue Info Section */}
            <div className="bg-[#BFD3FF] py-6">
              <h3 className="text-lg font-medium text-[#0E273A] uppercase ">{doc.name}</h3>
              <p className="text-blue-800 font-bold tracking-wider uppercase text-sm">
                {doc.specialization}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-6 mt-4">
                <a
                  href="#"
                  className="bg-white p-2 shadow-sm hover:bg-blue-200 transition"
                >
                  <Linkedin size={18} className="text-[#0E273A]" />
                </a>
                <a
                  href="#"
                  className="bg-white p-2 shadow-sm hover:bg-blue-200 transition"
                >
                  <Facebook size={18} className="text-[#0E273A]" />
                </a>
                <a
                  href="#"
                  className="bg-white p-2 shadow-sm hover:bg-blue-200 transition"
                >
                  <Instagram size={18} className="text-[#0E273A]" />
                </a>
              </div>
            </div>

            {/* View Profile Button */}
            <div className="bg-[#0E273A] py-3 text-white font-medium hover:bg-blue-900 transition">
              <button>View Profile</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-10 space-x-2">
        <span className="w-3 h-3 rounded-full bg-blue-500"></span>
        <span className="w-3 h-3 rounded-full bg-blue-300"></span>
        <span className="w-3 h-3 rounded-full bg-blue-300"></span>
      </div>
    </section>
  );
}
