import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {AuthProvider} from "@asgardeo/auth-react";
import {authConfig} from "./utils/auth-config.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider config={authConfig}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<App/>} />
          <Route path={"/dashboard"} element={<h1>Dashboard Template</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
