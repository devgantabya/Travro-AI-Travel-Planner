"use client";

import { useState } from "react";
import Image from "next/image";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all required fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Registered successfully (demo)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl">

        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Create Account
        </h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white
                     focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white
                     focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white
                     focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        />

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white
                     focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        />

        {/* Phone (optional) */}
        <input
          type="text"
          placeholder="Phone (optional)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white
                     focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        />

        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="w-full bg-orange-500 hover:bg-orange-600 active:scale-95 text-white py-3 rounded-xl font-medium transition"
        >
          Register
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <span className="flex-grow h-px bg-gray-300 dark:bg-gray-600" />
          <span className="px-3 text-gray-400">or</span>
          <span className="flex-grow h-px bg-gray-300 dark:bg-gray-600" />
        </div>

        {/* Social Login */}
        <button className="w-full flex items-center justify-center gap-2 mt-2 bg-red-500 hover:bg-red-600 active:scale-95 text-white py-3 rounded-xl font-medium transition">
  <Image
    src="/icons/google-icon.png"
    alt="Google"
    width={20}
    height={20}
  />
  Continue with Google
</button>

        {/* Footer */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-orange-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}