import StyledForm from "./style";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api.js";

const schema = yup
  .object({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email("O e-mail deve ser válido").required("Email obrigatório"),
    password: yup
      .string()
      .matches("/[a-z]/", "Deve conter ao menos 1 letra minúscula")
      .matches("/[A-Z]/", "Deve conter ao menos 1 letra maiúscula")
      .matches("/[/d]/", "Deve conter ao menos 1 número")
      .matches("/[/W|_]/", "Deve conter ao menos 1 caracter especial")
      .matches("/.{8,}/", "Deve conter no mínimo oito caracteres")
      .required('Senha obrigatória'),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Confirmações de senha deve ser igual a senha"),
    aboutYou: yup.string().required("Descrição obrigatória")
    .required("Confirmação de senha obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    module: yup.string().required("Uma das opções devem ser selecionadas"),
  })
  .required();

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function submitFunction(data) {
    async function register() {
      try {
        // const request = await api.post("/users", data);
        console.log(errors)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    register()
  }

  return (
    <StyledForm onSubmit={handleSubmit(submitFunction)}>
      <label htmlFor="">Nome</label>
      <input
        id="name"
        type="text"
        placeholder="Digite aqui seu nome"
        {...register("name")}
      />
      <p className="errorMessage">{errors.name?.message}</p>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        placeholder="Digite aqui seu email"
        {...register("email")}
      />
      <p className="errorMessage">{errors.email?.message}</p>

      <label htmlFor="password">Senha</label>
      <input
        id="password"
        type="text"
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
      <p className="errorMessage">{errors.password?.message}</p>

      <label htmlFor="confirmPassword">Confirmar Senha</label>
      <input
        id="confirmPassword"
        type="text"
        placeholder="Confirme aqui sua senha"
        {...register("confirmPassword")}
      />
      <p className="errorMessage">{errors.confirmPassword?.message}</p>

      <label htmlFor="aboutYou">Bio</label>
      <input
        id="aboutYou"
        type="text"
        placeholder="Fale sobre você"
        {...register("aboutYou")}
      />
      <p className="errorMessage">{errors.aboutYou?.message}</p>

      <label htmlFor="contact">Contato</label>
      <input
        id="contact"
        type="text"
        placeholder="Opção de contato"
        {...register("contact")}
      />
      <p className="errorMessage">{errors.contact?.message}</p>

      <label htmlFor="module">Selecionar módulo</label>
      <select id="module" {...register("module")}>
        <option value="">Selecionar Módulo</option>
        <option value="Primeiro módulo">Primeiro módulo</option>
        <option value="Segundo módulo">Segundo módulo</option>
        <option value="Terceiro módulo">Terceiro módulo</option>
        <option value="Quarto módulo">Quarto módulo</option>
        <option value="Quinto módulo">Quinto módulo</option>
        <option value="Sexto módulo">Sexto módulo</option>
      </select>
      <p className="errorMessage">{errors.module?.message}</p>

      <button type="submit" className="default pink">
        Cadastrar
      </button>
    </StyledForm>
  );
}

export default RegisterForm;
