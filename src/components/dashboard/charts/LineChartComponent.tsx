"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", revenue: 400 },
  { name: "Feb", revenue: 800 },
  { name: "Mar", revenue: 600 },
  { name: "Apr", revenue: 900 },
  { name: "May", revenue: 1200 },
];

export default function LineChartComponent() {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "none",
            }}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#f97316"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}