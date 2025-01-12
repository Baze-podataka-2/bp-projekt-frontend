import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import { BiTrash, BiEdit, BiBookOpen} from "react-icons/bi";


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
    <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Popis usluga</Accordion.Header>
        <Accordion.Body>
        <ul>
          {usluge.map((item) => 
            <Row key={item.id} className="border border-secondary rounded shadow-sm py-2 my-2" >
              <Col md={8}>
              Vrsta usluge - {item.vrsta} - Cijena usluge - {item.cijena}
              </Col>
              <Col md={4}>
              <BiTrash style={{ fontSize: "20px", color: "red", marginRight: "10px"}}/>
              <BiEdit style={{ fontSize: "20px", color: "black", marginRight: "10px" }}/>
              <BiBookOpen style={{ fontSize: "20px", color: "black" }}/>
              </Col>
              </Row>
          )}
        </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

return(
  <>
  <h1 className="mt-3">Usluge</h1>
  <Container className="px-0 mt-3">
    <BasicExample></BasicExample>
  </Container>
  </>
)
}

export default Services