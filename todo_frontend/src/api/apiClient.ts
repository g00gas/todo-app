import axios from "axios";

const apiClient = axios.create({
    baseURL: `http://${import.meta.env.VITE_SERVER_URL}:8080/api`
})

export default apiClient