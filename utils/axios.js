import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://atlas-backend-ad2z.onrender.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔹 Optional: request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // future me token add karna ho to yahin
    return config;
  },
  (error) => Promise.reject(error)
);

// 🔹 Optional: response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // backend ka clean error message forward karo
    const message =
      error.response?.data?.message || "Something went wrong";
    return Promise.reject(message);
  }
);

export default axiosInstance;
