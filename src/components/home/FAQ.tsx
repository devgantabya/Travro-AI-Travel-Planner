// components/home/FAQ.tsx

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How does Travro AI work?",
    a: "Travro uses AI to analyze your preferences and suggest the best travel destinations.",
  },
  {
    q: "Is the service free?",
    a: "Yes, basic features are free. Premium features may be added later.",
  },
  {
    q: "Can I book trips directly?",
    a: "Yes, you can explore and book trips directly from the platform.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white dark:bg-gray-900 shadow-md p-5"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex justify-between w-full items-center"
              >
                <span className="font-medium">{item.q}</span>
                <ChevronDown
                  className={`transition ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === i && (
                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}