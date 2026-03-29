"use client";

export default function SettingsPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Settings
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
        <div>
          <label className="text-sm text-gray-500">
            Site Name
          </label>
          <input
            className="w-full mt-1 px-4 py-2 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
            defaultValue="My Dashboard"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Admin Email
          </label>
          <input
            className="w-full mt-1 px-4 py-2 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
            defaultValue="admin@email.com"
          />
        </div>

        <button className="bg-orange-500 text-white px-5 py-2.5 rounded-xl hover:bg-orange-600 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
}