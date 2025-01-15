import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import axios from "axios";
import { BiTrash, BiEdit, BiBookOpen, BiPlus } from "react-icons/bi";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"

const Logs = () => {

     const [logovi, setLogovi] = useState([]);
     useEffect(() => {
        axios.get("/logovi")
          .then((response) => {
            setLogovi(response.data)
            console.log(response.data)
          })
          .catch((err) => {
            console.log(err)
          })
      }, [])
  return (
    <Container>
    <h1>Logovi</h1>
    
    {logovi && logovi.length > 0 ? (
      logovi.map((log) => (

        <Row key={log.id_log} className="border border-secondary rounded shadow-sm py-2 my-2" >
          <Col md={8}>
            Akcija- {log.akcija} - datum- {log.datum} - korisnik - {log.user}
          </Col>
          <Col md={4}>

            <BiTrash style={{ fontSize: "20px", color: "red", marginRight: "10px", cursor: "pointer" }} />

            <BiEdit style={{ fontSize: "20px", color: "black", marginRight: "10px" }} />
           
              <BiBookOpen style={{ fontSize: "20px", color: "black" }} />
            
          </Col>
        </Row>




      ))
    ) : (
      <Container className="text-danger">Nema servera za prikazati</Container>
    )}


  </Container>
  )
}

export default Logs