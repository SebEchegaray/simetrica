import React, { Component } from 'react'
import './Main.scss'
import './Galeria.scss'
import bannerImage from '../images/Haz_de_tu_casa.png'
import textLogo from '../images/Text_Logo_White_Transparent.png'
import roundLogoBlue from '../images/Round_Logo_Blue.png'
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import firstJobImg from '../images/First_Job_Img.png'

export class Galeria extends Component  {
  state = {
    fullSize: '',
  }

  increaseSize = () => {
    this.setState = ({ fullSize: 'full' })
  }

  render() {
    return (
      <div className="main__component__wrapper">
        <div className="ghost__wrapper"> {/* Only to add Header Banner Image */}
          <div className="banner__image galeria__banner" style={{ backgroundImage: `url(${bannerImage})` }}>
            <img src={roundLogoBlue} alt="" className="text__logo galeria" />
          </div>
        </div>
        
        <h1 className="h1__main-style diff-bg"><p>Galeria</p></h1>
        <div className="content__main-wrapper">
          <section className="grid__images">
            <div className={`image ${this.state.fullSize}`} style={{ backgroundImage: `url(${firstJobImg})` }} onClick={this.increaseSize}>
              <div className="overlay__text"><ImageSearchIcon /> Ver</div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}