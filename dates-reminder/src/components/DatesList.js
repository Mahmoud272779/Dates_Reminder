import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DatesList = ({persons}) => {
  return (
    <Row className="justify-content-center"> 
        <Col sm="8">
        <div className="rectangle p-2">
        
        {persons.length ? (persons.map((item)=>{
          return(<div className="d-flex border-bottom mx-3 my-2" >
         <img className="img-avatar " src="ff.jpg" alt="fe"  />
         <div className="px-2">
         <p className="d-inline fs-4">{item.name}</p>
         <p className=" fs-6">{item.date} </p>
         </div>
        
        </div>)

        })):<h1 className="text-center">لا يوجد مواعيد اليوم</h1>}
        
          
        </div>
        </Col>
      </Row>

  )
}

export default DatesList
