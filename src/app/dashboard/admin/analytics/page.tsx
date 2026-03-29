"use client";

import BarChartComponent from "@/components/dashboard/charts/BarChartComponent";
import LineChartComponent from "@/components/dashboard/charts/LineChartComponent";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Analytics
      </h1>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <h3 className="mb-4 font-semibold">Users Growth</h3>
          <BarChartComponent />
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <h3 className="mb-4 font-semibold">Revenue</h3>
          <LineChartComponent />
        </div>
      </div>
    </div>
  );
}