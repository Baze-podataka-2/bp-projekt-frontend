import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';



const Services = () => {
 const[usluge, setUsluge] = useState([]);
 
useEffect(()=>{ 
  
 axios.get('/usluge')
 .then((response) => {
   setUsluge(response.data)
   console.log(response.data)
 })

}, [])


 function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Popis usluga</Accordion.Header>
        <Accordion.Body>
        <ul>
          {usluge.map((item) => 
            <li key={item.id}>
              Vrsta usluge - {item.vrsta} - Cijena usluge - {item.cijena}
            </li>
          )}
        </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

return(
  <>
  <Container>Usluge</Container>
  <Container>
    <BasicExample></BasicExample>
  </Container>
  </>
)
}

export default Services