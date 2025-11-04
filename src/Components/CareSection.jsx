import React from "react";
import { Heart } from "lucide-react";

export default function CareSection() {
  const specialties = [
    "Neurology",
    "Bones",
    "Oncology",
    "Otorhinolaryngology",
    "Ophthalmology",
    "Cardiovascular",
    "Pulmonology",
    "Renal Medicine",
    "Gastroenterology",
    "Urology",
    "Dermatology",
    "Gynaecology",
  ];

  return (
    <section className="py-16 bg-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h4 className="text-blue-800 font-semibold tracking-wider text-4xl uppercase">
          Always Caring
        </h4>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Our Specialties
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {specialties.map((item) => (
          <div
            key={item}
            className="flex flex-col items-center justify-center py-10 border transition-all duration-300 cursor-pointer hover:shadow-lg"
          >
            <Heart className="w-10 h-10 mb-3 text-blue-500" />
            <p className="text-base font-medium text-gray-700">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
