import { features } from "@/data/features";

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      
      {/* Heading */}
      <div className="mb-5">
        <h2 className="text-3xl font-bold mb-8">
          Why Choose <span className="text-orange-500">Travro</span>?
        </h2>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur 
                         rounded-2xl p-6 shadow-md hover:shadow-xl 
                         transition-all duration-300 hover:-translate-y-1"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition 
                              bg-gradient-to-r from-orange-400/10 to-orange-600/10" />

              {/* Icon */}
              <div className="relative mb-5 w-12 h-12 flex items-center justify-center 
                              bg-orange-100 dark:bg-orange-900/30 rounded-xl
                              transition-all duration-300 group-hover:scale-110">
                <Icon className="w-6 h-6 text-orange-500" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-orange-500 transition">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-orange-500 rounded-full 
                              transition-all duration-300 group-hover:w-full" />
            </div>
          );
        })}
      </div>
    </section>
  );
}