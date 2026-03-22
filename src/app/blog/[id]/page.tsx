"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { blogs } from "@/data/blogs";

export default function BlogDetailsPage() {
  const params = useParams();
  const id = params?.id as string | undefined;

  // Wait until id exists
  if (!id) return null;

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">Blog not found 😔</h2>
        <Link href="/blog" className="text-blue-600 mt-4 inline-block">
          Back to Blog
        </Link>
      </div>
    );
  }

  // ✅ Compute readingTime safely
  const readingTime =
    blog.content?.split(" ").length
      ? Math.ceil(blog.content.split(" ").length / 200)
      : 1;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <p className="text-sm opacity-80">{blog.category}</p>
          <h1 className="text-2xl md:text-3xl font-bold">{blog.title}</h1>
        </div>
      </div>

      {/* Layout */}
      <div className="grid lg:grid-cols-3 gap-10 mt-10">

        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="text-sm text-gray-500 mb-6">
            {blog.date} • {readingTime} min read • By {blog.author}
          </div>

          <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed text-[17px]">
            {blog.content
              ?.split("\n")
              .filter((para) => para.trim() !== "")
              .map((para, i) => (
                <p key={i}>{para}</p>
              ))}
          </div>

          <button className="mt-8 px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:scale-105 transition">
            Summarize with AI 🤖
          </button>

          <Link href="/blog" className="inline-block mt-6 text-blue-600 font-medium">
            ← Back to Blog
          </Link>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="block mt-4 text-sm text-gray-500 hover:text-blue-600"
          >
            ↑ Back to top
          </button>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 sticky top-24 h-fit">
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-md">
            <h3 className="font-semibold mb-2">About Author</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {blog.author} is a travel enthusiast sharing insights about
              destinations, tips, and AI-powered travel planning.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-md">
            <h3 className="font-semibold mb-4">Related Posts</h3>
            <div className="space-y-3">
              {blogs
                .filter((b) => b.id !== blog.id)
                .slice(0, 3)
                .map((item) => (
                  <Link
                    key={item.id}
                    href={`/blog/${item.id}`}
                    className="block p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    <p className="text-sm font-medium hover:text-blue-600 transition">
                      {item.title}
                    </p>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}