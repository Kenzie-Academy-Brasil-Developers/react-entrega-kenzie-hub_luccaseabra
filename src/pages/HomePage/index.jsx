import { useNavigate } from "react-router-dom";
import StyledMain from "./style";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import HomeHeader from "../../components/HomeHeader";
import TecnologieCard from "../../components/TecnologieCard";
import DefaultGreyBtn from "../../components/DefaultGreyBtn";
import { BsPlusLg } from "react-icons/bs";
import RegisterTechModal from "../../components/RegisterTechModal";
import EditTechModal from "../../components/EditTechModal";

export function HomePage() {
    const { user, logout, loading, openRegisterTech, setOpenRegisterTech, openEditTech,} = useContext(UserContext);
    

    return (
        <>
            <HomeHeader>
                <DefaultGreyBtn btnFunction={logout}>Sair</DefaultGreyBtn>
            </HomeHeader>

            <StyledMain>
                {loading ? (
                    <h1 className="loading">Carregando</h1>
                ) : (
                    <>
                    <div className="mainHeader">
                        <div className="infoContainer">
                            <h1>Olá, {user.name}</h1>
                            <small>{user.course_module}</small>
                        </div>
                    </div>

                    <section className="tecnologiesContainer">
                        <div className="tecnologiesHeader">
                            <h1>Tecnologias</h1>
                            <DefaultGreyBtn btnFunction={() => setOpenRegisterTech(true)}><BsPlusLg/></DefaultGreyBtn>
                        </div>
                        
                        <ul className="tecnologiesList">
                            <>
                            { user.techs?.length > 0 ? (
                                <>                        
                                    {user.techs.map(tech => <TecnologieCard key={tech.id} tech={tech}/>)}
                                </>
                                ) : (
                                <h2>Você ainda não cadastrou nenhuma tecnologia</h2>
                            )}
                            </>
                        </ul>                      
                    </section>
                    </>
                
            
                )}

            </StyledMain>
            {openRegisterTech ? <RegisterTechModal /> : null  }
            {openEditTech ? <EditTechModal /> : null  }
            
        </>
    )
}

export default HomePage;