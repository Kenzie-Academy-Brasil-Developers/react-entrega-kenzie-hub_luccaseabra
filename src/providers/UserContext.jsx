import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import { TechnologiesContext } from "./TechnologiesContext";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [showPassword, setShowPassword] = useState("false");
    const [user, setUser] = useState("");
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openRegisterTech, setOpenRegisterTech] = useState(false);
    const [openEditTech, setOpenEditTech] = useState(false);


    const navigate = useNavigate();


    async function login(data){
        setLoading(true);
        try {
            const request = await api.post("/sessions", data);
            console.log(request.data.user);

            setUser(request.data.user);

            localStorage.setItem("@KenzieHub-token:", request.data.token);
            localStorage.setItem("@USERID", request.data.token);

            navigate("/homepage");

        } catch (error) {
            toast.error("Email ou senha incorretos");
        } finally {
            setLoading(false)
        }
    }

    async function registerUser(data) {
      
        try {
          const request = await api.post("users", data);
  
          toast.success("Cadastro realizado");
  
          navigate("/")
  
        } catch (error) {
          console.log(error);
          toast.error(`${error}`);
        }
    }


    function logout() {
        setUser(null)
        localStorage.clear();
        navigate("/");

    }

    useEffect(() => {
        async function getLogedUser(token){
            try {
                const response = await api.get("profile", {
                    headers: {
                        Authorization: `bearer ${token}`
                    }
                });
                
                localStorage.setItem("@USERID", response.data.id);
                console.log(response)
    
                setUser(response.data);
                
            } catch (error) {
                console.log(error);
                localStorage.clear();
                navigate("/");
            }
        }
        getLogedUser(getToken());

    } , [openRegisterTech, openEditTech])

    function getToken(){
        return localStorage.getItem("@KenzieHub-token:");
    }


    return (
        <UserContext.Provider value={{login, showPassword, setShowPassword, registerUser, logout, user, setUser, techs, setTechs, loading, setLoading, getToken, openRegisterTech, setOpenRegisterTech, openEditTech, setOpenEditTech}}>
            { children }
        </UserContext.Provider>
    )
}
