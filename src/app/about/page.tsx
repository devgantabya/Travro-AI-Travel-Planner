"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 space-y-16">

      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Travro
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            Travro is your AI-powered travel companion, designed to make
            exploring the world easy, fun, and personalized. From
            destination suggestions to secure bookings, we help you plan
            your dream trips effortlessly.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Our mission is to make travel accessible and enjoyable for
            everyone while using smart technology to deliver the best
            experiences.
          </p>
        </div>

        <div className="relative w-full h-[350px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/images/about-hero.webp" 
            alt="About Travro"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-10 text-center">
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-lg">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">500+</h2>
          <p className="text-gray-600 dark:text-gray-300">Destinations</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-lg">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">10K+</h2>
          <p className="text-gray-600 dark:text-gray-300">Happy Travelers</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-lg">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">24/7</h2>
          <p className="text-gray-600 dark:text-gray-300">Support</p>
        </div>
      </div>

      {/* Team / Mission Section */}
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our Mission
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto text-lg leading-relaxed">
          We believe that travel should be seamless, fun, and personalized.
          Our AI-driven platform provides smart recommendations, easy bookings,
          and instant support so that every journey is unforgettable.
        </p>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to explore the world with Travro?
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Join thousands of travelers who trust Travro for their journeys.
        </p>
        <a
          href="/explore"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition"
        >
          Explore Now
        </a>
      </div>
    </section>
  );
}