"use client";

import { useEffect, useState } from "react";
import DestinationCard from "../explore/DestinationCard";
import SkeletonCard from "../ui/SkeletonCard";

interface Destination {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  image: string;
}

export default function PopularDestinations() {
  const [data, setData] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API
    setTimeout(() => {
      setData([
        {
          id: "1",
          title: "Bali Beach",
          location: "Indonesia",
          price: 450,
          rating: 4.8,
          image: "/images/bali.jpg",
        },
        {
          id: "2",
          title: "Swiss Alps",
          location: "Switzerland",
          price: 900,
          rating: 4.9,
          image: "/images/switzerland.jpg",
        },
        {
          id: "3",
          title: "Paris City",
          location: "France",
          price: 700,
          rating: 4.7,
          image: "/images/paris.webp",
        },
        {
          id: "4",
          title: "Maldives Resort",
          location: "Maldives",
          price: 1200,
          rating: 5.0,
          image: "/images/maldives.jpg",
        },
      ]);
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-3xl font-bold mb-8">
          Popular Destinations
        </h2>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))
            : data.map((item) => (
                <DestinationCard key={item.id} {...item} />
              ))}
        </div>
      </div>
    </section>
  );
}