import React from 'react'
import { Field } from 'redux-form'

import InputForm from './Inputs/InputForm'
import Button from './Button'

const Form = ({ formConfig, handleSubmit, submitForm, pristine, submitting, labelBtn }) => {
  return(
    <form
      onSubmit={handleSubmit(submitForm)}
      noValidate
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {formConfig.map((obj, index) => {
        return (
          <Field
            key={index}
            name={obj.name}
            type={obj.type}
            // options={options[obj.name]}
            component={InputForm}
            label={obj.label}
            checked={obj.checked}
            required={obj.required}
            size={obj.size}
            outlined={true}
            display={obj.display}
          />
        )
      })}
      <Button disabled={pristine || submitting}>{labelBtn}</Button>
    </form>
  )
}

export default Form