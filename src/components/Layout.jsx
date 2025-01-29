{/*Composant header et footer*/}

import { Outlet, NavLink } from 'react-router-dom'

import '../scss/layout.scss'

import logoHeader from '../assets/images/logo-kasa-desktop.png'
import logoFooter from '../assets/images/logo-kasa-white.png'

const Layout = () => {
  return (
    <div>

      <header>
        <img src={logoHeader} alt="logo Kasa" className="logo-header" />
        <nav>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Accueil</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>A Propos</NavLink>
        </nav>
        </header>

        <main>
            <Outlet />
        </main>
      
      <footer>
        <img src={logoFooter} alt="logo Kasa" className="logo-footer" />
        <h3>© 2025 Kasa.<br className="line-break"></br> All rights reserved.</h3>
      </footer> 
    </div>
  )
}

export default Layout