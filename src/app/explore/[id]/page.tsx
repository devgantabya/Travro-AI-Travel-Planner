"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import DestinationCard from "@/components/explore/DestinationCard";

const data = [
  {
    id: "1",
    title: "Bali Beach",
    location: "Indonesia",
    price: 450,
    rating: 4.8,
    image: "/images/bali.jpg",
    description:
      "Enjoy the beautiful beaches of Bali with crystal clear water and relaxing vibes.",
  },
  {
    id: "2",
    title: "Swiss Alps",
    location: "Europe",
    price: 900,
    rating: 4.9,
    image: "/images/switzerland.jpg",
    description:
      "Enjoy the beautiful beaches of Bali with crystal clear water and relaxing vibes.",
  },
  {
    id: "3", 
    title: "Paris City", 
    location: "Europe", 
    price: 700, 
    rating: 4.7, 
    image: "/images/paris.webp",
    description:
      "Enjoy the beautiful beaches of Bali with crystal clear water and relaxing vibes.",
  },
  {
    id: "4", 
    title: "Maldives Resort", 
    location: "Asia", 
    price: 1200, 
    rating: 5.0, 
    image: "/images/maldives.jpg",
    description:
      "Enjoy the beautiful beaches of Bali with crystal clear water and relaxing vibes.",
  },
];

export default function DetailsPage() {
  const { id } = useParams();
  const [tab, setTab] = useState("overview");

  const item = data.find((d) => d.id === id);

  if (!item) return <p>Not found</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Image */}
      <div className="h-[400px] w-full rounded-2xl overflow-hidden">
        <img
          src={item.image}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold">{item.title}</h1>
        <p className="text-gray-500">{item.location}</p>

        <div className="flex gap-6 mt-2">
          <span>⭐ {item.rating}</span>
          <span className="text-blue-600 font-semibold">
            ${item.price}
          </span>
        </div>

        {/* Booking */}
        <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl">
          Book Now
        </button>
      </div>

      {/* Tabs */}
      <div className="mt-10">
        <div className="flex gap-4 border-b pb-2">
          {["overview", "details", "reviews"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`capitalize ${
                tab === t ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {tab === "overview" && (
            <p>{item.description}</p>
          )}

          {tab === "details" && (
            <ul className="space-y-2">
              <li>Price: ${item.price}</li>
              <li>Location: {item.location}</li>
              <li>Rating: {item.rating}</li>
            </ul>
          )}

          {tab === "reviews" && (
            <div className="space-y-3">
              <div className="p-3 bg-gray-100 rounded-xl">
                ⭐⭐⭐⭐⭐ Amazing place!
              </div>
              <div className="p-3 bg-gray-100 rounded-xl">
                ⭐⭐⭐⭐ Very সুন্দর experience!
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Items */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">
          Related Destinations
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {data.map((item) => (
            <DestinationCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}