import { Navigate } from "react-router-dom";
export default function ProtectedRoute({ children }) {
  const role = sessionStorage.getItem("role") || localStorage.getItem("role");
  if (!role) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
