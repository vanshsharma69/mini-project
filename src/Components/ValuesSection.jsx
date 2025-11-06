import React from "react";
import {
  ThumbsUp,
  Heart,
  UserRound,
  CheckCircle,
  Network,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import stethoscope from "../assets/stethoscope_img.png"

export default function ValuesSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-white py-24 px-6 md:px-16 text-center relative overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-blue-600 font-semibold text-2xl">Our Values</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What We Stand For
        </h2>
      </motion.div>

      {/* Content Grid */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-14 md:gap-20">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-12 md:w-1/3 text-left">
          {[
            {
              icon: <ThumbsUp className="text-blue-600 w-8 h-8" />,
              title: "Clinical Excellence",
              desc: "We nurture the vision of turning distant medical possibilities into today's realities.",
            },
            {
              icon: <Heart className="text-blue-600 w-8 h-8" />,
              title: "Patient Friendly Environment",
              desc: "We are dedicated to achieving patients' good health, maintaining the spirit of “Selfless Service”.",
            },
            {
              icon: <UserRound className="text-blue-600 w-8 h-8" />,
              title: "Personalized Care",
              desc: "Our commitment to personalized care to improve patients' health is ingrained in our DNA.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
            >
              {item.icon}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CENTER IMAGE */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/3 flex justify-center"
        >
          <img
            src={stethoscope}
            alt="stethoscope"
            className=""
          />
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-12 md:w-1/3 text-left">
          {[
            {
              icon: <CheckCircle className="text-blue-600 w-8 h-8" />,
              title: "Quality Standards",
              desc: "Our advanced healthcare and streamlined processes deliver unparalleled care and simplicity.",
            },
            {
              icon: <Network className="text-blue-600 w-8 h-8" />,
              title: "Cutting-Edge Technologies",
              desc: "We embrace precision and cutting-edge technologies to provide a world-class healthcare experience.",
            },
            {
              icon: <Users className="text-blue-600 w-8 h-8" />,
              title: "Trained Nursing Staff",
              desc: "Our team of residents and nurses ensures utmost care for all patients.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={i + 3}
              viewport={{ once: true }}
            >
              {item.icon}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
