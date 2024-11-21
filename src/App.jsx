import Login from "./pages/login/index.jsx";
import {Route, Routes} from "react-router-dom";
import Layout from "./shared/components/layout.jsx";
import PrivateRoute from "./utils/PrivateRoute.jsx";
import Dashboard from "./pages/dashboard/index.jsx";
import Profile from "./pages/profile/index.jsx";
import Create from "./pages/create/index.jsx";

export default function App() {
  return (
  <Routes>
    <Route path="/" element={<Login />} />

    <Route element={<Layout />}>
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } />
      <Route path="/profile" element={
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      } />
      <Route path="/create" element={
        <PrivateRoute>
          <Create />
        </PrivateRoute>
      } />
    </Route>
  </Routes>
  )
};