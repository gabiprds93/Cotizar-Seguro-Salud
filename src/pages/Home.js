import React from 'react'
import { Container, Row, Col } from 'react-grid-system';

import InsuranceForm from '../components/InsuranceForm'
import InsuranceInfo from '../components/InsuranceInfo'

const Home = ({ history }) => {
  return(
    <Container fluid style={{padding: 0}}>
      <Row nogutter>
        <Col md={6}>
          <InsuranceInfo />
        </Col>
        <Col>
          <InsuranceForm history={history} />
        </Col>
      </Row>
    </Container>
  )
}

export default Home