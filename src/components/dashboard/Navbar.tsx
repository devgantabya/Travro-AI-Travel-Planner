"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Settings,
  LogOut,
  User,
  Menu,
} from "lucide-react";
import useAuth from "@/hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Mobile menu button (for future sidebar toggle) */}
        <button className="md:hidden p-2 rounded-lg hover:bg-orange-50 transition">
          <Menu size={20} className="text-gray-600" />
        </button>

        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Dashboard
          </h2>
          <p className="text-xs text-gray-400 hidden sm:block">
            Welcome back 👋
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl bg-orange-50 hover:bg-orange-100 transition"
        >
          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-semibold shadow-sm">
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>

          {/* Name + Role */}
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-sm font-medium text-gray-700 leading-none">
              {user?.name || "User"}
            </span>
            <span className="text-[11px] text-orange-500 capitalize">
              {user?.role || "member"}
            </span>
          </div>

          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown */}
        <div
          className={`absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-xl p-2 transition-all duration-200 ${
            open
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
        >
          <ul className="text-sm">
            <li className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-orange-50 cursor-pointer transition">
              <User size={16} className="text-gray-500" />
              <span>Profile</span>
            </li>

            <li className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-orange-50 cursor-pointer transition">
              <Settings size={16} className="text-gray-500" />
              <span>Settings</span>
            </li>

            {/* Divider */}
            <div className="my-1 h-px bg-gray-100" />

            <li
              onClick={logout}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-500 hover:bg-red-50 cursor-pointer transition"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}