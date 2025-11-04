import React from "react";
import { Linkedin, Facebook, Instagram } from "lucide-react";

const doctors = [
  {
    name: "Dr. Daniel Osei",
    specialty: "Neurology",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Michael Brown",
    specialty: "Neurology",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Maria Gonzalez",
    specialty: "Neurology",
    image:
      "https://imgs.search.brave.com/bYlKBJeKywiSzk_xzr938U1j6ggZPC_m0Ky0iOrGQPs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC95NXoyM3li/MHQ0ZjAvMmR0U2Vj/aWpSOE5HWDBIUE5D/NTJ1SC81MDI4MWQz/ODI1OGY3NmRlZjc0/OGE3YjIwN2FjYzNm/YS90b3AtZG9jcy0x/MDE1MTgtMTAuanBn",
  },
];

export default function DoctorsSection() {
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
        {doctors.map((doc, index) => (
          <div
            key={index}
            className="bg-white  overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Doctor Image */}
            <img
              src={doc.image}
              alt={doc.name}
              className="w-full h-[400px] object-cover"
            />

            {/* Blue Info Section */}
            <div className="bg-[#BFD3FF] py-6">
              <h3 className="text-lg font-medium text-[#0E273A]">
                Doctor’s Name
              </h3>
              <p className="text-blue-800 font-bold tracking-wider uppercase text-sm">
                {doc.specialty}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-6 mt-4">
                <a
                  href="#"
                  className="bg-white p-2  shadow-sm hover:bg-blue-200 transition"
                >
                  <Linkedin size={18} className="text-[#0E273A]" />
                </a>
                <a
                  href="#"
                  className="bg-white p-2  shadow-sm hover:bg-blue-200 transition"
                >
                  <Facebook size={18} className="text-[#0E273A]" />
                </a>
                <a
                  href="#"
                  className="bg-white p-2  shadow-sm hover:bg-blue-200 transition"
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
