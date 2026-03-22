interface Props {
  selectedLocation: string;
  setLocation: (val: string) => void;
  selectedPrice: string;
  setPrice: (val: string) => void;
}

export default function FilterSidebar({
  selectedLocation,
  setLocation,
  selectedPrice,
  setPrice,
}: Props) {
  return (
    <div className="space-y-6">
      
      {/* Location Filter */}
      <div>
        <h4 className="font-semibold mb-2">Location</h4>
        <select
          value={selectedLocation}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 rounded-xl border"
        >
          <option value="">All</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
        </select>
      </div>

      {/* Price Filter */}
      <div>
        <h4 className="font-semibold mb-2">Price</h4>
        <select
          value={selectedPrice}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 rounded-xl border"
        >
          <option value="">All</option>
          <option value="low">Below $500</option>
          <option value="mid">$500 - $1000</option>
          <option value="high">Above $1000</option>
        </select>
      </div>
    </div>
  );
}