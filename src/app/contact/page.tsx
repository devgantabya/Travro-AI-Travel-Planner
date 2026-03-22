"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Dummy submission for now
    if (form.name && form.email && form.message) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 space-y-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Get in Touch
      </h1>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We'd love to hear from you! Reach out to us with any questions or feedback.
          </p>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <strong>Email:</strong> support@travro.com
            </div>
            <div>
              <strong>Phone:</strong> +880 1234 567890
            </div>
            <div>
              <strong>Address:</strong> 123 Travro Street, Dhaka, Bangladesh
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-white"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-white"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-white"
                placeholder="Write your message..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>

            {status === "success" && (
              <p className="text-green-600 mt-2">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-2">Please fill in all fields.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}