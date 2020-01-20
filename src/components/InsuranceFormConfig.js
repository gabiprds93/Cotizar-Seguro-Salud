export const InsuranceFormConfig = [
  { label: 'Tipo Doc.', type: 'select', name: 'tipoDocumento', required: true, size: 4 },
  { label: 'Nro. de Documento', type: 'text', name: 'numDocumento', required: true, size: 8 },
  { label: 'Fecha de Nacimiento', type: 'date', name: 'fecNacimiento', required: true, size: 12, },
  { label: 'Celular', type: 'text', name: 'telefono', required: true, size: 12, },
]

export const tipoDocumento = [
  { value: '', label: '' },
  { value: 2, label: 'DNI' },
]