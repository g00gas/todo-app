import axios from "axios";

const apiClient = axios.create({
    baseURL: `http://${import.meta.env.BASE_URL}:8080/api`
})

export default apiClient