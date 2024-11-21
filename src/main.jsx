import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import authConfig from "./utils/auth-config.js";
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-icons/font/fonts/bootstrap-icons.woff';
import 'bootstrap-icons/font/fonts/bootstrap-icons.woff2';
import App from "./App.jsx";
import {AuthProvider} from "@asgardeo/auth-react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider config={authConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);