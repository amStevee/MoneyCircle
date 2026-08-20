import api from "@/lib/apiAxios"
import { create } from "zustand"

export interface User {
  id?: string
  email: string
  phone?: string
  password_hash?: string
  first_name: string
  last_name: string
  avatar_url?: string
  email_verified_at?: Date
  status?: Status
  created_at?: Date
  updated_at?: Date
}

enum Status {
  PENDING,
  VERIFIED,
  UNSUBSCRIBED,
}


interface UserState {
  user: User | null
  isLoading: boolean
  error: string | null
  fetchUser: (userId: string) => Promise<void>
  clearUser: () => void
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  fetchUser: async (userId: string) => {
    set({ isLoading: true, error: null })
    try {
      const response = await api.get<User>(`/users/${userId}`)
      set({ user: response.data, isLoading: false })
    } catch (err: any) {
      set({
        error: err.message || "Failed to fetch user data.",
        isLoading: false,
      })
    }
  },
  clearUser: () => set({ user: null, error: null }),
}))
