"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);

    // Simulated AI response (later connect OpenAI)
    setTimeout(() => {
      setResults([
        "Bali, Indonesia 🌴",
        "Phuket, Thailand 🏝️",
        "Colombo, Sri Lanka 🌊",
      ]);
      setLoading(false);
    }, 1200);
  };

  return (
    <section className="w-full min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Plan Your Trip with{" "}
            <span className="text-blue-600">AI</span>
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Discover destinations, get smart recommendations, and plan your
            perfect journey with Travro AI.
          </p>

          {/* AI INPUT */}
          <div className="mt-6 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-md flex gap-2">
            <input
              type="text"
              placeholder="e.g. Beach under $500 in Asia"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 outline-none bg-transparent px-2"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl"
            >
              Ask AI
            </button>
          </div>

          {/* LOADING */}
          {loading && (
            <p className="mt-4 text-sm text-gray-500">
              Thinking... 🤖
            </p>
          )}

          {/* RESULTS */}
          {results.length > 0 && (
            <div className="mt-4 space-y-2">
              {results.map((item, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl"
                >
                  {item}
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-xl">
            Explore Destinations
          </button>
        </div>

        {/* RIGHT */}
        <div className="hidden md:block relative h-96">
          <Image
            src="/images/travel-hero.jpg"
                      alt="Travel"
                      fill
            className="w-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}