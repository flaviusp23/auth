import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context";

const PrivateRoute = ({ children }) => {
  const { user } = useGlobalContext();
  // If user exists, render children, otherwise navigate to login page
  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
