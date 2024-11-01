import {NavLink} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {useAuthContext} from "@asgardeo/auth-react";

export default function Navbar() {
  const { signOut } = useAuthContext();

  return (
    <>
      <nav className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
           className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <div>
            <img src="/tecnisys-logo-positivo.png" alt="logo" width={48} height={48}/>
          </div>
          <span className="fs-4">Tecnisys VM Portal</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item"><NavLink to={"/dashboard"} className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`} aria-current="page">Dashboard</NavLink></li>
          <li className="nav-item"><NavLink to={"/profile"} className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}>Profile</NavLink></li>
          <li className="nav-item"><NavLink to={"/create"} className={`nav-link ${location.pathname === '/create' ? 'active' : ''}`}>Create</NavLink></li>
          <li className="nav-item"><a href={'#'} className={`nav-link`} data-bs-toggle="modal" data-bs-target="#logout-modal">Log out</a></li>
        </ul>
      </nav>

      <div className="modal fade" id="logout-modal" tabIndex="-1" aria-labelledby="logout-modal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="logout-modal-title">Deseja realmente se desconectar?</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Ao se desconectar, será necessário realizar login novamente, deseja prosseguir?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-danger" onClick={() => signOut()}>Sair</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}