"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<null | "success" | "error" | "loading">(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    if (!form.name || !form.email || !form.message) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(form.email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      setStatus("error");
      return;
    }

    try {
      setStatus("loading");

      // 🔥 Replace with API later
      await new Promise((res) => setTimeout(res, 1000));

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-14 md:py-20 space-y-16">
      
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          Get in Touch
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          We would love to hear from you. Send us a message anytime.
        </p>
      </div>

      {/* Grid */}
      <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-start">
        
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Contact Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Reach out for support, feedback, or partnership opportunities.
            </p>
          </div>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p><strong>Email:</strong> support@travro.com</p>
            <p><strong>Phone:</strong> +880 1234 567890</p>
            <p><strong>Address:</strong> Dhaka, Bangladesh</p>
          </div>

          {/* Map */}
          <div className="w-full h-[250px] sm:h-[300px] rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Write your message..."
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition disabled:opacity-70"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {/* Status Messages */}
            {status === "success" && (
              <p className="text-green-600 text-sm">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm">
                ❌ Please enter valid information.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}