import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">

        <div className="rounded-3xl p-10 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Explore the World?
          </h2>

          <p className="mb-6 text-white/90">
            Let Travro AI help you discover your next dream destination.
          </p>

          <Link
            href="/explore"
            className="inline-block bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
          >
            Start Exploring
          </Link>
        </div>
      </div>
    </section>
  );
}