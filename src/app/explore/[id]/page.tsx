"use client";

import { useParams } from "next/navigation";
import { useState, useMemo } from "react";
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
      "Marvel at the snowy peaks of the Swiss Alps and enjoy outdoor adventures.",
  },
  {
    id: "3",
    title: "Paris City",
    location: "Europe",
    price: 700,
    rating: 4.7,
    image: "/images/paris.webp",
    description:
      "Experience the city of love with its historic landmarks, cafes, and art.",
  },
  {
    id: "4",
    title: "Maldives Resort",
    location: "Asia",
    price: 1200,
    rating: 5.0,
    image: "/images/maldives.jpg",
    description:
      "Relax in luxury overwater villas and enjoy pristine beaches in the Maldives.",
  },
];

export default function DetailsPage() {
  const { id } = useParams();
  const [tab, setTab] = useState<"overview" | "details" | "reviews">("overview");

  // ✅ Hook must be called unconditionally
  const item = useMemo(() => data.find((d) => d.id === id), [id]);
  const related = useMemo(() => data.filter((d) => d.id !== id), [id]);

  if (!item)
    return (
      <p className="text-center py-20 text-gray-500 text-lg">
        Destination not found 😔
      </p>
    );

  const tabs: { key: "overview" | "details" | "reviews"; label: string }[] = [
    { key: "overview", label: "Overview" },
    { key: "details", label: "Details" },
    { key: "reviews", label: "Reviews" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
      
      {/* Hero Image */}
      <div className="h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      </div>

      {/* Info & Booking */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">{item.title}</h1>
        <p className="text-gray-500">{item.location}</p>
        <div className="flex gap-6 items-center">
          <span className="text-yellow-500 font-medium">⭐ {item.rating}</span>
          <span className="text-blue-600 font-semibold">${item.price}</span>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
          Book Now
        </button>
      </div>

      {/* Tabs */}
      <div>
        <div className="flex gap-6 border-b pb-2">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`capitalize py-1 transition ${
                tab === t.key
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-blue-600"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
          {tab === "overview" && <p>{item.description}</p>}

          {tab === "details" && (
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Price:</strong> ${item.price}
              </li>
              <li>
                <strong>Location:</strong> {item.location}
              </li>
              <li>
                <strong>Rating:</strong> {item.rating}
              </li>
            </ul>
          )}

          {tab === "reviews" && (
            <div className="space-y-3">
              <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
                ⭐⭐⭐⭐⭐ Amazing place!
              </div>
              <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
                ⭐⭐⭐⭐ Very beautiful experience!
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Destinations */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Related Destinations</h2>
        {related.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {related.map((d) => (
              <DestinationCard key={d.id} {...d} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-10">
            No related destinations found.
          </p>
        )}
      </div>
    </div>
  );
}