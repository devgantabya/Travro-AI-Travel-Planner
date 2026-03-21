import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Manage your travel plans and view your itinerary on the dashboard.",
}

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
  return (
    <div className="flex-1 p-4">
      {children}
    </div>
  );
}