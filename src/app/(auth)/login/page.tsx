"use client";

import { useState } from "react";

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
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md">

        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-3 rounded-xl border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-3 rounded-xl border"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-xl"
        >
          Login
        </button>

        {/* Demo Login */}
        <button
          onClick={demoLogin}
          className="w-full mt-3 border py-3 rounded-xl"
        >
          Demo Login
        </button>

        {/* Social */}
        <button className="w-full mt-3 bg-red-500 text-white py-3 rounded-xl">
          Continue with Google
        </button>
      </div>
    </div>
  );
}