import React from 'react'
import { Container, Row, Col } from 'react-grid-system';

import SideImage from '../components/SideImage'

const Steps = () => {
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
        </Col>
      </Row>
    </Container>
  )
}

export default Steps