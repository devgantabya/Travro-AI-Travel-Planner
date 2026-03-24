import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 cursor-pointer">
      <span className="text-3xl font-bold tracking-tight">
        <span className="text-gray-900 dark:text-white">Trav</span>
        <span className="text-orange-500 italic">ro</span>
      </span>
    </Link>
  );
}