import { useState } from 'react';
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
          <h1>Logo</h1>
        </div>

        <div className="nav-list">
          <ul>
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Projects</li>
            <li className="nav-item">Contact</li>
          </ul>
        </div>

        <div className="mobile-menu-icon">
          <button
            onClick={ openMenu }
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
              <li className="nav-item">Home</li>
              <li className="nav-item">About</li>
              <li className="nav-item">Projects</li>
              <li className="nav-item">Contact</li>
            </ul>
          </div>
        )
      }
    </header>
  )
}

export default Navbar;
