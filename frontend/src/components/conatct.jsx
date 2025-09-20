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

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending your message...");
    setIsSending(true);

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

      setStatus("Message sent successfully! ");
      setFormData({ name: "", email: "", message: "" });
      setIsSending(false);
    } catch (err) {
      setStatus("Failed to send message. Please try again.");
      showToast("error","Something went wrong");
      setIsSending(false);
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

          <div className="min-h-6 mb-2">
            {status && (
              <p className={`text-sm ${isSending ? 'text-blue-600' : status.includes('success') ? 'text-green-600' : 'text-red-600'} font-medium flex items-center`}>
                {isSending && (
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {status}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSending}
            className={`w-full bg-black text-white font-medium py-3 px-6 rounded-xl border border-black transition-colors ${isSending ? 'opacity-70 cursor-not-allowed' : 'hover:bg-white hover:text-black'}`}
          >
            Send Message
          </button>
        </form>

        {/* {status && (
          <p className="text-center mt-4 text-gray-700 font-medium">{status}</p>
        )} */}
      </div>
    </section>
  );
}
