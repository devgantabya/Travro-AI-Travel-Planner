"use client";

import { useState, ReactNode } from 'react';
import { GoogleAuthProvider, signInWithPopup, UserCredential } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from './../firebase/firebase.config';

interface AuthContextType {
    signInWithGoogle: () => Promise<UserCredential | void>;
    loading: boolean;
}

interface AuthProviderProps {
    children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
    const [loading, setLoading] = useState<boolean>(true);

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = async (): Promise<UserCredential | void> => {
        try {
            setLoading(true);
            return await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error("Error signing in with Google:", error);
        } finally {
            setLoading(false);
        }
    }

    const authInfo: AuthContextType = {
        signInWithGoogle,
        loading,
    };

    return <AuthContext value={authInfo}>{children}</AuthContext>;
}