import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PublicRoutes() {
    const token = localStorage.getItem("@KenzieHub-token:");


    return (
        <>
            { token? <Navigate to="/homepage" /> : <Outlet />  }
        </>
    )
}

export default PublicRoutes;