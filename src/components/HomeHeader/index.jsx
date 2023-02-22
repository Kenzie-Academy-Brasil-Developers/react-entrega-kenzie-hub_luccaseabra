import StyledHeader from "./style";
import logo from "../../assets/logo.svg"

function HomeHeader({ children }) {

    return (
        <StyledHeader>
            <div className="container">
                <img src={logo} alt="Logo da Kenzie Hub" />
                {children}
            </div>
        </StyledHeader>
    )
}

export default HomeHeader;