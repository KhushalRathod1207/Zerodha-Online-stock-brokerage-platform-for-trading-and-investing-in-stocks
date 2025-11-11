import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { isAuth, loading } = useContext(AuthContext);

    if (loading) return <div>Loading...</div>; // or spinner

    if (!isAuth) return <Navigate to="/signup" replace />;

    return children;
};

export default ProtectedRoute;
