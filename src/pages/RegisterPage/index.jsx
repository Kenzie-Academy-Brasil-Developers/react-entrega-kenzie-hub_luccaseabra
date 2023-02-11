import Header from "../../components/Header"
import RegisterForm from "../../components/RegisterForm"
import ReturnBtn from "../../components/ReturnBtn"
import StyledMain from "./style"

function RegisterPage() {

    return (
        <>
            <Header>
                <ReturnBtn />
            </Header>

            <StyledMain>
                <div className="formContainer">
                    <h1>Crie sua conta</h1>
                    <small>Rápido e grátis, vamos nessa</small>

                    <RegisterForm />
                </div>
            </StyledMain>



        </>
    )
}

export default RegisterPage