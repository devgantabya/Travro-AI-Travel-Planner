"use client";

import { useState, useEffect } from 'react';
import { AuthContext, AuthContextType } from "./AuthContext";
import {
    GoogleAuthProvider,
    signInWithPopup,
    UserCredential,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    User,
    signOut,
    signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from './../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();

interface AuthProviderProps {
    children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<User | null>(null);

    const registerUser = async (email: string, password: string): Promise<UserCredential> => {
        try {
            setLoading(true);
            return await createUserWithEmailAndPassword(auth, email, password);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const signInUser = async (email: string, password: string): Promise<UserCredential> => {
        try {
            setLoading(true);
            return await signInWithEmailAndPassword(auth, email, password);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const signInWithGoogle = async (): Promise<UserCredential | void> => {
        try {
            setLoading(true);
            return await signInWithPopup(auth, googleProvider);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error("An unknown error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    const logout = async (): Promise<void> => {
        try {
            setLoading(true);
            await signOut(auth);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo: AuthContextType = {
        signInWithGoogle,
        registerUser,
        signInUser,
        logout,
        user,
        loading
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}