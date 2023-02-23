import { useState } from 'react';
import { Link } from 'react-scroll';
import '../style/Navbar.css';

function Navbar() {

  const [showMenu, setShowMenu] = useState(false)

  function openMenu() {
    setShowMenu(!showMenu)
  }

  return (
    <header className='header-container'>
      <nav className="nav-bar">
        <div className="logo">
          <h1 className="logo-first">F.T.</h1>
        </div>

        {
          !showMenu && (
            <div className="nav-list">
              <ul>
                <li className="nav-item">
                  <Link to="home" spy={ true } smooth={ true } duration={ 500 }>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="about" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }>
                    Sobre
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="projects" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }>
                    Projetos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="contact" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }>
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
          )
        }

        <div className="mobile-menu-icon">
          <button
            onClick={ () => openMenu() }
          >
            {
              showMenu ? (
                <img
                  className="menu-icon"
                  src="https://cdn-icons-png.flaticon.com/512/2732/2732657.png"
                  alt="menu-icon" 
                />
              ) : (
                <img
                  className="menu-icon"
                  src="https://cdn-icons-png.flaticon.com/512/6015/6015685.png"
                  alt="menu-icon" 
                />
              )
            }
          </button>
        </div>
      </nav>

      {
        showMenu && (
          <div className="mobile-menu">
            <ul>
              <li className="nav-item">
                <Link to="home" spy={ true } smooth={ true } duration={ 500 }>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="about" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }>
                  Sobre
                </Link>
              </li>
              <li className="nav-item">
                <Link to="projects" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }>
                  Projetos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contact" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }>
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        )
      }
    </header>
  )
}

export default Navbar;
