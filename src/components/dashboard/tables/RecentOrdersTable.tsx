"use client";

import { useState } from "react";

const initialData = [
  { id: 1, name: "John Doe", amount: "$120", status: "Completed" },
  { id: 2, name: "Jane Smith", amount: "$80", status: "Pending" },
  { id: 3, name: "Alex Ray", amount: "$150", status: "Completed" },
  { id: 4, name: "Chris Lee", amount: "$60", status: "Cancelled" },
];

export default function RecentOrdersTable() {
  const [search, setSearch] = useState("");

  const filtered = initialData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Search */}
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b border-gray-100">
              <th className="py-3">Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-100 hover:bg-orange-50 transition"
              >
                <td className="py-3">{item.name}</td>
                <td>{item.amount}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === "Completed"
                        ? "bg-orange-100 text-orange-600"
                        : item.status === "Pending"
                        ? "bg-orange-50 text-orange-500"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty State */}
        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-6">
            No results found
          </p>
        )}
      </div>
    </div>
  );
}