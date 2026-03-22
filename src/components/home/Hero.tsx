"use client";

import { useState } from "react";
import {
  FaPlane,
  FaHotel,
  FaUmbrellaBeach,
  FaCar,
  FaHospital,
  FaSimCard,
  FaMobileAlt,
  FaMoneyBill,
  FaSearch,
} from "react-icons/fa";

const tabs = [
  { name: "Flight", icon: FaPlane },
  { name: "Hotel", icon: FaHotel },
  { name: "Shop", icon: FaMoneyBill },
  { name: "Holiday", icon: FaUmbrellaBeach },
  { name: "Visa", icon: FaMobileAlt },
  { name: "Medical", icon: FaHospital },
  { name: "Cars", icon: FaCar },
  { name: "eSIM", icon: FaSimCard },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Hotel");

  return (
    <section className="relative h-[280px] w-full mb-24">
      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/videos/travel-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Welcome to <span className="text-orange-500">Travro</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Find Flights, Hotels, Visa & Holidays
        </p>
      </div>

      {/* 🔥 Floating Search Card */}
      <div className="absolute left-1/2 -bottom-28 transform -translate-x-1/2 w-full max-w-7xl px-4">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6">

          {/* Tabs */}
          <div className="flex flex-wrap gap-6 border-b border-gray-200 pb-4 mb-6 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.name;

              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-2 text-sm font-medium pb-2 transition ${
                    isActive
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  <Icon className="text-lg" />
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Search Inputs */}
          <div className="grid md:grid-cols-5 gap-4 items-center">

            {/* Location */}
            <div className="flex flex-col px-4 py-3 rounded-xl bg-gray-50">
              <span className="text-xs text-gray-400">Location</span>
              <input
                type="text"
                placeholder="Cox's Bazar"
                className="bg-transparent outline-none text-sm font-medium"
              />
            </div>

            {/* Check-in */}
            <div className="flex flex-col px-4 py-3 rounded-xl bg-gray-50">
              <span className="text-xs text-gray-400">Check-in</span>
              <input
                type="date"
                className="bg-transparent outline-none text-sm font-medium"
              />
            </div>

            {/* Check-out */}
            <div className="flex flex-col px-4 py-3 rounded-xl bg-gray-50">
              <span className="text-xs text-gray-400">Check-out</span>
              <input
                type="date"
                className="bg-transparent outline-none text-sm font-medium"
              />
            </div>

            {/* Guests */}
            <div className="flex flex-col px-4 py-3 rounded-xl bg-gray-50">
              <span className="text-xs text-gray-400">Guests</span>
              <input
                type="number"
                placeholder="2"
                className="bg-transparent outline-none text-sm font-medium"
              />
            </div>

            {/* Search Button */}
            <button className="h-full flex items-center justify-center bg-orange-500 text-white rounded-xl px-6 py-3 hover:bg-orange-600 transition">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}