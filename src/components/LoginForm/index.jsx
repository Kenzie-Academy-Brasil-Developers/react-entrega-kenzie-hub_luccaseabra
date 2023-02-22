import { useContext } from "react";
import { useForm } from "react-hook-form";
import StyledForm from "./style";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup  from "yup";
import { UserContext } from "../../providers/UserContext";


const schema = yup.object({
    email: yup.string().required("E-mail obrigatório"),
    password: yup.string().required("Senha obrigatória"),
})

function LoginForm(){

    const { login, showPassword, setShowPassword } = useContext(UserContext);

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    function submitFuntion(data) {
        login(data);
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