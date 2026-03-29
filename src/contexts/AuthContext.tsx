"use client";

import { createContext } from "react";
import { User, UserCredential } from "firebase/auth";

export interface AuthContextType {
  signInWithGoogle: () => Promise<UserCredential | void>;
  registerUser: (email: string, password: string) => Promise<UserCredential>;
  signInUser: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  user: User | null;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);