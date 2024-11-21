import Login from "./pages/login/index.jsx";
import {Route, Routes} from "react-router-dom";
import Layout from "./shared/components/layout.jsx";
import PrivateRoute from "./utils/PrivateRoute.jsx";
import Dashboard from "./pages/dashboard/index.jsx";
import Profile from "./pages/profile/index.jsx";
import Create from "./pages/create/index.jsx";
import NotFound from "./pages/notfound/index.jsx";

export default function App() {
  return (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="*" element={<NotFound />} />

    <Route element={<Layout />}>
      <Route exact path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } />
      <Route exact path="/profile" element={
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      } />
      <Route exact path="/create" element={
        <PrivateRoute>
          <Create />
        </PrivateRoute>
      } />
    </Route>
  </Routes>
  )
};