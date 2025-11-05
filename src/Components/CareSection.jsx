import React from "react";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

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

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F8FBFF] overflow-hidden">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h4 className="text-blue-700 font-semibold tracking-widest text-2xl uppercase">
          Always Caring
        </h4>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          Our Specialties
        </h2>
        <div className="flex justify-center mt-4">
          <div className="w-24 h-1 bg-blue-500 rounded-full"></div>
        </div>
      </motion.div>

      {/* Animated Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {specialties.map((item, index) => (
          <motion.div
            key={item}
            variants={card}
            whileHover={{
              scale: 1.07,
              rotate: Math.random() > 0.5 ? 1 : -1,
              boxShadow: "0px 8px 20px rgba(37, 99, 235, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex flex-col items-center justify-center py-10 bg-white border border-gray-200 rounded-xl shadow-sm cursor-pointer hover:border-blue-400 transition-all"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Heart className="w-10 h-10 mb-3 text-blue-500" />
            </motion.div>
            <p className="text-base font-semibold text-gray-700 text-center">
              {item}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
