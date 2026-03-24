"use client";

import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "500+", label: "Destinations" },
  { value: "10K+", label: "Happy Travelers" },
  { value: "24/7", label: "Support" },
];

export default function AboutPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 md:py-20 space-y-16 md:space-y-20">
      
      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
        
        {/* Text */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
            About <span className="text-orange-500">Travro</span>
          </h1>

          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
            Travro is your AI-powered travel companion, designed to make
            exploring the world easy, fun, and personalized. From smart
            destination suggestions to seamless bookings, we help you plan
            your dream trips effortlessly.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            Our mission is to make travel accessible and enjoyable for
            everyone by combining innovation, simplicity, and powerful
            AI-driven experiences.
          </p>

          {/* CTA */}
          <div className="mt-6">
            <Link
              href="/explore"
              className="inline-block px-6 py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition"
            >
              Explore Now
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full h-[250px] sm:h-[320px] md:h-[380px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/images/about-hero.webp"
            alt="About Travro"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 text-center">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-md hover:shadow-xl transition"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-1">
              {stat.value}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Mission Section */}
      <div className="space-y-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Our Mission
        </h2>

        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          We believe travel should be seamless, exciting, and personalized.
          Our AI-driven platform delivers smart recommendations, effortless
          bookings, and real-time support — ensuring every journey becomes
          a memorable experience.
        </p>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl md:rounded-3xl py-10 px-6 shadow-lg">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
          Ready to explore the world with Travro?
        </h3>

        <p className="text-sm sm:text-base mb-6 opacity-90">
          Join thousands of travelers who trust Travro for smarter journeys.
        </p>

        <Link
          href="/explore"
          className="inline-block px-6 py-3 bg-white text-orange-600 rounded-xl font-medium hover:bg-gray-100 transition"
        >
          Start Exploring
        </Link>
      </div>
    </section>
  );
}