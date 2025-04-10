import {useState} from 'react'

function Authenicate ({token}) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    
    async function handleClick(){
    try{
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",
            {
                method: "GET",
                headers: 
                    {"Content-type": "application/json",
                    Authorization: `Bearer ${token}`,
            }})
        const result = await response.json();
        setSuccessMessage(result.message);
    }
    catch (error){
        setError(error.message);
    }}

    return(
        <div>
            <h2 className="auth">Authenicate Here</h2>
                {successMessage && 
                <p>{successMessage}</p>}
                {error && <p>{error}</p>}
            <button className="button" onClick={handleClick}>Authenicate Token!</button>
        </div>
    )
}

export default Authenicate