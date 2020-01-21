export const firstFormConfig = [
  { label: 'Tipo Doc.', type: 'select', name: 'tipoDocumento', required: true, size: 4 },
  { label: 'Nro. de Documento', type: 'text', name: 'numDocumento', required: true, size: 8 },
  { label: 'Nombres', type: 'text', name: 'nombres', required: true, size: 12, },
  { label: 'Apellido Paterno', type: 'text', name: 'apellidoPaterno', required: true, size: 12, },
  { label: 'Apellido Materno', type: 'text', name: 'apellidoMaterno', required: true, size: 12, },
  { label: 'Fecha de Nacimiento', type: 'date', name: 'fecNacimiento', required: true, size: 12, },
  { label: 'Género', type: 'text', name: 'sexo', required: true, size: 12, },
]

export const tipoDocumento = [
  { value: '', label: '' },
  { value: 2, label: 'DNI' },
]