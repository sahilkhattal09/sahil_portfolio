"use client";
import { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { MdContactMail } from "react-icons/md";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message sent!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      alert("Failed to send.");
    }
  };

  return (
    <section className="bg-[#0e0e2c] text-white">
      {/* HEADER */}
      <div className="w-screen bg-[#181d33] py-4">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-gray-400 text-lg md:text-xl font-semibold">
            Get In Touch
          </h2>
        </div>
      </div>

      {/* CONTACT CARD */}
      <div className="flex flex-col items-center justify-center px-4 py-10">
        <div className="w-full max-w-5xl border border-[#2b2f55] rounded-xl shadow-xl shadow-black/30 flex flex-col md:flex-row overflow-hidden">
          {/* LEFT PANEL */}
          <div className="relative md:w-1/2 bg-gradient-to-br from-[#121530] to-[#1d223f] text-white p-10 flex items-center justify-center overflow-hidden">
            {/* Glowing Background Circle */}
            <div className="absolute w-60 h-60 bg-orange-500 rounded-full blur-2xl opacity-15 left-[-30px] top-[-30px] z-0" />

            {/* Contact Info */}
            <div className="space-y-6 text-center z-10">
              <div className="flex justify-center">
                <MdContactMail className="text-5xl text-orange-400 drop-shadow-xl" />
              </div>
              <h3 className="text-2xl font-bold drop-shadow text-white">
                Contact Information
              </h3>

              <div className="flex items-center justify-center gap-3 text-gray-300">
                <FiPhone className="text-orange-400 text-xl" />
                <span>+91 9730658857</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <FiMail className="text-orange-400 text-xl" />
                <span>sahilkhattal7@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <FiMapPin className="text-orange-400 text-xl" />
                <span>Goa, India</span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL (White Form) */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 md:w-1/2 space-y-4 text-black"
          >
            <div className="flex gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-1/2 border-b border-gray-300 focus:outline-none focus:border-teal-500 p-2"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-1/2 border-b border-gray-300 focus:outline-none focus:border-teal-500 p-2"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Your Subject"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-teal-500 p-2"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Write your message here"
              rows={4}
              className="w-full border-b border-gray-300 focus:outline-none focus:border-teal-500 p-2"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
