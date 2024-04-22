import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import Cookies from "js-cookie";

const client: AxiosInstance = axios.create({
    baseURL: "https://seven-apply.liara.run/",
});

client.interceptors.request.use((config: any) => {
    const token = Cookies.get("token");

    if (token) {
        config.headers.Authorization = `JWT ${token}`;        
    }

    return config;
    
}, (error: AxiosError) => {
    return Promise.reject(error);
});

export default client;
