"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Khan",
    role: "Traveler",
    review:
      "Travro made planning my trip effortless. The AI suggestions were incredibly accurate and saved me hours.",
  },
  {
    name: "John Smith",
    role: "Digital Nomad",
    review:
      "I discovered destinations I never considered. It feels like having a personal travel assistant.",
  },
  {
    name: "Ayesha Rahman",
    role: "Travel Blogger",
    review:
      "Clean UI, fast performance, and truly useful recommendations. This is how travel apps should be.",
  },
  {
    name: "Michael Lee",
    role: "Entrepreneur",
    review:
      "The experience is smooth and intuitive. Planning trips is no longer stressful.",
  },
  {
    name: "Fatima Noor",
    role: "Photographer",
    review:
      "Every suggestion was visually stunning. Perfect for my travel photography work.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
          <h2 className="text-3xl font-bold mb-8">
            What people love about Travro
          </h2>


        {/* Scroll Container */}
        <div
          className="flex gap-6 overflow-x-auto pb-4 
                     snap-x snap-mandatory 
                     scrollbar-hide"
        >
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px] 
                         snap-start
                         p-6 rounded-2xl 
                         bg-white dark:bg-gray-900
                         border border-gray-100 dark:border-gray-800
                         shadow-sm hover:shadow-xl
                         transition-all duration-300"
            >
              {/* Review */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                “{item.review}”
              </p>

              {/* User */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>

                {/* Rating */}
                <div className="text-orange-500 text-sm">
                  ★★★★★
                </div>
              </div>

              {/* Accent */}
              <div className="mt-5 h-[2px] w-12 bg-orange-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}