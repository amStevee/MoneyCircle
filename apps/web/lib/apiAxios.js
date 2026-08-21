import axios from "axios"

const api = axios.create({
  baseURL: "https://money-circle-api.vercel.app/api/v1",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
})

/**
 * Attach the authentication token to every API request.
 *
 * The token is stored in localStorage by useUserStore.
 *
 * We check for `window` because this file can be imported
 * during Next.js server-side/build processing.
 */
api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = window.localStorage.getItem("moneycircle_token")

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * Handle authentication failures globally.
 */
api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem("moneycircle_token")

        /**
         * Do not directly redirect during server rendering.
         */
        if (window.location.pathname !== "/login") {
          window.location.href = "/login"
        }
      }
    }

    return Promise.reject(error)
  }
)

export default api
