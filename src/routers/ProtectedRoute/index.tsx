import React from "react";
import { useAppSelector } from "../../core/redux/hooks";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute: React.FC<any> = ({ children }) => {
  const { user } = useAppSelector((state) => state.user);
  const location = useLocation();

  if (!user) {
    const url = `/auth/login?redirectTo=${location.pathname}`;
    return <Navigate to={url || "/"} replace />;
  }

  return children || <Outlet />;
};

export default ProtectedRoute;
