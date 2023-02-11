import StyledMain from "./style";
import logo from "../../assets/logo.svg"
import LoginForm from "../../components/LoginForm";
import { Link } from "react-router-dom";

function LoginPage() {

    return (
        <StyledMain>
            <img src={logo} alt="Logo da Kenzie Hub"/>

            <div className="formContainer">
                <h1>Login</h1>
                <LoginForm />

                <small>Ainda não possui uma conta?</small>
                <Link to={"/register"} className="default grey">Cadastre-se</Link>
            </div>
        </StyledMain>
    )
}

export default LoginPage;