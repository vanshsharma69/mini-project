import React from "react";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const contactItems = [
    {
      icon: <Phone size={36} className="text-[#0E273A]" />,
      title: "Emergency",
      bg: "bg-[#C8D9FF]",
      content: (
        <>
          (237) 681-812-255 <br /> (237) 666-331-894
        </>
      ),
    },
    {
      icon: <MapPin size={36} className="text-blue-200" />,
      title: "Location",
      bg: "bg-[#0E1A54] text-white",
      content: (
        <>
          0123 Some place <br /> 9876 Some country
        </>
      ),
    },
    {
      icon: <Mail size={36} className="text-[#0E273A]" />,
      title: "Email",
      bg: "bg-[#C8D9FF]",
      content: (
        <>
          fildineeesoe@gmail.com <br /> myebstudios@gmail.com
        </>
      ),
    },
    {
      icon: <Clock size={36} className="text-[#0E273A]" />,
      title: "Working Hours",
      bg: "bg-[#C8D9FF]",
      content: (
        <>
          Mon-Sat 09:00–20:00 <br /> Sunday Emergency only
        </>
      ),
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" } },
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#F9FBFF] to-[#E9F2FF] text-center overflow-hidden">
      {/* Decorative blur background */}
      <div className="absolute -top-20 -right-16 w-96 h-96 bg-blue-200 blur-3xl opacity-30 rounded-full"></div>

      {/* Header */}
      <motion.div
        className="relative mb-16 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-blue-600 font-semibold uppercase tracking-widest">
          Get in Touch
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0E273A] mt-2">
          Contact Us
        </h2>
        <div className="flex justify-center mt-4">
          <div className="w-24 h-1 bg-blue-500 rounded-full"></div>
        </div>
      </motion.div>

      {/* Contact Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6 relative z-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {contactItems.map((itemData, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0px 15px 30px rgba(37, 99, 235, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`${itemData.bg} p-8 rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer text-left`}
          >
            <div className="flex flex-col items-start space-y-3">
              {itemData.icon}
              <h3
                className={`text-lg font-bold uppercase ${
                  itemData.bg.includes("text-white")
                    ? "text-white"
                    : "text-[#0E273A]"
                }`}
              >
                {itemData.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  itemData.bg.includes("text-white")
                    ? "text-blue-100"
                    : "text-[#0E273A]/80"
                }`}
              >
                {itemData.content}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Footer Info */}
      <motion.div
        className="mt-16 text-gray-600 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p>© 2025 MediCare+ | All Rights Reserved</p>
      </motion.div>

      {/* Bottom decorative blur */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-tr-[150px] blur-3xl opacity-40"></div>
    </section>
  );
}
