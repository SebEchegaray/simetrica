import React, { Component } from 'react'
import './Main.scss'
import './Galeria.scss'
import bannerImage from '../images/Haz_de_tu_casa.png'
import textLogo from '../images/Text_Logo_White_Transparent.png'
import roundLogoBlue from '../images/Round_Logo_Blue.png'
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import galeria from './GaleriaImagenes'

export class Galeria extends Component  {
  state = {
    image: '',
  }

  increaseSize = (key) => {
    let fullImgKey = key
    
    this.setState({ image: fullImgKey })
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
        
        <div className="fullSize__container">
          <div className="fullSizeImg" style={{backgroundImage: `url(${galeria[this.state.image]})`}}>&nbsp;</div> {/* Full size Img */}
          {/*
            *** I need to add here all the images available so people don't have to close 
            the current on to see a different image
            *** I also need to add a function to close the images so people can keep enjoying the web
          */}
        </div>

        <div className="content__main-wrapper">
          <section className="grid__images">
            {Object.keys(galeria).map(img => {
              return (
                <div key={img} className="image" style={{ backgroundImage: `url(${galeria[img]})` }} onClick={() => { this.increaseSize(img) }}>
                  <div className="overlay__text"><ImageSearchIcon /> Ver</div>
                </div>
              )
            })}
          </section>
        </div>
      </div>
    )
  }
}