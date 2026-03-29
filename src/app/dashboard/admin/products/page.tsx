"use client";

const products = [
  { name: "Product A", price: "$50" },
  { name: "Product B", price: "$80" },
];

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Manage Products
      </h1>

      <div className="grid md:grid-cols-2 gap-5">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl shadow-sm"
          >
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-orange-500">{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}