"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../ui/Logo";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // active route checker
  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-gray-900/60">

      {/* gradient divider */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300/30 to-transparent dark:via-gray-700/30" />

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

          {[
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`relative group transition ${
                isActive(item.path)
                  ? "text-blue-600"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {item.name}

              {/* underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300
                ${isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </Link>
          ))}

          {/* Explore Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setExploreOpen(true)}
            onMouseLeave={() => setExploreOpen(false)}
          >
            <button className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
              Explore <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {exploreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-12 left-0 w-48 p-2 rounded-2xl 
                  bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl
                  shadow-xl border border-white/20 dark:border-gray-700/30"
                >
                  {["Beaches", "Mountains", "Cities"].map((item) => (
                    <Link
                      key={item}
                      href={`/explore?type=${item.toLowerCase()}`}
                      className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      {item}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">

          {/* AI Button */}
          <Link
            href="/explore"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold shadow-md hover:scale-105 hover:shadow-lg transition"
          >
            ✨ AI Planner
          </Link>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-200 to-gray-400 
              dark:from-gray-700 dark:to-gray-500 shadow-inner hover:scale-105 transition"
            />

            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-14 w-44 p-2 rounded-2xl 
                  bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl
                  shadow-xl border border-white/20 dark:border-gray-700/30"
                >
                  <Link href="/dashboard" className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    Dashboard
                  </Link>
                  <Link href="/dashboard/profile" className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    Profile
                  </Link>
                  <button className="block w-full text-left px-3 py-2 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20">
                    Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden px-6 overflow-hidden"
          >
            <div className="flex flex-col gap-3 text-sm font-medium py-4">
              {["Home", "Explore", "Blog", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {item}
                </Link>
              ))}

              <Link
                href="/login"
                className="mt-2 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-full"
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}