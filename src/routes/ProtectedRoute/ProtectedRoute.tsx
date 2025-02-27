import React from "react"
import { Navigate, Outlet } from "react-router"
import useAuthStore from "@/stores/auth.store"

const ProtectedRoute: React.FC = () => {
  const { accessToken } = useAuthStore()

  return accessToken ? <Outlet /> : <Navigate to='/login' replace />
}

export default ProtectedRoute
