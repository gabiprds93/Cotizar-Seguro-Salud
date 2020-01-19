import React from 'react'

import ErrorMessage from './ErrorMessage'
import Input from 'components/01-atoms/Input/Input'
import SelectForm from './SelectForm'
import InputDate from './InputDate'
import InputBox from './InputBox'

let getWidth = size => {
  let width = (size / 12) * 100
  return `${width}%`
}

const chooseTypeInput = (props, ErrorProps) => {
  let {
    type,
    input,
  } = props
  switch (type) {
    case 'select':
      return <SelectForm {...props} />
    case 'datepicker':
      return <InputDate {...props} {...input} />
    case 'checkbox':
      return <InputBox {...props} {...props.input} />
    default:
      return <Input {...props} {...ErrorProps} />
  }
}

const InputForm = props => {
  let { meta, error, size, block, padding, display } = props
  let messageError = meta ? meta.error : error
  let ErrorProps = {
    error: messageError,
    touched: meta ? meta.touched : true,
  }

  let width = size ? getWidth(size) : '50%'
  let displayCss = block ? block : display ? display : 'inline-block'
  return (
    <div
      style={{
        display: `${displayCss}`,
        width: `${width}`,
        padding: `${padding}`,
      }}
    >
      {chooseTypeInput(props, ErrorProps)}
      <ErrorMessage {...ErrorProps} />
    </div>
  )
}

export default InputForm
