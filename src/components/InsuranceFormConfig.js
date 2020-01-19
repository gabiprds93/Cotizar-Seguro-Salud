export const InsuranceFormConfig = [
  { label: 'Tipo de documento', type: 'select', name: 'documentType', required: true },
  { label: 'Numero de Documento', type: 'text', name: 'documentNumber', required: true },
  { label: 'Fecha de Nacimiento', type: 'date', name: 'birthday', required: true },
  { label: 'Celular', type: 'text', name: 'phone', required: true },
  {
    label: 'Acepto la ',
    type: 'checkbox',
    name: 'terms',
    link: 'Política de Protección de Datos Personales y los Términos y Condiciones.',
    redirect: '/terminos-condiciones',
    checked: true,
    display: 'block',
    size: 12,
  },
]

export const documentType = [
  { id: 1, name: 'DNI' },
  { id: 2, name: 'Carnet de Extranjería' }
]