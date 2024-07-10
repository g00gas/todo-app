import axios from "axios";

const apiClient = axios.create({
    baseURL: `http://${import.meta.env.SERVER_URL}:8080/api`
})

export default apiClient