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
        <div>
            <h2>Sign Up!</h2>
            {error && <p>{error}</p>
                //this conditionally renders the error with a truthy/falsy like using ? :
            } 
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        name="username"
                        onChange={(event)=>setUsername(event.target.value)}
                        value = {username}
                    />
                </label>
                <label>
                    Password:
                    <input
                        name="password"
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm