import axios from "axios";

const BACKEND_URL = process.env.NEXT_PUBLIC_ENDPOINT_1 + 'api/'

export default axios.create({
    baseURL: BACKEND_URL,
    headers: { "Content-Type": "application/json" }
})

export const axiosAuth = axios.create({
    baseURL: BACKEND_URL,
    headers: { "Content-Type": "application/json" }
})


