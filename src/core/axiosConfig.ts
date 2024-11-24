import axios, { AxiosInstance, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: "http://localhost:5000",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config: any) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            };
        }
        console.log("Request Intercepted:", config);
        return config;
    },
    (error) => {
        console.error("Request Error:", error);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        console.log("Response Intercepted:", response);
        return response;
    },
    (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                const navigate = useNavigate();

                navigate('/login')
            }
        }
        console.error("Response Error:", error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
