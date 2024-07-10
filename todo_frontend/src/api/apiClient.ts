import axios from "axios";

const apiClient = axios.create({
    baseURL: `http://${import.meta.env.BASE_URL}:3000/api`
})

export default apiClient