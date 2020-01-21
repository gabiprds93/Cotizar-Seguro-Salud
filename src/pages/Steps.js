import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { connect } from 'react-redux'

import SideImage from '../components/SideImage'
import StepHeader from '../components/StepHeader';

const Steps = ({ personData }) => {
  const [header, setHeader] = React.useState({title: [], subtitle: ''})
  const dataForStepHeader = React.useMemo(() => {
    if(personData){
      setHeader({title: ['Hola,', personData.tercero.nombres], subtitle: 'Valida que los datos sean correctos.'})
    }
  }, [personData])
  return(
    <Container fluid style={{padding: 0}}>
      <Row nogutter>
        <Col md={3}>
          <SideImage />
        </Col>
        <Col>
          <div className='step-progress'>
            <span className='txt-red'>Paso 1</span> <span className='txt-gray'>de 7</span>
          </div>
          <div className='step-container'>
            <StepHeader title={header.title} subtitle={header.subtitle} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    personData: state.person.profile
  }
}

export default connect(
  mapStateToProps,
)(Steps)