import './App.css'
import { useAuthContext } from "@asgardeo/auth-react";
import { useEffect } from 'react';

function App() {
  const {state, signIn, signOut} = useAuthContext();

  useEffect(() => {
    if (state.hasErrors) {
      console.error("Auth Error:", state.errors);
      return;
    }
  } , [state]);

  state ? console.log(state) : console.log("No state");
  return (
    <>
      <h1>VMWEBAPP</h1>
      <button id="signInButton" onClick={() => signIn()}>Sign In</button>
      <button id="signOutButton" onClick={() => signOut()}>Sign Out</button>
    </>
  )

}

export default App