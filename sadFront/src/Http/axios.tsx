import axios, { AxiosError, AxiosInstance } from "axios";

import Cookies from "js-cookie";
import { formatDatesInData } from "../lib/format-time";

export const siteUrl = "https://seven-apply.liara.run/";

const client: AxiosInstance = axios.create({
    baseURL: siteUrl,
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

client.interceptors.request.use((config) => {
    if (config.data) {
        config.data = formatDatesInData(config.data);
      }
      return config;
});

export default client;
