import axios from "axios"

const apiOrigin = new URL(
  process.env.NEXT_PUBLIC_API_URL || "https://money-circle-api.vercel.app"
).origin

const api = axios.create({
  baseURL: apiOrigin,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
})

export default api
