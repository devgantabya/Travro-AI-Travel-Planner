"use client";

import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useRouter } from "next/navigation";

const axiosSecure = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const useAxiosSecure = () => {
    const { user, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        const reqInterceptor = axiosSecure.interceptors.request.use(
            async (config: InternalAxiosRequestConfig) => {
                if (user) {
                    const token = await user.getIdToken();
                    if (token) {
                        config.headers = config.headers || {};
                        config.headers.Authorization = `Bearer ${token}`;
                    }
                }
                return config;
            },
            (error: AxiosError) => Promise.reject(error),
        );

        const resInterceptor = axiosSecure.interceptors.response.use(
            (response) => response,
            async (error: AxiosError) => {
                const statusCode = error.response?.status;

                if (statusCode === 401 || statusCode === 403) {
                    try {
                        await logout();
                        router.push("/login");
                    } catch (logoutError) {
                        console.error("Error signing out:", logoutError);
                    }
                }

                return Promise.reject(error);
            }
        );

        return () => {
            axiosSecure.interceptors.request.eject(reqInterceptor);
            axiosSecure.interceptors.response.eject(resInterceptor);
        };
    }, [user, logout, router]);

    return axiosSecure;
};

export default useAxiosSecure;