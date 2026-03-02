import { Navigate } from "react-router-dom"

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = true // مؤقتاً

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}
