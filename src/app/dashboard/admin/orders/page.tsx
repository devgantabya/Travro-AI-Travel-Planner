"use client";

const orders = [
  { id: "#111", user: "John", amount: "$120" },
  { id: "#112", user: "Jane", amount: "$90" },
];

export default function AdminOrdersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Manage Orders
      </h1>

      <div className="bg-white p-5 rounded-2xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-400">
            <tr>
              <th className="text-left py-3">Order</th>
              <th>User</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="hover:bg-orange-50">
                <td className="py-3">{o.id}</td>
                <td>{o.user}</td>
                <td className="text-orange-500">{o.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}