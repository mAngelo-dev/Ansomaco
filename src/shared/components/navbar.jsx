import {useAuthContext} from "@asgardeo/auth-react";

export default function Navbar() {
  const { signOut } = useAuthContext();

  return (
    <>
      <div className="position-fixed h-100" style={{width: '4.5rem', zIndex: 1030}}>
        <div className="d-flex flex-column flex-shrink-0 bg-body-tertiary h-100" style={{width: 4.5 + 'rem'}}>
          <a href="#" className="d-block p-3 link-body-emphasis text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
            <img src="/tecnisys-logo-positivo.png" width={42} height={42} alt={'logo'}/>
            <span className="visually-hidden">Icon-only</span>
          </a>
          <hr className="mt-0 mb-0"/>

          {/*Lista de Funções*/}
          <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
            <li className="nav-item">
              <a href="/dashboard"
                   className={`nav-link py-3 rounded-0 ${location.pathname === '/dashboard' ? 'bg-primary bg-gradient border-black border-end border-3' : ''}`}
                   aria-current="page"
                   data-bs-toggle="tooltip"
                   data-bs-placement="right"
                   aria-label="Dashboard"
                   data-bs-original-title="Dashboard">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" className="bi bi-house" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                </svg>
              </a>
            </li>
            <hr className="mt-0 mb-0"/>
            <li>
              <a href="/create"
                   className={`nav-link py-3 rounded-0 ${location.pathname === '/create' ? 'bg-primary bg-gradient border-black border-end border-3' : ''}`}
                   data-bs-toggle="tooltip"
                   data-bs-placement="right"
                   aria-label="Create"
                   data-bs-original-title="Create">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black"
                       className="bi bi-terminal-plus" viewBox="0 0 16 16">
                  <path
                      d="M2 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1z"/>
                  <path
                      d="M3.146 5.146a.5.5 0 0 1 .708 0L5.177 6.47a.75.75 0 0 1 0 1.06L3.854 8.854a.5.5 0 1 1-.708-.708L4.293 7 3.146 5.854a.5.5 0 0 1 0-.708M5.5 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5"/>
                </svg>
              </a>
            </li>
          </ul>

          {/*Lista do Perfil*/}
          <div className="dropdown border-top">
            <a href="#"
               className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle"
               data-bs-toggle="dropdown" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                  <path fillRule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
              </svg>
            </a>
            <ul className="dropdown-menu text-small shadow">
              <li><a className="dropdown-item" href="/profile">Profile</a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#logout-modal">Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/*Modal de Saída*/}
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