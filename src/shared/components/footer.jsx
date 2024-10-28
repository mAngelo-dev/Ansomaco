import {NavLink} from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-3 my-4 position-absolute bottom-0 w-100">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
        <li className="nav-item"><NavLink to={'/dashboard'} className="nav-link px-2 text-body-secondary">Dashboard</NavLink></li>
        <li className="nav-item"><NavLink to={'/profile'}  className="nav-link px-2 text-body-secondary">Profile</NavLink></li>
      </ul>
      <p className="text-center text-body-secondary">© {new Date().getFullYear()} Tecnisys</p>
    </footer>
  );
}