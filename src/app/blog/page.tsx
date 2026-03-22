"use client";

import { useState } from "react";
import Link from "next/link";
import { blogs } from "@/data/blogs";


export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

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
    <div className="max-w-7xl mx-auto px-4 py-16">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">
          Travel Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Tips, insights, and AI-powered travel guides
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <input
          type="text"
          placeholder="Search blog..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-3 rounded-xl bg-gray-100 dark:bg-gray-800 outline-none"
        />

        <select
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800"
        >
          <option value="">All Categories</option>
          <option value="Travel">Travel</option>
          <option value="AI">AI</option>
          <option value="Tips">Tips</option>
        </select>
      </div>

      {/* Featured Post */}
      {filtered[0] && (
        <div className="mb-12 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">

            <img
              src={filtered[0].image}
              className="w-full h-full object-cover"
            />

            <div className="p-8 bg-white dark:bg-gray-900 flex flex-col justify-center">
              <p className="text-sm text-blue-600 mb-2">
                {filtered[0].category}
              </p>

              <h2 className="text-2xl font-bold mb-3">
                {filtered[0].title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {filtered[0].excerpt}
              </p>

              <span className="text-sm text-gray-500">
                {filtered[0].date}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Blog Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((blog) => (
          <Link
  href={`/blog/${blog.id}`}
  key={blog.id}
  className="rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition block"
>
  <div className="h-48 overflow-hidden">
    <img
      src={blog.image}
      className="w-full h-full object-cover hover:scale-105 transition"
    />
  </div>

  <div className="p-5 flex flex-col justify-between h-[200px]">
    <div>
      <p className="text-xs text-blue-600 mb-1">
        {blog.category}
      </p>

      <h3 className="font-semibold text-lg">
        {blog.title}
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        {blog.excerpt.slice(0, 80)}...
      </p>
    </div>

    <div className="flex justify-between items-center mt-4">
      <span className="text-xs text-gray-400">
        {blog.date}
      </span>

      <span className="text-blue-600 text-sm font-medium">
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