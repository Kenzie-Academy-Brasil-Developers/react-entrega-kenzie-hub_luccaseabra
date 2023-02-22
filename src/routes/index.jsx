import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProtectedRoutes from "../pages/ProtectedRoutes";
import PublicRoutes from "../pages/PublicRoutes";
import RegisterPage from "../pages/RegisterPage";
import { TechnologiesProvider } from "../providers/TechnologiesContext";
import { UserProvider } from "../providers/UserContext";

function AppRoutes() {
  return (
    <UserProvider>
      <TechnologiesProvider>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          <Route element={<ProtectedRoutes /> }>
            <Route  path="/homepage" element={<HomePage />} />
          </Route>
        </Routes>
      </TechnologiesProvider>
    </UserProvider>
  );
}

export default AppRoutes;
