{/*Composant header et footer*/}

import { Outlet, Link } from 'react-router-dom'

import '../scss/layout.scss'

import logoHeader from '../assets/images/logo-kasa-desktop.png'
import logoFooter from '../assets/images/logo-kasa-white.png'

const Layout = () => {
  return (
    <div>
        {/*Header Section*/}
      <header>
        <img src={logoHeader} alt="logo Kasa" className="logo-header" />
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A Propos</Link>
        </nav>
        </header>

        {/*Main Section où les pages Home, About etc apparaitront*/}
        <main>
            <Outlet />
        </main>
      
        {/*Footer Section*/}
      <footer>
        <img src={logoFooter} alt="logo Kasa" className="logo-footer" />
        <h3>© 2025 Kasa. All rights reserved.</h3>
      </footer> 
    </div>
  )
}

export default Layout