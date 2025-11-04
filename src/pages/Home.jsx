import React from "react";
import CareSection from "../Components/CareSection";
import ServicesSection from "../Components/ServicesSection";
import BookAppointment from "../Components/BookAppointment";
import DoctorsSection from "../Components/DoctorsSection";
import NewsSection from "../Components/NewsSection";
import ContactSection from "../Components/ContactSection";

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* ✅ HERO SECTION */}
      <section className="relative bg-[#F5F9FF] flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 md:py-28 overflow-hidden">
        {/* Left Content */}
        <div className="md:w-1/2 z-10">
          <p className="text-blue-500 font-semibold uppercase tracking-wider mb-2">
            Caring for Life
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0E273A] leading-snug mb-6">
            Leading the Way <br /> in Medical Excellence
          </h1>
          <button className="bg-[#D8E3FF] text-[#0E273A] px-6 py-3 rounded-full font-semibold hover:bg-blue-200 transition">
            Our Services
          </button>
        </div>

        {/* Right Doctor Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=80"
            alt="Doctor"
            className="w-[450px] md:w-[550px] object-cover z-10"
          />
          <div className="absolute bg-blue-100 w-[400px] h-[400px] rounded-full top-10 right-5 blur-3xl opacity-40"></div>
        </div>

        {/* Decorative background shapes */}
        <div className="absolute bottom-0 left-0 bg-blue-100 w-72 h-72 rounded-tr-[150px] opacity-40"></div>
        <div className="absolute top-0 right-0 bg-blue-50 w-60 h-60 rounded-bl-[100px] opacity-40"></div>
      </section>

      {/* ✅ Appointment CTA Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-20 py-12 bg-white">
        {/* Card 1 */}
        <div className="flex items-center justify-between bg-[#0E273A] text-white px-6 py-6 rounded-xl hover:scale-105 transition-transform cursor-pointer">
          <div>
            <h3 className="text-lg font-semibold">Book an Appointment</h3>
          </div>
          <i className="fa-regular fa-calendar text-3xl text-blue-100"></i>
        </div>

        {/* Card 2 */}
        <div className="flex items-center justify-between bg-[#D8E3FF] text-[#0E273A] px-6 py-6 rounded-xl hover:scale-105 transition-transform cursor-pointer">
          <div>
            <h3 className="text-lg font-semibold">Book an Appointment</h3>
          </div>
          <i className="fa-solid fa-user-group text-3xl text-[#0E273A]"></i>
        </div>

        {/* Card 3 */}
        <div className="flex items-center justify-between bg-[#1D9BF0] text-white px-6 py-6 rounded-xl hover:scale-105 transition-transform cursor-pointer">
          <div>
            <h3 className="text-lg font-semibold">Book an Appointment</h3>
          </div>
          <i className="fa-solid fa-hospital text-3xl text-blue-100"></i>
        </div>
      </section>

      {/* ✅ Welcome Section */}
      <section className="text-center mt-16 px-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">
          Welcome to Mini Project+
        </h2>
        <p className="text-4xl font-semibold text-gray-500 italic mb-4 mt-4">
          A Great Place to Receive Care
        </p>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto">
          At MiniProject+, we are dedicated to providing top-notch healthcare
          services to our community. Our team of experienced medical
          professionals is committed to ensuring your well-being through
          compassionate care and advanced medical practices.
        </p>

        {/* Image with Text Overlay */}
        <div className="relative mt-10 flex justify-center items-center">
          <img
            src="https://www.shmsolutions.in/assets/images/bg/patient-management-system.gif"
            alt="Healthcare Services"
            className="w-[1200px] h-full object-cover filter grayscale-25 brightness-75 transition-all duration-500 hover:grayscale-0 hover:brightness-100"
          />
        </div>
      </section>

      {/* ✅ Care Section */}
      <CareSection />

      {/* ✅ Other Sections */}
      <section>
        <ServicesSection />
        <DoctorsSection />
        <BookAppointment />
        <NewsSection></NewsSection>
        <ContactSection></ContactSection>
      </section>
    </div>
  );
};

export default Home;
