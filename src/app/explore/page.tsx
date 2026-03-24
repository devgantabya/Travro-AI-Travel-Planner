"use client";

import { useState, useMemo } from "react";
import DestinationCard from "@/components/explore/DestinationCard";
import SearchBar from "@/components/explore/SearchBar";
import FilterSidebar from "@/components/explore/FilterSidebar";

type Destination = {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  image: string;
};

const allData: Destination[] = [
  { id: "1", title: "Bali Beach", location: "Asia", price: 450, rating: 4.8, image: "/images/bali.jpg" },
  { id: "2", title: "Swiss Alps", location: "Europe", price: 900, rating: 4.9, image: "/images/switzerland.jpg" },
  { id: "3", title: "Paris City", location: "Europe", price: 700, rating: 4.7, image: "/images/paris.webp" },
  { id: "4", title: "Maldives Resort", location: "Asia", price: 1200, rating: 5.0, image: "/images/maldives.jpg" },
];

const ITEMS_PER_PAGE = 6;

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);

  // 🔥 Optimized filtering
  const filtered = useMemo(() => {
    let data = [...allData];

    if (search) {
      data = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (location) {
      data = data.filter((item) => item.location === location);
    }

    if (price === "low") data = data.filter((i) => i.price < 500);
    if (price === "mid") data = data.filter((i) => i.price >= 500 && i.price <= 1000);
    if (price === "high") data = data.filter((i) => i.price > 1000);

    switch (sort) {
      case "low-high":
        data.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        data.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        data.sort((a, b) => b.rating - a.rating);
        break;
    }

    return data;
  }, [search, location, price, sort]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  // Reset filters
  const resetFilters = () => {
    setSearch("");
    setLocation("");
    setPrice("");
    setSort("newest");
    setPage(1);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 space-y-8">

      {/* Top Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        
        <SearchBar value={search} onChange={setSearch} />

        <div className="flex gap-3 w-full md:w-auto">
          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 
                       focus:outline-none focus:ring-2 focus:ring-orange-500 
                       appearance-none cursor-pointer"
          >
            <option value="newest">Newest</option>
            <option value="low-high">Price Low → High</option>
            <option value="high-low">Price High → Low</option>
            <option value="rating">Top Rated</option>
          </select>

          {/* Reset */}
          <button
            onClick={resetFilters}
            className="px-4 py-2.5 rounded-xl bg-gray-200 dark:bg-gray-700 
                       hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Sidebar */}
        <aside className="md:sticky md:top-20 h-fit">
          <FilterSidebar
            selectedLocation={location}
            setLocation={setLocation}
            selectedPrice={price}
            setPrice={setPrice}
          />
        </aside>

        {/* Content */}
        <div className="md:col-span-3 space-y-6">
          
          {/* Results count */}
          <p className="text-sm text-gray-500">
            Showing {filtered.length} destinations
          </p>

          {/* Cards */}
          {paginated.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {paginated.map((item) => (
                <DestinationCard key={item.id} {...item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-500">
              No destinations found 😕
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 pt-4 flex-wrap">
              {Array.from({ length: totalPages }).map((_, i) => {
                const active = page === i + 1;

                return (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`px-4 py-2 rounded-xl transition 
                      ${
                        active
                          ? "bg-orange-500 text-white"
                          : "bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
                      }`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}