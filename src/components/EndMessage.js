import { useNavigate } from 'react-router-dom';

function EndMessage() {

    const navigate = useNavigate()

    function handleAgain() {
        navigate("/")
    }

    return(
        <div>
            <h1>hvala na sudjelovanju</h1>
            <button className="ponovi" onClick={handleAgain}>Ponovno pokreni test</button>
        </div>
    )
}

export default EndMessage;