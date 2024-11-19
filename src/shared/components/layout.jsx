import { Outlet } from 'react-router-dom';
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";

export default function Layout() {
  return (
    <div className="d-flex">
      <Navbar />
      <main className="flex-grow-1" style={{ marginLeft: '4.5rem' }}>
        <Outlet />
      </main>
      <Footer />  
    </div>
  );
}