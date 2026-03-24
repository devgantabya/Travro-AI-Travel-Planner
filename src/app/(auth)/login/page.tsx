"use client";

import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    alert("Login success (demo)");
  };

  const demoLogin = () => {
    setEmail("user@example.com");
    setPassword("123456");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl">

        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Welcome Back
        </h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white
                     focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white
                     focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 hover:bg-orange-600 active:scale-95 text-white py-3 rounded-xl font-medium transition"
        >
          Login
        </button>

        {/* Demo Login */}
        <button
          onClick={demoLogin}
          className="w-full mt-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-3 rounded-xl font-medium transition"
        >
          Demo Login
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
    src="/icons/google.svg"
    alt="Google"
    width={20}
    height={20}
  />
  Continue with Google
</button>

        {/* Footer */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
          Do not have an account?{" "}
          <a href="/signup" className="text-orange-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}