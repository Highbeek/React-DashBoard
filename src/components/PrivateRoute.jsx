import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ authenticated, ...props }) => {
  return authenticated ? (
    <Route {...props} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
