"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import useAuth from "@/hooks/useAuth";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { signInUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirectTo = searchParams.get("redirectTo") || "/dashboard";

  const handleLogin = async () => {
    try {
      await signInUser(email, password);
      alert("Login successful! Redirecting...");
      router.push(redirectTo);
    } catch (error: any) {
      console.error(error);
      alert("Login failed: " + error.message);
    }
  };

  const demoLogin = async () => {
    try {
      await signInUser("user@example.com", "123456");
      router.push("/dashboard");
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl">

        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Welcome Back
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white
                     focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white
                     focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 hover:bg-orange-600 active:scale-95 text-white py-3 rounded-xl font-medium transition"
        >
          Login
        </button>

        <button
          onClick={demoLogin}
          className="w-full mt-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-3 rounded-xl font-medium transition"
        >
          Demo Login
        </button>

        <div className="flex items-center my-4">
          <span className="flex-grow h-px bg-gray-300 dark:bg-gray-600" />
          <span className="px-3 text-gray-400">or</span>
          <span className="flex-grow h-px bg-gray-300 dark:bg-gray-600" />
        </div>

        <button className="w-full flex items-center justify-center gap-2 mt-2 bg-red-500 hover:bg-red-600 active:scale-95 text-white py-3 rounded-xl font-medium transition">
          <Image
            src="/icons/google-icon.png"
            alt="Google"
            width={20}
            height={20}
          />
          Continue with Google
        </button>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
          Do not have an account?{" "}
          <Link href="/signup" className="text-orange-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}