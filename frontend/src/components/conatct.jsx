// ContactForm.jsx
"use client";
import React, { useState } from "react";
import { showToast } from "@/helpers/showToast";
import { getEnv } from "@/helpers/getEnv";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const api = getEnv("VITE_API_URL") || "";

    try {
      const res = await fetch(`${api}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if(!res.ok){
          showToast("error",data.message);
          return;
      }

      showToast("success","Message sent successfully");

      setStatus("Message sent successfully ✅");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      showToast("error","Something went wrong");
    }
  };

  return (
    <section className="bg-white py-5 px-6 lg:px-12" id="contact">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-50 p-6 rounded-2xl shadow-md mt-10"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-medium py-3 rounded-xl hover:bg-white hover:text-black border border-black transition"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="text-center mt-4 text-gray-700 font-medium">{status}</p>
        )}
      </div>
    </section>
  );
}
