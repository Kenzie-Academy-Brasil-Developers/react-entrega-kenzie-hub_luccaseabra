import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { TechnologiesContext } from "../../providers/TechnologiesContext";
import StyledModal from "./style";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../providers/UserContext";

const registerTechSchema = yup.object({
    work: yup.string().required("Nome obrigatório"),
    status: yup.string().required("Status obrigatório")
})

function EditTechModal() {
    const { currentTech, removeTech, editTech } = useContext(TechnologiesContext);
    const { setOpenEditTech } = useContext(UserContext);

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(registerTechSchema)
    });

    function submitFunction(data){
        editTech(data, currentTech.id);
    }

    return (
        <StyledModal>
            <div className="modalContainer">
                <div className="formHeader">
                    <h2>Tecnologia: {currentTech.title}</h2>
                    <button onClick={() => setOpenEditTech(false)}><AiOutlineClose /></button>
                </div>
                <form onSubmit={handleSubmit(submitFunction)}>
                    <label htmlFor="work">Nome do projeto</label>
                    <input defaultValue="Material UI" type="text" id="work" placeholder="Material UI"{...register("work")}/>
                    <p className="errorMessage">{errors.title?.message}</p>

                    <label htmlFor="status">Selecionar status</label>
                    <select defaultValue={currentTech.status} name="status" id="status" {...register("status")}>
                        <option value="">selecionar</option>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <p className="errorMessage">{errors.status?.message}</p>

                    <div className="buttonsContainer">
                        <button type="submit"  className="default pink">Salvar alterações</button>
                        <button type="button" className="default grey" onClick={() => removeTech(currentTech.id)}>Excluir</button>
                    </div>
                </form>
            </div>
        </StyledModal>
    )
}

export default EditTechModal;