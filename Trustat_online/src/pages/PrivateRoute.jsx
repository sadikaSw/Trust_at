import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context/user_context";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useGlobalContext();

  if (!user) {
    return <Navigate to="/register" />;
  }
  return children;
};
export default PrivateRoute;
