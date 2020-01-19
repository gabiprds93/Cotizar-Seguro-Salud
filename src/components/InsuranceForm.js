import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import Checkbox from '@material/react-checkbox'
import '@material/react-checkbox/dist/checkbox.css'

import {fetchPersonData} from '../redux/actions/actions'
import { InsuranceFormConfig, tipoDocumento } from './InsuranceFormConfig'
import Button from './Button'
import InputForm from './Inputs/InputForm'
import { validate } from './ValidateInsuranceForm'

const InsuranceForm = ({ handleSubmit, fetchPersonData, pristine, submitting }) => {
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
        <div className='checkbox-container'>
          <Field name='terms' component={Checkbox} type='checkbox' nativeControlId="terms"></Field>
          <label htmlFor="terms">Acepto la Política de Protección de Datos Personales y los Términos y Condiciones.</label>
        </div>
        <div className='checkbox-container'>
          <Field name='politics' component={Checkbox} type='checkbox' nativeControlId="politics"></Field>
          <label htmlFor="politics">Acepto la Política de Envío de Comunicaciones Comerciales.</label>
        </div>
        <Button disabled={pristine || submitting}>Comencemos</Button>
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
    form: 'check-person-data',
    validate
  })(InsuranceForm)
)