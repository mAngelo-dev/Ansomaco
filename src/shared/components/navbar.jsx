import {NavLink, useNavigate} from "react-router-dom";

export default function Navbar() {
  useNavigate()

  return (
      <nav className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/public"
           className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <div>
            <img src="/tecnisys-logo-positivo.png" alt="logo" width={48} height={48}/>
          </div>
          <span className="fs-4">Tecnisys VM Portal</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item"><NavLink to={"/dashboard"} className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`} aria-current="page">Dashboard</NavLink></li>
          <li className="nav-item"><NavLink to={"/profile"} className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}>Profile</NavLink></li>
          <li className="nav-item"><NavLink to={"/"} className={`nav-link`}>Log out</NavLink></li>
        </ul>
      </nav>
  );
}