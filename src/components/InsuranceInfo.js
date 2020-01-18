import React from 'react'

import logoRimac from '../assets/images/logo-rimac.png'
import redBackground from '../assets/images/red-background.png'
import iconShield from '../assets/icons/ic_shield.png'
import icMobile from '../assets/icons/ic_mobile.png'
import icMoney from '../assets/icons/ic_money.png'
import icClinic from '../assets/icons/ic_clinic.png'

const InsuranceInfo = () => {
  return(
    <div className='insurance-info-container'>
      <img alt='Fondo rojo' className='insurance-info-bg' src={redBackground} />
      <div className='logo'>
        <img alt='Logo Rimac' src={logoRimac} />
      </div>
      <div className='content'>
        <h1>Seguro de <b>Salud</b></h1>
        <div>
          <p><img alt='icono de seguridad' src={iconShield} />Cómpralo de manera fácil y rápida</p>
          <p><img alt='icono de celular' src={icMobile} />Cotiza y compra tu seguro 100% digital</p>
          <p><img alt='icono de dinero' src={icMoney} />Hasta S/.12 millones de cobertura anual</p>
          <p><img alt='icono de clinica' src={icClinic} />Más de 300 clínicas en todo el Perú</p>
        </div>
      </div>
    </div>
  )
}

export default InsuranceInfo