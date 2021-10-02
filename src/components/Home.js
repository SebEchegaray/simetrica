import React, { Component } from 'react'
import './Main.scss'

export class Home extends Component  {
  render() {
    return (
      <div className="content__main-wrapper">
        <h1>Welcome to your HomePage, Maxi!</h1><br />
        <h2>La idea aca es que vos me digas que y como queres el contenido en esta pagina. Necesitamos un design aca para ver la distribucion de todos los elementos.</h2><br />
        <p>Solo para que tengas esta informacion, te cuento que estoy construyendo tu website con React(<strong>lenguaje de Front-End</strong>) por lo que no solo es un website sino que pasa a ser una app. Esto significa que podemos ir agregando funcionalidades a medida que sigamos construyendolo o mas comunmente denominado update el website.</p><br />
        <p>Como veras estoy armando por componentes y tu bara de navegacion es uno de ellos, teniendo tu logo giratorio de manera infinita y pronto sera una barra que cambia apenas se presenta un scroll hacia abajo. La forma en la que estoy armando y esto es para que quien sea que haga el design, sea yo u otra persona, es utilizar como premisa el nombre de la empresa...es decir, todo simetrico, de ahi que las opciones del menu esten divididas en dos a los lados de la barra de navegacion</p><br />
        <p>Hasta el momento tu website es respnsivo entre laptops y pantallas externas, pero no para dispositivos moviles (<strong>Tablets y Celulares</strong>), pero lo sera una vez que tengamos el design asi puedo trabajar en eso de una sola vez.</p>
      </div>
    )
  }
}