import { useState } from "react";
import { set, useForm } from "react-hook-form";
import StyledForm from "./style";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"


function LoginForm(){
    const [showPassword, setShowPassword] = useState("false")

    const { register, handleSubmit} = useForm()

    function submitFuntion(data) {
        console.log(data)
    }

    return (
        <StyledForm onSubmit={handleSubmit(submitFuntion)}>
            <label htmlFor="email">E-mail:</label>
            <input id="email" type="text" placeholder="seuendereco@email.com" {...register("email")}/>

            <label htmlFor="password">Senha:</label>
            <div className="passwordInputContainer">
                <input id="password" type={showPassword ? "text" : "password"} placeholder="Digite sua senha aqui" {...register("password")}/>
                {showPassword ? <AiFillEyeInvisible onClick={() => setShowPassword(false)}/> : <AiFillEye onClick={() => setShowPassword(true)}/>}
            </div>

            <button type="submit" className="default pink">Entrar</button>

        </StyledForm>
    )
}

export default LoginForm;