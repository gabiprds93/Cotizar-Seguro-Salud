import React from 'react'

const ErrorMessage = ({ touched, error, isSubmit }) => {
  let arrErrors = []
  if ((touched || isSubmit) && error) {
    if (typeof error === 'string') {
      arrErrors = [error]
    } else if (error instanceof Array) {
      arrErrors = [...error]
    } else if (typeof error === 'object') {
      arrErrors = Object.values(error.non_field_errors || error)
    }
  }
  return (
    <>
      {arrErrors.map((el, index) =>
        isSubmit ? (
          <span className='errorMessage' key={index}>
            {el.non_field_errors || el}
          </span>
        ) : (
          <span className='errorMessage' key={index}>{el}</span>
        ),
      )}
    </>
  )
}

export default ErrorMessage
