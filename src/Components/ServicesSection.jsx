import React, { useState } from "react";
import { User, Users, CheckCircle, MinusCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.15 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#F8FAFF] to-[#EAF3FF] text-center relative overflow-hidden">
      {/* Floating blurred background circle */}
      <div className="absolute -top-24 -right-16 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      {/* Header */}
      <motion.div
        className="relative z-10 mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-100 text-blue-900 font-semibold px-6 py-2 rounded-full mb-8 shadow-sm"
        >
          Our Services
        </motion.button>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(category)}
              className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                active === category
                  ? "bg-pink-200 border-pink-300 text-pink-700 shadow-md"
                  : "bg-white border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0E273A] mb-4">
          Streamlined patient care from registration to follow-up
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Experience seamless healthcare management with real-time data,
          efficient workflows, and personalized patient interactions.
        </p>
      </motion.div>

      {/* Service Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto mt-12 relative z-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariant}
              whileHover={{
                scale: 1.07,
                rotate: Math.random() > 0.5 ? 1 : -1,
                boxShadow: "0px 8px 30px rgba(59, 130, 246, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="bg-[#0052CC] text-white p-8 rounded-3xl flex flex-col items-center text-center shadow-lg cursor-pointer transition-all border border-blue-700 hover:border-blue-400"
            >
              <motion.div
                whileHover={{ rotate: 12, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-4"
              >
                {card.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm opacity-90">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Bottom decorative glow */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-tr-[150px] blur-3xl opacity-40"></div>
    </section>
  );
}
