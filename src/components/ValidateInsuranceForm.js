export const validate = values => {
  const errors = {}
  if (!values.tipoDocumento) {
    errors.tipoDocumento = 'Requerido'
  }
  if (!values.numDocumento) {
    errors.numDocumento = 'Requerido'
  } else if (!/^([0-9]){8}$/i.test(values.numDocumento)){
    errors.numDocumento = 'Numero inválido'
  }
  if (!values.fecNacimiento) {
    errors.fecNacimiento = 'Requerido'
  }
  if (!values.telefono) {
    errors.telefono = 'Requerido'
  } else if (!/^([0-9]){9}$/i.test(values.telefono)){
    errors.telefono = 'Celular inválido'
  }

  return errors
}
