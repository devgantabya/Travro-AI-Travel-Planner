"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", users: 40 },
  { name: "Feb", users: 60 },
  { name: "Mar", users: 80 },
  { name: "Apr", users: 50 },
  { name: "May", users: 90 },
];

export default function BarChartComponent() {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "none",
            }}
          />
          <Bar
            dataKey="users"
            fill="#f97316" // orange-500
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}