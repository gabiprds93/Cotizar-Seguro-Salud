import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import {fetchPersonData} from '../redux/actions/actions'
import { InsuranceFormConfig, tipoDocumento } from './InsuranceFormConfig'
import Button from './Button'
import InputForm from './Inputs/InputForm'

const InsuranceForm = ({handleSubmit, fetchPersonData}) => {
  const options = {
    tipoDocumento,
  }
  const submitForm = () => {
    fetchPersonData()
  }
  return(
    <div className='insurance-form-container'>
      <h2>
        <span className='txt-black'>Obtén tu </span>
        <span className='txt-red'>seguro ahora</span>
      </h2>
      <p className='txt-gray'>Ingresa los datos para comenzar</p>
      <form
        onSubmit={handleSubmit(submitForm)}
        noValidate
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {InsuranceFormConfig.map((obj, index) => {
          return (
            <Field
              key={index}
              name={obj.name}
              type={obj.type}
              options={options[obj.name]}
              component={InputForm}
              label={obj.label}
              checked={obj.checked}
              link={obj.link}
              redirect={obj.redirect}
              required={obj.required}
              size={obj.size}
              styleType={'primary'}
              outlined={true}
              display={obj.display}
            />
          )
        })}
        <Button></Button>
      </form>
    </div>
  )
}

const mapDispatchToProps = { fetchPersonData }

export default connect(
  null,
  mapDispatchToProps
)(
  reduxForm({
    form: 'register_courier',
  })(InsuranceForm)
)