import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { TechnologiesContext } from "../../providers/TechnologiesContext";
import StyledModal from "./style";

import * as yup  from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../providers/UserContext";

const registerTechSchema = yup.object({
    title: yup.string().required("Nome obrigatório"),
    status: yup.string().required("Status obrigatório"),
})

function RegisterTechModal() {
    const { createTech } = useContext(TechnologiesContext);
    const { setOpenRegisterTech } = useContext(UserContext);

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(registerTechSchema)
    });

    function submitFunction(data){
        createTech(data);
    }

    return (
        <StyledModal>
            <div className="modalContainer">
                <div className="formHeader">
                    <h2>Cadastrar Tecnologia</h2>
                    <button onClick={() => setOpenRegisterTech(false)}><AiOutlineClose /></button>
                </div>
                <form onSubmit={handleSubmit(submitFunction)}>
                    <label htmlFor="title">Nome</label>
                    <input type="text" id="title" placeholder="Ex: Javascript" {...register("title")}/>
                    <p className="errorMessage">{errors.title?.message}</p>

                    <label htmlFor="status">Selecionar status</label>
                    <select name="status" id="status" {...register("status")}>
                        <option value="">selecionar</option>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <p className="errorMessage">{errors.status?.message}</p>

                    <button type="submit" className="default pink">Cadastrar Tecnologia</button>

                </form>
            </div>
        </StyledModal>
    )
}

export default RegisterTechModal;