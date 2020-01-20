import React from 'react'
import { Hidden } from 'react-grid-system'

import logoRimac from '../assets/images/logo-rimac.png'
import redBackground from '../assets/images/red-background2.png'

const SideImage = () => {
  return(
    <div className='side-image-container'>
      <Hidden xs sm>
        <img alt='Fondo rojo' className='side-image-bg' src={redBackground} />
      </Hidden>
      <div className='logo'>
        <img alt='Logo Rimac' src={logoRimac} />
      </div>
    </div>
  )
}

export default SideImage