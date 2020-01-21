import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import SideImage from '../components/SideImage'
import StepHeader from '../components/StepHeader'
import Form from '../components/Form'
import {firstFormConfig, tipoDocumento} from '../config/FirstFormConfig'

const Steps = ({ personData, handleSubmit, pristine, submitting }) => {
  const [header, setHeader] = React.useState({title: [], subtitle: ''})
  const dataForStepHeader = React.useMemo(() => {
    if(personData){
      setHeader({title: ['Hola,', personData.tercero.nombres], subtitle: 'Valida que los datos sean correctos.'})
    }
    else{
      setHeader({title: ['Hola,', '¡emepecemos!'], subtitle: 'Cuéntanos un poco sobre ti'})
    }
  }, [personData])
  const submitForm = () => {
    console.log()
  }
  return(
    <Container fluid style={{padding: 0}}>
      <Row nogutter>
        <Col md={3}>
          <SideImage />
        </Col>
        <Col>
          <div className='step-progress'>
            <div>
              <span className='txt-red'>Paso 1</span> <span className='txt-gray'>de 7</span>
            </div>
          </div>
          <StepHeader title={header.title} subtitle={header.subtitle} />
          <div className='step-form'>
            <p className='txt-gray'>Datos personales del titular</p>
            <Form formConfig={firstFormConfig} handleSubmit={handleSubmit} submitForm={submitForm} pristine={pristine} submitting={submitting}></Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = state => {
  const person = state.person
  let initialValues = {}
  if(person && person.profile){
    let data = person.profile.tercero
    let getDocument = tipoDocumento.find(item => {
      return item.value === data.tipoDocumento
    })
    initialValues = {
      tipoDocumento: getDocument,
      numDocumento: data.numDocumento,
      nombres: data.nombres,
      apellidoPaterno: data.apellidoPaterno,
      apellidoMaterno: data.apellidoMaterno,
      fecNacimiento: data.fecNacimiento,
      sexo: data.sexo
    }
  }
  return {
    personData: state.person.profile,
    initialValues
  }
}

export default connect(
  mapStateToProps,
)(reduxForm({
  form: 'first-step',
})(Steps))