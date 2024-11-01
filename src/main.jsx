import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import authConfig from "./utils/auth-config.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from "./App.jsx";
import Create from "./pages/create/index.jsx";
import Dashboard from "./pages/dashboard/index.jsx";
import Profile from "./pages/profile/index.jsx";
import {AuthProvider} from "@asgardeo/auth-react";
import PrivateRoute from "./utils/PrivateRoute.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider config={authConfig}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<App />} />
          <Route path={"/dashboard"} element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path={"/profile"} element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
            } />
          <Route path={"/create"} element={
            <PrivateRoute>
              <Create />
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
