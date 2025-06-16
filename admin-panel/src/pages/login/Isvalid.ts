
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export function Validation({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("auth") === "true";

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; 
  }

  return children;
}

