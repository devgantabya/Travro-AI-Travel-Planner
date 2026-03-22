
"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Khan",
    role: "Traveler",
    review:
      "Travro made planning my trip effortless. The AI suggestions were spot on!",
  },
  {
    name: "John Smith",
    role: "Digital Nomad",
    review:
      "I discovered amazing destinations I never thought of. Highly recommended!",
  },
  {
    name: "Ayesha Rahman",
    role: "Blogger",
    review:
      "Clean UI, smart features, and super helpful recommendations. Loved it!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What Our Users Say
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-lg"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                “{item.review}”
              </p>

              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}