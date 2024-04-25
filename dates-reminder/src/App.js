import {Button, Col, Container, Row} from "react-bootstrap";
import { persons } from './data';
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DatesAction from "./components/DatesAction";
import React, { useState, useEffect } from 'react'
function App() {
 
  const [personsData,setPersonsData]=useState(persons);
  const deletePersons=()=>{
    setPersonsData([]);
  }

  const showPersons=()=>{
    setPersonsData(persons);
  }

  useEffect(()=>setPersonsData([]),[]);


  return (
    <div className="font" >
    <Container className="py-5" >
      <DatesCount persons={personsData}></DatesCount>

      <DatesList persons={personsData}></DatesList>
      <DatesAction deleteData={deletePersons} showData={showPersons}></DatesAction>
    </Container>
    </div>
  );
}


export default App;
