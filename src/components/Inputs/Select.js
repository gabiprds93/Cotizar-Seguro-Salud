import React from 'react'
import MaterialSelect from '@material/react-select'
import '@material/react-select/dist/select.css'

const SelectMaterialize = ({
  options,
  className,
  label,
  styleType,
  outlined,
  input,
}) => {
  return (
    <div style={{ position: 'relative', margin: '0.5em auto', width: '100%' }}>
      <MaterialSelect
        label={label}
        style={{
          width: '100%',
          whiteSpace: 'pre',
        }}
        outlined={outlined}
        options={options}
        floatingLabelClassName={`mdc-custom-label__${styleType}`}
        lineRippleClassName={`mdc-custom-ripple__${styleType}`}
        notchedOutlineClassName={`mdc-custom-outline__${styleType}`}
        className={className}
        {...input}
      />
    </div>
  )
}

export default SelectMaterialize
