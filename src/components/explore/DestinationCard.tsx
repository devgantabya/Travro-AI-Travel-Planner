import Link from "next/link";

interface Props {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  image: string;
}

export default function DestinationCard({
  id,
  title,
  location,
  price,
  rating,
  image,
}: Props) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-white dark:bg-gray-900 flex flex-col">
      
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-500">{location}</p>

          <div className="flex items-center justify-between mt-2 text-sm">
            <span className="text-blue-600 font-medium">
              ${price}
            </span>
            <span>⭐ {rating}</span>
          </div>
        </div>

        {/* Button */}
        <Link
          href={`/explore/${id}`}
          className="mt-4 block text-center bg-black text-white py-2 rounded-xl"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}