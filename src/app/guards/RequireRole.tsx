import { Navigate } from "react-router-dom"

type Props = {
  role: "retailer" | "customer" | "admin"
  children: React.ReactNode
}

export const RequireRole = ({ role, children }: Props) => {
  const userRole = "retailer" // مؤقتاً

  if (userRole !== role) {
    return <Navigate to="/login" replace />
  }

  return children
}
