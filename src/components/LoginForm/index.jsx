import { useState } from "react";
import { useForm } from "react-hook-form";
import StyledForm from "./style";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup  from "yup";
import { toast } from "react-toastify";
import api from "../../services/api.js";
import { useNavigate } from "react-router-dom";


const schema = yup.object({
    email: yup.string().required("E-mail obrigatório"),
    password: yup.string().required("Senha obrigatória")
})

function LoginForm(){
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState("false");

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    function submitFuntion(data) {

        async function login(){
            try {
                const request = await api.post("/sessions", data);

                localStorage.setItem("@KenzieHub-token:", request.data.token);

                navigate("/homepage");

            } catch (error) {
                toast.error("Email ou senha incorretos");
            }
        }

        login();
    }

    return (
        <StyledForm onSubmit={handleSubmit(submitFuntion)}>
            <label htmlFor="email">E-mail:</label>
            <input id="email" type="text" placeholder="seuendereco@email.com" {...register("email")}/>
            <p className="errorMessage">{errors.email?.message}</p>

            <label htmlFor="password">Senha:</label>
            <div className="passwordInputContainer">
                <input id="password" type={showPassword ? "text" : "password"} placeholder="Digite sua senha aqui" {...register("password")}/>
                {showPassword ? <AiFillEyeInvisible onClick={() => setShowPassword(false)}/> : <AiFillEye onClick={() => setShowPassword(true)}/>}
            </div>
            <p className="errorMessage">{errors.password?.message}</p>

            <button type="submit" className="default pink">Entrar</button>

        </StyledForm>
    )
}

export default LoginForm;