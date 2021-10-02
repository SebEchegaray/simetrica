import React from 'react'
import { Home } from './components/Home'
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
import './fonts/MyriadPro-Regular.otf'

function App() {
  return (
    <Router>

      <nav className="header__nav">
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
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <footer>
        <h2>Ademas necesitamos saber que queres poner como informacion relevante para el cliente aca en el footer. Aca siempre van los detalles de contacto y demas cosas sobre la empresa, pero quiero saber que mas queres poner.</h2><br />
        <p className="powered__by"><span>Powered by </span><strong>SEBECH</strong></p>
      </footer>
    </Router>
  );
}

export default App;
