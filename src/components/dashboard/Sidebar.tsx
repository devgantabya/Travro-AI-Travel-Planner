"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import {
  LayoutDashboard,
  User,
  ShoppingCart,
  Star,
  Users,
  Package,
  Settings,
  BarChart3,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuth();

  const isActive = (path: string) => pathname.startsWith(path);

  const linkClass = (path: string) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
      isActive(path)
        ? "bg-orange-500 text-white shadow-md shadow-orange-200"
        : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
    }`;

  // 🔥 MENU CONFIG (Scalable)
  const userMenu = [
    {
      name: "My Profile",
      path: "/dashboard/user/profile",
      icon: User,
    },
    {
      name: "My Orders",
      path: "/dashboard/user/orders",
      icon: ShoppingCart,
    },
    {
      name: "My Reviews",
      path: "/dashboard/user/reviews",
      icon: Star,
    },
  ];

  const adminMenu = [
    {
      name: "Manage Users",
      path: "/dashboard/admin/users",
      icon: Users,
    },
    {
      name: "Manage Products",
      path: "/dashboard/admin/products",
      icon: Package,
    },
    {
      name: "Manage Orders",
      path: "/dashboard/admin/orders",
      icon: ShoppingCart,
    },
    {
      name: "Analytics",
      path: "/dashboard/admin/analytics",
      icon: BarChart3,
    },
    {
      name: "Settings",
      path: "/dashboard/admin/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen sticky top-0 bg-[#fffaf5]">
      {/* Logo */}
      <div className="px-6 py-5">
        <h1 className="text-xl font-bold text-orange-500 tracking-tight">
          Dashboard
        </h1>
        <p className="text-xs text-gray-400 mt-1">
          Manage your system
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 space-y-6 overflow-y-auto">
        {/* Overview */}
        <div className="space-y-1">
          <p className="text-[11px] uppercase text-gray-400 px-3">
            Overview
          </p>

          <Link href="/dashboard" className={linkClass("/dashboard")}>
            <LayoutDashboard size={18} />
            Overview
          </Link>
        </div>

        {/* User Section */}
        {user?.role === "user" && (
          <div className="space-y-1">
            <p className="text-[11px] uppercase text-gray-400 px-3">
              User Panel
            </p>

            {userMenu.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={linkClass(item.path)}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}

        {/* Admin Section */}
        {user?.role === "admin" && (
          <div className="space-y-1">
            <p className="text-[11px] uppercase text-gray-400 px-3">
              Admin Panel
            </p>

            {adminMenu.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={linkClass(item.path)}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4">
        <div className="bg-orange-50 rounded-xl p-3 text-xs text-gray-500">
          <p className="font-medium text-gray-700">Travro</p>
          <p className="text-[11px]">© 2026 All rights reserved</p>
        </div>
      </div>
    </aside>
  );
}