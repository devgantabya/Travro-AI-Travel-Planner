"use client";

import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Completed", value: 400 },
  { name: "Pending", value: 300 },
  { name: "Cancelled", value: 200 },
];

const COLORS = ["#f97316", "#fb923c", "#fed7aa"]; // orange shades

export default function PieChartComponent() {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={4}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "none",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}