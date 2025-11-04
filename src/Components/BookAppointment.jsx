import React from "react";

export default function BookAppointment() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#F5F9FF] px-6 md:px-16 py-16 relative overflow-hidden">
        <img
          src="https://imgs.search.brave.com/P6ujndtyfIwEdvDA9rCLm5o_pmsu10QCwbqHELNQc64/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/NDc5NDY0Mi9waG90/by9lbXB0eS1jb3Jy/aWRvci1ob3NwaXRh/bC5qcGc_Yj0xJnM9/NjEyeDYxMiZ3PTAm/az0yMCZjPWxtVGNQ/Y00yZU5rb3RIRkk5/Z2Z2LUQ3QUU1Tzd5/WkNSdklxaWY3V2N0/cW89"
          alt="Doctor"
          className=" absolute top-0 right-0 w-full h-full object-cover opacity-80 "
        />
      
      {/* LEFT SIDE - IMAGE + TEXT */}
      <div className="md:w-1/2 relative mb-10 md:mb-0">
        <div className="relative z-10 max-w-lg">
          <h2 className="text-[42px] font-bold text-blue-800 mb-4">
            Book an Appointment
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Convallis felis vitae
            tortor augue. Velit nascetur proin massa in. Consequat faucibus
            porttitor enim et.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="md:w-1/2 bg-[#0E1A54] text-white  shadow-lg overflow-hidden z-10">
        <form className="p-8 md:p-10">
          {/* GRID FIELDS */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent border-b border-gray-400 p-2 outline-none focus:border-blue-400 placeholder:text-gray-300"
            />
            <select className="bg-transparent border-b border-gray-400 p-2 outline-none focus:border-blue-400 text-gray-300">
              <option className="text-gray-700">Gender</option>
              <option className="text-gray-700">Male</option>
              <option className="text-gray-700">Female</option>
              <option className="text-gray-700">Other</option>
            </select>

            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border-b border-gray-400 p-2 outline-none focus:border-blue-400 placeholder:text-gray-300"
            />
            <input
              type="text"
              placeholder="Phone"
              className="bg-transparent border-b border-gray-400 p-2 outline-none focus:border-blue-400 placeholder:text-gray-300"
            />

            <input
              type="date"
              className="bg-transparent border-b border-gray-400 p-2 outline-none focus:border-blue-400 text-gray-300"
            />
            <input
              type="time"
              className="bg-transparent border-b border-gray-400 p-2 outline-none focus:border-blue-400 text-gray-300"
            />

            <select className="bg-transparent border-b border-gray-400 p-2 outline-none focus:border-blue-400 text-gray-300">
              <option className="text-gray-700">Doctor</option>
              <option className="text-gray-700">Dr. Riya Sharma</option>
              <option className="text-gray-700">Dr. Aarav Patel</option>
              <option className="text-gray-700">Dr. Kavya Singh</option>
              <option className="text-gray-700">Dr. Rohit Mehta</option>
            </select>
            <select className="bg-transparent border-b border-gray-400 p-2 outline-none focus:border-blue-400 text-gray-300">
              <option className="text-gray-700">Department</option>
              <option className="text-gray-700">Cardiology</option>
              <option className="text-gray-700">Neurology</option>
              <option className="text-gray-700">Orthopedics</option>
              <option className="text-gray-700">Dermatology</option>
            </select>
          </div>

          {/* MESSAGE BOX */}
          <textarea
            placeholder="Message"
            rows="3"
            className="w-full bg-transparent border-b border-gray-400 p-2 outline-none focus:border-blue-400 placeholder:text-gray-300"
          ></textarea>

          {/* SUBMIT BUTTON */}
          <div className="bg-[#A4C4FF] mt-6 text-center ">
            <button
              type="submit"
              className="w-full py-3 font-semibold text-[#0E1A54] hover:bg-blue-300 transition-all"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
