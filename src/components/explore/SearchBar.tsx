interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Search destinations..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3 rounded-xl border dark:bg-gray-900"
    />
  );
}