import axios from "axios"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://money-circle-web.vercel.app/api/v1/",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
})

export default api
