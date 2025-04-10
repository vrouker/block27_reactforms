import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenicate from './components/Authenticate'

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <h1 className="warning">Sign Up Here!</h1>
      <SignUpForm token={token} setToken={setToken}/>

      <Authenicate token={token} setToken={setToken}/>
    </>
  )
}

export default App
