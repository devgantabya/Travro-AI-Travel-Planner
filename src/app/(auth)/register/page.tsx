"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = () => {
    if (!name || !email) {
      alert("Fill all fields");
      return;
    }

    alert("Registered successfully");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md">

        <h2 className="text-2xl font-bold mb-4">Register</h2>

        <input
          placeholder="Name"
          className="w-full mb-3 p-3 rounded-xl border"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          className="w-full mb-3 p-3 rounded-xl border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 text-white py-3 rounded-xl"
        >
          Register
        </button>
      </div>
    </div>
  );
}