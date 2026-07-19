import axios from "axios";
import { getSession } from "next-auth/react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.cashora.id";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to automatically inject JWT Bearer Token on client-side requests
apiClient.interceptors.request.use(
  async (config) => {
    // Only execute on browser client environment
    if (typeof window !== "undefined") {
      const session = await getSession();
      // NextAuth v5 session token retrieval
      const token = (session as any)?.accessToken || (session as any)?.user?.token;
      
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for centralized error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Session expired (401 Unauthorized). Redirecting to login...");
    }
    return Promise.reject(error);
  }
);
