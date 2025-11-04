import React, { useState } from "react";
import { User, Users, CheckCircle, MinusCircle } from "lucide-react";

export default function ServicesSection() {
  const [active, setActive] = useState("Patient Onboarding and Care");

  const categories = [
    "Patient Onboarding and Care",
    "Inventory Management",
    "Pharmacy & Billing",
    "Human Resources Management",
    "Finance",
    "Mobility",
  ];

  const cards = [
    {
      icon: <User size={40} />,
      title: "Registration",
      text: "Fast, accurate, and paperless onboarding",
    },
    {
      icon: <Users size={40} />,
      title: "Admission",
      text: "Swift and efficient admissions process",
    },
    {
      icon: <CheckCircle size={40} />,
      title: "Diagnosis",
      text: "Accurate insights for informed decision-making",
    },
    {
      icon: <MinusCircle size={40} />,
      title: "Discharge & Follow-Up Care",
      text: "Efficient discharge and continuous care",
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFF] text-center">
      {/* Header */}
      <div className="mb-10">
        <button className="bg-blue-100 text-blue-900 font-semibold px-6 py-2 rounded-full mb-6">
          Our Services
        </button>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`px-5 py-2 rounded-full border transition-all ${
                active === category
                  ? "bg-pink-200 border-pink-300 text-pink-700"
                  : "bg-white border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0E273A] mb-4">
          Streamlined patient care from registration to follow-up
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          See how our HMS streamlines patient onboarding and care from
          registration to follow-up.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto mt-12">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#0052CC] text-white p-8 rounded-3xl flex flex-col items-center text-center shadow-md hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-sm opacity-90">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
