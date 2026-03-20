
export default function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      {/* Icon */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        className="text-blue-600"
      >
        <path
          d="M2 16L22 12L2 8V11L17 12L2 13V16Z"
          fill="currentColor"
        />
      </svg>

      {/* Text */}
      <h1 className="text-2xl font-bold tracking-tight">
        <span className="text-gray-900 dark:text-white">Trav</span>
        <span className="text-blue-600">ro</span>
      </h1>
    </div>
  );
}