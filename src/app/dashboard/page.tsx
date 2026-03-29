"use client";

import OverviewCards from "@/components/dashboard/OverviewCards";
import BarChartComponent from "@/components/dashboard/charts/BarChartComponent";
import LineChartComponent from "@/components/dashboard/charts/LineChartComponent";
import PieChartComponent from "@/components/dashboard/charts/PieChartComponent";
import RecentOrdersTable from "@/components/dashboard/tables/RecentOrdersTable";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* 🔹 Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard Overview
        </h1>
        <p className="text-sm text-gray-500">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* 🔹 Overview Cards */}
      <OverviewCards />

      {/* 🔹 Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            Monthly Users
          </h3>
          <BarChartComponent />
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            Revenue Trend
          </h3>
          <LineChartComponent />
        </div>
      </div>

      {/* 🔹 Pie Chart */}
      <div className="bg-white p-5 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Order Distribution
        </h3>
        <PieChartComponent />
      </div>

      {/* 🔹 Data Table */}
      <div className="bg-white p-5 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Recent Orders
        </h3>
        <RecentOrdersTable />
      </div>
    </div>
  );
}