import React, { useEffect, useState } from 'react'
import { Home } from './components/Home'
import { Galeria } from './components/Galeria'
import { Presupuestos } from './components/Presupuestos'
import { Nosotros } from './components/Nosotros'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom'
import './components/Main.scss'
import roundLogoBlue from './images/Round_Logo_Blue.png'
import roundLogoWhite from './images/Round_Logo_White.png'
import logoWhite from './images/Pentagon_Logo_White.png'
// import bannerImage from './images/Sphere_Gif.gif'
// import textLogo from './images/Text_Logo_White_Transparent.png'
import './fonts/MyriadPro-Regular.otf'

function App() {
  const [show, setShow] = useState(true)
  const controlNavBar = () => {
    if ( window.scrollY > 100 ) {
      setShow(true)
    } else if ( window.scrollY === 0 ) {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavBar)
    return () => {
      window.removeEventListener('scroll', controlNavBar)
    }
  }, [])

  return (
    <Router>
      <nav className={`header__nav ${show && 'scroll__nav'}`}>
        <ul className="header__nav-ul">
          <Link className="header__nav-li" to="/">Home</Link>
          <Link className="header__nav-li" to="/galeria">Galeria</Link>
        </ul>
        <div className="rotating__logo-container">
          <a href="/"><img src={logoWhite} alt="" className="rotating__logo" /></a>
        </div>
        <ul className="header__nav-ul">
          <Link className="header__nav-li" to="/presupuestos">Presupuestos</Link>
          <Link className="header__nav-li" to="/nosotros">Nosotros</Link>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/galeria" exact component={Galeria} />
        <Route path="/presupuestos" exact component={Presupuestos} />
        <Route path="/nosotros" exact component={Nosotros} />
      </Switch>

      <footer>
        <h2>Ademas necesitamos saber que queres poner como informacion relevante para el cliente aca en el footer. Aca siempre van los detalles de contacto y demas cosas sobre la empresa, pero quiero saber que mas queres poner.</h2><br />
        <p className="powered__by"><span>Powered by </span><strong>VITA</strong></p>
      </footer>
    </Router>
  );
}

export default App;
