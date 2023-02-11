import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import NotFoundPage from "../pages/NotFoundPage"
import RegisterPage from "../pages/RegisterPage"

function AppRoutes(){

    return (
        <Routes>
            <Route path="/" element={ <LoginPage /> }/>
            <Route path="/register" element={ <RegisterPage /> }/>
            <Route path="/homepage" element={ <HomePage /> }/>
            <Route path="*" element={ <NotFoundPage /> }/>
        </Routes>
    )
}

export default AppRoutes