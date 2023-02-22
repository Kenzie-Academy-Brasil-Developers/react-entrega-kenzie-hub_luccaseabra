import React from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";

function ProtectedRoutes() {
    const token = localStorage.getItem("@KenzieHub-token:");


    return (
        <>
            { token? <Outlet /> : <Navigate to="/" /> }
        </>

    )
}

export default ProtectedRoutes;