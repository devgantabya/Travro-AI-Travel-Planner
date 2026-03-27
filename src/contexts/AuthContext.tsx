"use client";

import { createContext } from "react";
import { UserCredential } from "firebase/auth";

// Define the context type
export interface AuthContextType {
  signInWithGoogle: () => Promise<UserCredential | void>;
  loading: boolean;
}

// Properly type the context
export const AuthContext = createContext<AuthContextType | null>(null);