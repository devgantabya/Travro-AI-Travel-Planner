import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-6
           px-6 py-6 rounded-xl
           bg-gray-50 dark:bg-gray-900
           border border-gray-200 dark:border-gray-800
           transition-all duration-300 hover:shadow-md"
        >
          {/* Text */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">
              Ready to explore smarter with{" "}
              <span className="text-orange-500">Travro</span>?
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              AI-powered travel planning in seconds.
            </p>
          </div>

          {/* Action */}
          <Link
            href="/explore"
            className="group inline-flex items-center justify-center
             bg-orange-500 text-white
             px-6 py-2.5 rounded-lg font-medium
             hover:bg-orange-600 active:scale-95
             transition-all duration-150"
          >
            Get Started
            <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>
      </div>
    </section>
  );
}