import './App.css'
import { useAuthContext } from "@asgardeo/auth-react";
import { useEffect } from 'react';

function App() {
  const {state, signIn, signOut} = useAuthContext();

  useEffect(() => {
    // Add error state checking
    if (state.hasErrors) {
      console.error("Auth Error:", state.errors);
      return;
    }
  } , [state]);
  console.log(state);
  return (
    <>
      <h1>VMWEBAPP</h1>
      <button id="signInButton" onClick={() => signIn()}>Sign In</button>
    </>
  )

}

export default App