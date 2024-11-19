import { useAuthContext } from "@asgardeo/auth-react";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function App() {
  const { state, signIn } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.isAuthenticated && !state.isLoading) {
      signIn();

    }

    if (state.hasErrors) {
      console.error("Auth Error:", state.errors);
    }

    if (state.isAuthenticated) {
      console.log("User is authenticated");
      navigate("/dashboard");
    }
  }, [state, signIn, navigate]);

  return (
    <div className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <div className="text-center">
        <h1 className="display-4 mb-4">VMWEBAPP</h1>

        {state.isLoading ? (
          <div>
            <div className="spinner-border text-primary mb-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="text-muted">Autenticando...</p>
          </div>
        ) : (
          <div>
            <p className="text-muted">Redirecionando para login...</p>
            {state.hasErrors && (
              <div className="alert alert-danger mt-3" role="alert">
                Erro de Autenticação. Tente novamente.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};