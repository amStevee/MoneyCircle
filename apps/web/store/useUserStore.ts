import api from "@/lib/apiAxios"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface User {
  id?: string
  email: string
  phone?: string | null
  password_hash?: string
  first_name: string
  last_name: string
  avatar_url?: string | null
  email_verified_at?: Date | string | null
  status?: Status
  created_at?: Date | string
  updated_at?: Date | string
}

enum Status {
  PENDING,
  VERIFIED,
  UNSUBSCRIBED,
}

interface UserState {
  user: User | null
  token: string | null

  isLoading: boolean
  isHydrated: boolean
  error: string | null

  fetchUser: (userId: string) => Promise<void>
  setSession: (user: User, token: string) => void
  clearUser: () => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      token: null,

      isLoading: false,
      isHydrated: false,
      error: null,

      fetchUser: async (userId: string) => {
        set({
          isLoading: true,
          error: null,
        })

        try {
          const response = await api.get<User>(`/users/${userId}`)

          set({
            user: response.data,
            isLoading: false,
          })
        } catch (err: any) {
          set({
            error: err?.message ?? "Failed to fetch user data.",
            isLoading: false,
          })
        }
      },

      setSession: (user: User, token: string) => {
        if (typeof window !== "undefined") {
          window.localStorage.setItem("moneycircle_token", token)
        }

        set({
          user,
          token,
          error: null,
        })
      },

      clearUser: () => {
        if (typeof window !== "undefined") {
          window.localStorage.removeItem("moneycircle_token")
        }

        set({
          user: null,
          token: null,
          error: null,
        })
      },
    }),

    {
      name: "moneycircle-user",

      partialize: (state) => ({
        user: state.user,
        token: state.token,
      }),

      onRehydrateStorage: () => {
        return (_state, error) => {
          if (error) {
            console.error("Failed to hydrate user store:", error)
          }

          useUserStore.setState({
            isHydrated: true,
          })
        }
      },
    }
  )
)
