import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { jwtDecode } from "jwt-decode"

interface User {
  id: number
  username: string
}

interface AuthState {
  accessToken: string | null
  user: User | null
  setAccessToken: (token: string | null) => void
  clearAuth: () => void
}

const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI",
    user: null,
    setAccessToken: (token: string | null) => {
      if (token) {
        const decodedUser = jwtDecode<User>(token)
        set({ accessToken: token, user: decodedUser })
      } else {
        set({ accessToken: null, user: null })
      }
    },
    clearAuth: () => set({ accessToken: null, user: null })
  }))
)

export default useAuthStore
