import React from 'react'
import { connect } from 'react-redux'

import {fetchPersonData} from '../redux/actions/actions'

const InsuranceForm = ({fetchPersonData}) => {
  fetchPersonData()
  return(
    <div className='insurance-form-container'>
      <h2>
        <span className='txt-black'>Obtén tu </span>
        <span className='txt-red'>seguro ahora</span>
      </h2>
      <p className='txt-gray'>Ingresa los datos para comenzar</p>
    </div>
  )
}

const mapDispatchToProps = { fetchPersonData }

export default connect(
  null,
  mapDispatchToProps
)(InsuranceForm)