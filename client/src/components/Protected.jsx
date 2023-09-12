import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const Protected = ({ token }) => {
  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default Protected;
