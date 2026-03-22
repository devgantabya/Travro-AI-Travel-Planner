import { features } from "@/data/features";

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Why Choose Travro?
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              <div className="mb-4 w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full transition-transform transform group-hover:scale-110">
                <Icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}