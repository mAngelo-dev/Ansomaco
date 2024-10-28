import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {AuthProvider} from "@asgardeo/auth-react";
import {authConfig} from "./utils/auth-config.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Dashboard from "./pages/dashboard/index.jsx";
import App from "./App.jsx";
import Profile from "./pages/profile/index.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider config={authConfig}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<App />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/profile"} element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
