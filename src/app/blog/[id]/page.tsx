"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";

type Blog = {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string;
  author?: string;
  excerpt: string;
  content?: string;
};

export default function BlogDetailsPage() {
  const params = useParams();
  const id = params?.id as string | undefined;

  // Loading state
  if (!id) {
    return <div className="py-20 text-center">Loading...</div>;
  }

  const blog = blogs.find((b: Blog) => b.id === id);

  // Not found
  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">Blog not found 😔</h2>
        <Link href="/blog" className="text-orange-500 mt-4 inline-block">
          Back to Blog
        </Link>
      </div>
    );
  }

  // Reading time
  const words = blog.content?.split(" ").length || 0;
  const readingTime = Math.max(1, Math.ceil(words / 200));

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
      
      {/* Hero Section */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
          <p className="text-xs sm:text-sm opacity-80">{blog.category}</p>
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold leading-tight">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Layout */}
      <div className="grid lg:grid-cols-3 gap-8 md:gap-10 mt-8 md:mt-10">
        
        {/* Main Content */}
        <div className="lg:col-span-2">
          
          <div className="text-xs sm:text-sm text-gray-500 mb-5">
            {blog.date} • {readingTime} min read • By{" "}
            {blog.author || "Travro Team"}
          </div>

          <div className="space-y-4 sm:space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed text-[15px] sm:text-[17px]">
            {blog.content ? (
              blog.content
                .split("\n")
                .filter((para) => para.trim() !== "")
                .map((para, i) => <p key={i}>{para}</p>)
            ) : (
              <p>No content available.</p>
            )}
          </div>

          {/* Buttons */}
          <button className="mt-8 px-5 py-2.5 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition">
            Summarize with AI 🤖
          </button>

          <Link
            href="/blog"
            className="inline-block mt-6 text-orange-500 font-medium"
          >
            ← Back to Blog
          </Link>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="block mt-4 text-sm text-gray-500 hover:text-orange-500"
          >
            ↑ Back to top
          </button>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 sticky top-24 h-fit">
          
          {/* Author */}
          <div className="p-5 md:p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-md">
            <h3 className="font-semibold mb-2">About Author</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {blog.author || "Travro Team"} is a travel enthusiast sharing
              insights about destinations, tips, and AI-powered travel planning.
            </p>
          </div>

          {/* Related Posts */}
          <div className="p-5 md:p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-md">
            <h3 className="font-semibold mb-4">Related Posts</h3>
            <div className="space-y-3">
              {blogs
                .filter((b: Blog) => b.id !== blog.id)
                .slice(0, 3)
                .map((item: Blog) => (
                  <Link
                    key={item.id}
                    href={`/blog/${item.id}`}
                    className="block p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    <p className="text-sm font-medium hover:text-orange-500 transition">
                      {item.title}
                    </p>
                    <span className="text-xs text-gray-400">
                      {item.date}
                    </span>
                  </Link>
                ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}