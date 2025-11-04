import React from "react";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 bg-[#F9FBFF] text-center">
      {/* Header */}
      <div className="mb-12">
        <p className="text-blue-500 font-semibold uppercase tracking-wider">
          Get in Touch
        </p>
        <h2 className="text-4xl font-bold text-[#0E273A] mt-2">Contact</h2>
      </div>

      {/* Contact Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        
        {/* Emergency */}
        <div className="bg-[#C8D9FF] p-8  shadow-sm hover:shadow-lg transition-all">
          <div className="flex flex-col items-start text-left space-y-3">
            <Phone size={36} className="text-[#0E273A]" />
            <h3 className="text-lg font-bold text-[#0E273A] uppercase">Emergency</h3>
            <p className="text-[#0E273A]/80 leading-relaxed text-sm">
              (237) 681-812-255<br />
              (237) 666-331-894
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="bg-[#0E1A54] text-white p-8  shadow-sm hover:shadow-lg transition-all">
          <div className="flex flex-col items-start text-left space-y-3">
            <MapPin size={36} className="text-blue-200" />
            <h3 className="text-lg font-bold uppercase">Location</h3>
            <p className="leading-relaxed text-sm text-blue-100">
              0123 Some place<br />
              9876 Some country
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="bg-[#C8D9FF] p-8  shadow-sm hover:shadow-lg transition-all">
          <div className="flex flex-col items-start text-left space-y-3">
            <Mail size={36} className="text-[#0E273A]" />
            <h3 className="text-lg font-bold text-[#0E273A] uppercase">Email</h3>
            <p className="text-[#0E273A]/80 leading-relaxed text-sm">
              fildineeesoe@gmail.com<br />
              myebstudios@gmail.com
            </p>
          </div>
        </div>

        {/* Working Hours */}
        <div className="bg-[#C8D9FF] p-8  shadow-sm hover:shadow-lg transition-all">
          <div className="flex flex-col items-start text-left space-y-3">
            <Clock size={36} className="text-[#0E273A]" />
            <h3 className="text-lg font-bold text-[#0E273A] uppercase">
              Working Hours
            </h3>
            <p className="text-[#0E273A]/80 leading-relaxed text-sm">
              Mon-Sat 09:00–20:00<br />
              Sunday Emergency only
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
