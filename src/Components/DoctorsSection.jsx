import React from "react";
import { Linkedin, Facebook, Instagram } from "lucide-react";

const doctors = [
  {
    name: "Dr. Leo Das",
    specialty: "Neurology",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Dr. Michael",
    specialty: "Neurology",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Dr. Murli",
    specialty: "Neurology",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfPDfh_iBghXle4Nk0SJ_1FEXBCUasiflp5w&s",
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
                {doc.name}
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
