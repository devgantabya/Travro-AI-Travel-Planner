"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../ui/Logo";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/">Home</Link>

          {/* Explore Dropdown */}
          <div className="relative">
            <button
              onClick={() => setExploreOpen(!exploreOpen)}
              className="flex items-center gap-1"
            >
              Explore <ChevronDown size={16} />
            </button>

            {exploreOpen && (
              <div className="absolute top-10 left-0 bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 w-40">
                <Link href="/explore?type=beach" className="block py-1">
                  Beaches
                </Link>
                <Link href="/explore?type=mountain" className="block py-1">
                  Mountains
                </Link>
                <Link href="/explore?type=city" className="block py-1">
                  Cities
                </Link>
              </div>
            )}
          </div>

          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          {/* AI Button */}
          <Link
            href="/explore"
            className="px-4 py-2 rounded-xl bg-blue-600 text-white"
          >
            AI Planner
          </Link>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-10 h-10 rounded-full bg-gray-300"
            ></button>

            {profileOpen && (
              <div className="absolute right-0 top-12 bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 w-40">
                <Link href="/dashboard" className="block py-1">
                  Dashboard
                </Link>
                <Link href="/profile" className="block py-1">
                  Profile
                </Link>
                <button className="block py-1 text-red-500">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <Link href="/">Home</Link>
          <Link href="/explore">Explore</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          <Link
            href="/login"
            className="block bg-blue-600 text-white text-center py-2 rounded-xl"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}