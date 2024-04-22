import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const client = axios.create({
    baseURL: "https://seven-apply.liara.run/",
});

export default client;