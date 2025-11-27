import React, { useEffect, useState } from "react";
import axios from "axios";

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    patientName: "",
    gender: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    doctorId: "",
    department: "",
    notes: "",
  });

  const [doctors, setDoctors] = useState([]);

  // Fetch doctors from backend
  const loadDoctors = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/docters`);
      setDoctors(res.data);
    } catch (err) {
      console.error("Error fetching doctors:", err);
    }
  };

  useEffect(() => {
    loadDoctors();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/appointments/create`, {
        patientName: formData.patientName,
        doctorId: formData.doctorId,   // send correct doctor id
        date: formData.date,
        time: formData.time,
        notes: formData.notes,
      });

      alert("Appointment booked successfully!");

      setFormData({
        patientName: "",
        gender: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        doctorId: "",
        department: "",
        notes: "",
      });

    } catch (err) {
      console.error(err);
      alert("Failed to book appointment");
    }
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#F5F9FF] px-6 md:px-16 py-16 relative overflow-hidden">
      <img
        src="https://imgs.search.brave.com/P6ujndtyfIwEdvDA9rCLm5o_pmsu10QCwbqHELNQc64/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/NDc5NDY0Mi9waG90/by9lbXB0eS1jb3Jy/aWRvci1ob3NwaXRh/bC5qcGc_Yj0xJnM9/NjEyeDYxMiZ3PTAm/az0yMCZjPWxtVGNQ/Y00yZU5rb3RIRkk5/Z2Z2LUQ3QUU1Tzd5/WkNSdklxaWY3V2N0/cW89"
        alt="Doctor"
        className="absolute top-0 right-0 w-full h-full object-cover opacity-80"
      />

      {/* LEFT SIDE */}
      <div className="md:w-1/2 relative mb-10 md:mb-0">
        <div className="relative z-10 max-w-lg">
          <h2 className="text-[42px] font-bold text-blue-800 mb-4">
            Book an Appointment
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Schedule your appointment with our trusted specialists easily.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="md:w-1/2 bg-[#0E1A54] text-white shadow-lg overflow-hidden z-10">
        <form onSubmit={handleSubmit} className="p-8 md:p-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-4">

            <input
              name="patientName"
              type="text"
              placeholder="Name"
              value={formData.patientName}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-400 p-2 outline-none focus:border-blue-400 placeholder:text-gray-900"
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-400 p-2 outline-none focus:border-blue-400 text-gray-900"
            >
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-400 p-2 outline-none focus:border-blue-400 placeholder:text-gray-900"
            />

            <input
              name="phone"
              type="text"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-400 p-2 outline-none focus:border-blue-400 placeholder:text-gray-900"
            />

            <input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-400 p-2 outline-none focus:border-blue-400 text-gray-900"
            />

            <input
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-400 p-2 outline-none focus:border-blue-400 text-gray-900"
            />

            {/* DOCTORS DROPDOWN - DYNAMIC */}
            <select
              name="doctorId"
              value={formData.doctorId}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-400 p-2 outline-none focus:border-blue-400 text-gray-900 "
            >
              <option value="">Select Doctor</option>

              {doctors.map((doc) => (
                <option key={doc._id} value={doc._id}>
                  {doc.name} — {doc.specialization}
                </option>
              ))}
            </select>

            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-400 p-2 outline-none focus:border-blue-400 text-gray-900"
            >
              <option value="">Department</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Orthopedics</option>
              <option>Dermatology</option>
            </select>
          </div>

          <textarea
            name="notes"
            placeholder="Message"
            rows="1"
            value={formData.notes}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-400 p-2 outline-none focus:border-blue-400 placeholder:text-gray-900"
          ></textarea>

          <div className="bg-[#A4C4FF] mt-6 text-center">
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
