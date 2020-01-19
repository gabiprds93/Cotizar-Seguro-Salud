export const validate = values => {
  const errors = {}
  if (!values.tipoDocumento) {
    errors.tipoDocumento = 'Requerido'
  }
  if (!values.numDocumento) {
    errors.numDocumento = 'Requerido'
  }
  if (!values.fecNacimiento) {
    errors.fecNacimiento = 'Requerido'
  }
  if (!values.telefono) {
    errors.telefono = 'Requerido'
  }

  return errors
}
