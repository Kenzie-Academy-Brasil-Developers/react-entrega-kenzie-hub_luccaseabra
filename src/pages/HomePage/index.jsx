import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import LogoutBtn from "../../components/LogoutBtn";
import StyledMain from "./style";
import api from "../../services/api.js"
import { useState } from "react";

function HomePage() {
    const [name, setName] = useState("")
    const [module, setModule] = useState("")

    const navigate = useNavigate();

    const token = localStorage.getItem("@KenzieHub-token:");
    
    if(!token){
        navigate("/");
    }
    
    async function getLogedUser(){
        try {
            const response = await api.get("profile", {
                headers: {
                    Authorization: `bearer ${token}`
                }
            });
            
            localStorage.setItem("@USERID", response.data.id);
            setName(response.data.name);
            setModule(response.data.course_module);
            
        } catch (error) {
            console.log(error);
        }
    }

    getLogedUser();
    

    return (
        <>
            <Header>
                <LogoutBtn/>
            </Header>
            <StyledMain>
                <div className="mainHeader">
                    <div className="infoContainer">
                        <h1>Olá, {name}</h1>
                        <small>{module}</small>
                    </div>
                </div>

                <div className="onBuildMessage">
                    <div className="messageContainer">
                        <h1>Que pena! Estamos em desenvolvimento {":("} </h1>
                        <small>Nossa aplicação está em desenvolvimento, em breve teremos novidades</small>
                    </div>
                </div>

            </StyledMain>
        </>
    )
}

export default HomePage;