import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useGlobalContext } from "../context";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useGlobalContext();
  return (
    <Route
      {...rest}
      render={() => {
        return user ? children : <Navigate to="/" />;
      }}
    ></Route>
  );
};

export default PrivateRoute;
