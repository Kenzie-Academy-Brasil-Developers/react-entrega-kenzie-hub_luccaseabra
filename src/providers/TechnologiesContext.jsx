import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { UserContext } from "./UserContext";

export const TechnologiesContext = createContext();

export const TechnologiesProvider = ({children}) => {

    const { user, setUser, getToken, setOpenRegisterTech, setOpenEditTech} = useContext(UserContext);
 
    const [currentTech, setCurrentTech] = useState({title: "título", status: "status"});
    const [techsLoading] = useState(false);


    async function createTech(data){
        try {
            const response = await api.post("/users/techs", data, {
                headers: {
                    Authorization: `bearer ${getToken()}`
                }
            });

            setUser({...user, data});
            
            setOpenRegisterTech(false);
            toast.success("Tecnologia criada");
            
        } catch (error) {
            console.log(error);
            toast.error(error);
        }
    }

    function openEditModal(event) {

        const techId = event.target.id;
        const selectedTech = user.techs.find(tech => tech.id === techId);

        setCurrentTech(selectedTech);

        setOpenEditTech(true);
    }


    async function editTech(data, techId) {
        
        try {
            await api.put(`users/techs/${techId}`, data, {
                headers: {
                    Authorization: `bearer ${getToken()}`
                }
            });

            setOpenEditTech(false);
            toast.success("Tecnologia atualizada")            
            
        } catch (error) {
            console.log(error);
            toast.error(error)
        }
    }



    async function removeTech(techId) {
        
        try {
            await api.delete(`/users/techs/${techId}`, {
                headers: {
                    Authorization: `bearer ${getToken()}`
                }
            });

            setOpenEditTech(false);

            toast.success("Tecnologia deletada");
            
        } catch (error) {
            console.log(error);
            toast.error(error)
            
        }
    }
    

 
    return (
        <TechnologiesContext.Provider value={ { createTech, techsLoading, openEditModal, currentTech, removeTech, editTech} }>
            {children}
        </TechnologiesContext.Provider>
    )

}