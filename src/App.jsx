import './App.css'
import { useAuthContext } from "@asgardeo/auth-react";
import { useEffect } from 'react';
import {useNavigate} from "react-router-dom";

function App() {
  const {state, signIn} = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.hasErrors) {
      console.error("Auth Error:", state.errors);
    } if (state.isAuthenticated) {
      console.log("User is authenticated");
      navigate("/dashboard");
    }
  } , [navigate, state]);

  return (
    <>
      <h1>VMWEBAPP</h1>
      <button id="signInButton" onClick={() => signIn()}>Sign In</button>
    </>
  )

}

export default App