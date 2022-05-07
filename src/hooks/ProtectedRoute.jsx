import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserAuth } from "../context/context";

const ProtectedRoute = () => {
  const { user } = useUserAuth();

  return (
    <>
      {user ? <Outlet /> : <Navigate to="/" />};     
    </>
  )
};

export default ProtectedRoute;