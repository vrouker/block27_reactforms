import {useState} from 'react'

function SignUpForm({setToken}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    
    async function handleSubmit(event){
        event.preventDefault();
        try{
            const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/signup",
                {
                    method: "POST",
                    headers: {"Content-type": "application/json"},
                    body: JSON.stringify(
                        {username: username,
                            password: password}
                    )})
            const result = await response.json();
            setToken(result.token);
            console.log(result);
        }
        catch (error){
            setError(error.message)
        }
    }

    return(
        <div className="form">
            <h2>Sign Up!</h2>
            {error && <p>{error}</p>
                //this conditionally renders the error with a truthy/falsy like using ? :
            } 
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        className="input"
                        name="username"
                        required
                        onChange={(event)=>setUsername(event.target.value)}
                        value = {username}
                    />
                </label>
                <br/>
                <label>
                    Password:
                    <input
                        className="input"
                        name="password"
                        required
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                    />
                </label>
                <br/>
                <button className="button">Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm