import { useNavigate } from "react-router-dom";

function LogoutBtn() {

    const navigate = useNavigate()
    function logout() {
        navigate("/")
    }

    return (
        <button onClick={logout} className="default grey">Sair</button>
    )
}

export default LogoutBtn;