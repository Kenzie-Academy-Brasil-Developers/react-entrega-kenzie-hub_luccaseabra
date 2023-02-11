import { useNavigate } from "react-router-dom";

function ReturnBtn() {

    const navigate = useNavigate()
    function returnPage() {
        navigate(-1)
    }

    return (
        <button onClick={returnPage} className="default grey">Voltar</button>
    )
}

export default ReturnBtn;