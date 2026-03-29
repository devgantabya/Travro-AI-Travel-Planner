"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [name, setName] = useState("John Doe");

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
        <p className="text-sm text-gray-400">Manage your personal info</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-semibold">
            J
          </div>
          <button className="text-sm text-orange-500 hover:underline">
            Change Avatar
          </button>
        </div>

        <div className="space-y-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button className="bg-orange-500 text-white px-5 py-2.5 rounded-xl hover:bg-orange-600 transition">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}