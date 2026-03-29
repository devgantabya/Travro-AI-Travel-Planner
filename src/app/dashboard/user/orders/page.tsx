"use client";

const orders = [
  { id: "#1234", amount: "$120", status: "Completed" },
  { id: "#1235", amount: "$80", status: "Pending" },
];

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">My Orders</h1>

      <div className="bg-white rounded-2xl shadow-sm p-5 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-400">
            <tr>
              <th className="text-left py-3">Order ID</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="hover:bg-orange-50 transition">
                <td className="py-3">{o.id}</td>
                <td>{o.amount}</td>
                <td>
                  <span className="px-3 py-1 rounded-full text-xs bg-orange-100 text-orange-600">
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}