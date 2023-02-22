import { useContext } from "react";
import { TechnologiesContext } from "../../providers/TechnologiesContext";
import StyledCard from "./style";

function TecnologieCard({tech}){

    const { openEditModal } = useContext(TechnologiesContext);

    return (
        <StyledCard id={tech.id} onClick={(event) => openEditModal(event)}>
            <p>{tech.title}</p>
            <small>{tech.status}</small>
        </StyledCard>
    )
}

export default TecnologieCard;