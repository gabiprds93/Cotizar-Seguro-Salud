import React from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import TextField, { Input } from '@material/react-text-field'
import "react-datepicker/dist/react-datepicker.css";

const DateForm = ({
  name,
  value,
  onchange,
  label,
  outlined,
  styleType,
  // trailingIcon,
  dense,
  required,
  ...props
}) => {
  const today = new Date()
  return (
    <DatePicker
      customInput={
        <TextField
          type="text"
          label={label}
          dense={dense}
          outlined={outlined}
          style={{ width: '100%' }}
          floatingLabelClassName={`mdc-custom-label__${styleType}`}
          lineRippleClassName={`mdc-custom-ripple__${styleType}`}
          notchedOutlineClassName={`mdc-custom-outline__${styleType}`}
          // trailingIcon={trailingIcon}
        >
          <Input
            className={`mdc-custom-input__${styleType}`}
            value={value ? moment(value).format('L') : moment(today).format('L')}
            required={required}
          />
        </TextField>
      }
      name={name}
      dateFormat='L'
      dateFormatCalendar="MMMM"
      showTimeSelect={false}
      selected={value ? value : today}
      onChange={value => onchange(value.toISOString())}
      showYearDropdown
      yearDropdownItemNumber={10}
      scrollableYearDropdown
      {...props}
    />
  )
}

const DateInputForm = field => {
  return (
    <div style={{ position: 'relative', margin: '0.5em auto', width: '100%' }}>
      <DateForm
        {...field}
        onchange={field.onChange}
        onBlur={() => field.onBlur()}
      />
    </div>
  )
}

export default DateInputForm
