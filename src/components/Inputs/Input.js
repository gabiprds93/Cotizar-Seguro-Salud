import React from 'react'
import TextField, {
  Input as MaterialInput,
} from '@material/react-text-field'
import '@material/react-text-field/dist/text-field.css'

const InputMaterialize = ({
  type,
  label,
  dense,
  styleType,
  outlined,
  helperText,
  className,
  error,
  touched,
  input,
  required,
  ...rest }) => {
  
  const hasErrors = () => {
    if (error === undefined) {
      return false
    }
    return true
  }

  return(
    <React.Fragment>
      <div
        style={{ position: 'relative', margin: '0.5em auto', width: '100%' }}
      >
        <TextField
          type={type || 'text'}
          label={label}
          style={{ width: '100%' }}
          outlined={outlined}
          dense={dense}
          floatingLabelClassName={`mdc-custom-label__${styleType}`}
          lineRippleClassName={`mdc-custom-ripple__${styleType}`}
          notchedOutlineClassName={`mdc-custom-outline__${styleType}`}
          className={className}
        >
          <MaterialInput
            className={`mdc-custom-input__${styleType}`}
            isValid={
              (!hasErrors() && !touched) ||
              (hasErrors() && !touched) ||
              (!hasErrors() && touched)
            }
            required={required}
            {...(input ? { ...input } : { ...rest })}
          />
        </TextField>
      </div>
    </React.Fragment>
  )
}

export default InputMaterialize