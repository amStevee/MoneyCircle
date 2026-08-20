import axios from "axios"

const api = axios.create({
  baseURL: "https://money-circle-api.vercel.app",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
})

export default api
