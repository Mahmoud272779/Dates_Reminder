import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DatesCount = ({persons}) => {
  return (
    <div>
      <Row className="justify-content-center"> 
        <Col sm="8">
        لديك {persons.length} مواعيد
        </Col>
      </Row>
    </div>
  )
}

export default DatesCount
