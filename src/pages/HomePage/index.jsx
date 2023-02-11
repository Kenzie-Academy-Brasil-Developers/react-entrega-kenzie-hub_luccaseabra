import Header from "../../components/Header";
import LogoutBtn from "../../components/LogoutBtn";
import StyledMain from "./style";

function HomePage() {


    // temporário

    const name = "Rafael Leão"
    const module = "Primeiro módulo (introdução ao Frontend)"
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