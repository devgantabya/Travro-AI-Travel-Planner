"use client";

import { Users, ShoppingCart, DollarSign, Activity } from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "1,240",
    icon: Users,
  },
  {
    title: "Total Orders",
    value: "320",
    icon: ShoppingCart,
  },
  {
    title: "Revenue",
    value: "$12,400",
    icon: DollarSign,
  },
  {
    title: "Growth",
    value: "+12%",
    icon: Activity,
  },
];

export default function OverviewCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">
                  {item.value}
                </h3>
              </div>

              <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center">
                <Icon className="text-orange-500" size={20} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}