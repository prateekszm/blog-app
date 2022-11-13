import axios from "axios";
import { getToken } from "../Auth/AuthLocalStorage";

export const BASE_URL = "http://localhost:8081/blogbook";

export const myAxios = axios.create({
    baseURL: BASE_URL
})

export const tokenAxios = axios.create({
    baseURL: BASE_URL
});

tokenAxios.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) {
            config.headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }

        }
        return config;
    },
    (error) => Promise.reject(error)
);