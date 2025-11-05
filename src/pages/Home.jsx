import React from "react";
import CareSection from "../Components/CareSection";
import ServicesSection from "../Components/ServicesSection";
import BookAppointment from "../Components/BookAppointment";
import DoctorsSection from "../Components/DoctorsSection";
import NewsSection from "../Components/NewsSection";
import ContactSection from "../Components/ContactSection";
import { Stethoscope, Users, Hospital } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* ✅ HERO SECTION */}
      <section
        id="home"
        className="relative bg-[#F5F9FF] flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 md:py-28 overflow-hidden"
      >
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 z-10"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-blue-500 font-semibold uppercase tracking-wider mb-2">
            Caring for Life
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0E273A] leading-snug mb-6">
            Leading the Way <br /> in Medical Excellence
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D8E3FF] text-[#0E273A] px-6 py-3 rounded-full font-semibold hover:bg-blue-200 transition"
          >
            Our Services
          </motion.button>
        </motion.div>

        {/* Right Doctor Image */}
        <motion.div
          className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=80"
            alt="Doctor"
            className="w-[450px] md:w-[550px] object-cover z-10 rounded-2xl shadow-lg"
          />
          <div className="absolute bg-blue-100 w-[400px] h-[400px] rounded-full top-10 right-5 blur-3xl opacity-40"></div>
        </motion.div>

        {/* Decorative background shapes */}
        <div className="absolute bottom-0 left-0 bg-blue-100 w-72 h-72 rounded-tr-[150px] opacity-40"></div>
        <div className="absolute top-0 right-0 bg-blue-50 w-60 h-60 rounded-bl-[100px] opacity-40"></div>
      </section>

      {/* ✅ Appointment CTA Cards */}
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:absolute sm:bottom-[80px] right-0 sm:right-[320px] gap-6 px-6 md:px-20 py-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.7, staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-between  bg-[#0E273A] text-white px-6 py-6 rounded-xl shadow-lg cursor-pointer"
        >
          <div>
            <h3 className="text-lg font-semibold">Book an Appointment</h3>
            <p className="text-sm text-gray-300">Consult the best doctors</p>
          </div>
          <Stethoscope className="w-8 h-8 text-blue-100 ml-4" />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-between bg-[#D8E3FF] text-[#0E273A] px-6 py-6 rounded-xl shadow-lg cursor-pointer"
        >
          <div>
            <h3 className="text-lg font-semibold">Our Specialists</h3>
            <p className="text-sm text-gray-600">Meet expert doctors</p>
          </div>
          <Users className="w-8 h-8 text-[#0E273A]" />
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-between bg-[#1D9BF0] text-white px-6 py-6 rounded-xl shadow-lg cursor-pointer"
        >
          <div>
            <h3 className="text-lg font-semibold">Our Hospitals</h3>
            <p className="text-sm text-blue-100">Find care near you</p>
          </div>
          <Hospital className="w-8 h-8 text-blue-100" />
        </motion.div>
      </motion.section>

      {/* ✅ Welcome Section */}
      <motion.section
        id="about"
        className="text-center mt-36 px-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-500 uppercase tracking-wide">
          Welcome to AryaCare+
        </h2>
        <p className="text-4xl font-semibold text-gray-600 italic mb-6">
          A Great Place to Receive Care
        </p>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
          At AryaCare+, we are dedicated to providing top-notch healthcare
          services to our community. Our team of experienced medical
          professionals ensures your well-being through compassionate care and
          modern medical practices.
        </p>

        {/* Image with Text Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mt-10 flex justify-center items-center"
        >
          <img
            src="https://www.shmsolutions.in/assets/images/bg/patient-management-system.gif"
            alt="Healthcare Services"
            className="w-[1200px] h-full"
          />
        </motion.div>
      </motion.section>

      {/* ✅ Care Section */}
      <section id="care">
        <CareSection />
      </section>

      {/* ✅ Other Sections */}
      <section id="services">
        <ServicesSection />
      </section>

      <section id="doctors">
        <DoctorsSection />
      </section>

      <section id="appointment">
        <BookAppointment />
      </section>

      <section id="news">
        <NewsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;
