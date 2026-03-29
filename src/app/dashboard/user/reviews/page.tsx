"use client";

const reviews = [
  { id: 1, text: "Great product!", rating: 5 },
  { id: 2, text: "Good service", rating: 4 },
];

export default function ReviewsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">My Reviews</h1>

      <div className="grid gap-4">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-white p-5 rounded-2xl shadow-sm"
          >
            <p className="text-gray-700">{r.text}</p>
            <p className="text-orange-500 text-sm mt-2">
              ⭐ {r.rating}/5
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}