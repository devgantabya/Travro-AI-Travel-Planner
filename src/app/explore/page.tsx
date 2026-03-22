// app/explore/page.tsx

"use client";

import { useState, useEffect } from "react";
import DestinationCard from "@/components/explore/DestinationCard";
import SearchBar from "@/components/explore/SearchBar";
import FilterSidebar from "@/components/explore/FilterSidebar";

const allData = [
  { 
    id: "1", 
    title: "Bali Beach", 
    location: "Asia", 
    price: 450, 
    rating: 4.8, 
    image: "/images/bali.jpg" 
  },
  { 
    id: "2", 
    title: "Swiss Alps", 
    location: "Europe", 
    price: 900, 
    rating: 4.9, 
    image: "/images/switzerland.jpg" 
  },
  { 
    id: "3", 
    title: "Paris City", 
    location: "Europe", 
    price: 700, 
    rating: 4.7, 
    image: "/images/paris.webp" 
  },
  { 
    id: "4", 
    title: "Maldives Resort", 
    location: "Asia", 
    price: 1200, 
    rating: 5.0, 
    image: "/images/maldives.jpg" 
  },
];

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [sort, setSort] = useState("newest");
  const [filtered, setFiltered] = useState(allData);
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 4;

  useEffect(() => {
    let data = [...allData];

    // Search
    if (search) {
      data = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter: Location
    if (location) {
      data = data.filter((item) => item.location === location);
    }

    // Filter: Price
    if (price === "low") data = data.filter((i) => i.price < 500);
    if (price === "mid") data = data.filter((i) => i.price >= 500 && i.price <= 1000);
    if (price === "high") data = data.filter((i) => i.price > 1000);

    // Sorting
    if (sort === "low-high") data.sort((a, b) => a.price - b.price);
    if (sort === "high-low") data.sort((a, b) => b.price - a.price);
    if (sort === "rating") data.sort((a, b) => b.rating - a.rating);

    setFiltered(data);
    setPage(1);
  }, [search, location, price, sort]);

  // Pagination
  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Top */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar value={search} onChange={setSearch} />

        <select
          onChange={(e) => setSort(e.target.value)}
          className="p-3 rounded-xl border"
        >
          <option value="newest">Newest</option>
          <option value="low-high">Price Low → High</option>
          <option value="high-low">Price High → Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Sidebar */}
        <div>
          <FilterSidebar
            selectedLocation={location}
            setLocation={setLocation}
            selectedPrice={price}
            setPrice={setPrice}
          />
        </div>

        {/* Cards */}
        <div className="md:col-span-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginated.map((item) => (
            <DestinationCard key={item.id} {...item} />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 rounded ${
              page === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}