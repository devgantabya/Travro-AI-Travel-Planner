"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  // ✅ Dynamic categories
  const categories = Array.from(
    new Set(blogs.map((blog) => blog.category))
  );

  // ✅ Filter logic
  const filtered = blogs.filter((blog) => {
    const matchSearch = blog.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory = category
      ? blog.category === category
      : true;

    return matchSearch && matchCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
      
      {/* Header */}
      <div className="text-center mb-10 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3">
          Travel Blog
        </h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
          Tips, insights, and AI-powered travel guides
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-8 md:mb-10">
        <input
          type="text"
          placeholder="Search blog..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-3 rounded-xl bg-gray-100 dark:bg-gray-800 outline-none text-sm"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-sm"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Featured Post */}
      {filtered[0] && (
        <Link
          href={`/blog/${filtered[0].id}`}
          className="block mb-10 md:mb-12 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition"
        >
          <div className="grid md:grid-cols-2">
            
            <div className="relative h-[220px] sm:h-[260px] md:h-full">
              <Image
                src={filtered[0].image}
                alt={filtered[0].title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 sm:p-6 md:p-8 bg-white dark:bg-gray-900 flex flex-col justify-center">
              <p className="text-xs sm:text-sm text-orange-500 mb-2">
                {filtered[0].category}
              </p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3">
                {filtered[0].title}
              </h2>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 md:mb-4">
                {filtered[0].excerpt}
              </p>

              <span className="text-xs sm:text-sm text-gray-500">
                {filtered[0].date}
              </span>
            </div>
          </div>
        </Link>
      )}

      {/* Blog Grid */}
      <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((blog) => (
          <Link
            href={`/blog/${blog.id}`}
            key={blog.id}
            className="rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition group"
          >
            {/* Image */}
            <div className="relative h-44 sm:h-48 overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 flex flex-col justify-between h-[190px]">
              <div>
                <p className="text-xs text-orange-500 mb-1">
                  {blog.category}
                </p>

                <h3 className="font-semibold text-base sm:text-lg line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 mt-2 line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-gray-400">
                  {blog.date}
                </span>

                <span className="text-orange-500 text-xs sm:text-sm font-medium">
                  Read More →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          No blog found 😔
        </p>
      )}
    </div>
  );
}