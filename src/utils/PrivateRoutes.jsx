import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../firebase"; // import your firebase auth object here

const PrivateRoutes = () => {
  const [authState, setAuthState] = useState({ loading: true, user: null });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("Auth state changed:", user);
      setAuthState({ loading: false, user });
    });
    return unsubscribe;
  }, []);

  if (authState.loading) {
    return <p>Loading...</p>;
  }

  return authState.user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
