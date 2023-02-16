import { useNavigate } from "react-router-dom";

function LogoutBtn() {

    const navigate = useNavigate()
    function logout() {
        navigate("/");
        localStorage.removeItem("@USERID");
        localStorage.removeItem("@KenzieHub-token:");

    }

    return (
        <button onClick={logout} className="default grey">Sair</button>
    )
}

export default LogoutBtn;