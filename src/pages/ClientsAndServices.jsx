import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import { BiTrash, BiEdit, BiBookOpen, BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom"
import UpdateService from "../components/UpdateService";
const ClientsServices = () => {
  const[klijenti, setKlijenti] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);
  


  useEffect(() => {
    axios.get(/klijenti/)
      .then((response) => {
        console.log(response.data)
        setKlijenti(response.data)
      })
  }, []);

  return(
    
    <>
    <h1 className="mt-3">Upravljanje klijentima</h1>
    <Container>

    
      <Container>
        {showModal && <UpdateService show={showModal} onHide={handleCloseModal} />}
      </Container>
      </Container>
      <Container>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Usluge klijenata i status kredita</Accordion.Header>
        <Accordion.Body>
        {
        klijenti.length > 0 && (
          <>
     
      {klijenti && klijenti.length > 0 ? (
        klijenti.map((item, index) => (

          <Row key={index} className="border border-secondary rounded shadow-sm py-2 my-2" >
            <Col md={9}>
              ID: {item.id_klijent} Ime: {item.ime_klijenta} Prezime: {item.prezime_klijenta} Usluga: {item.usluga} Stanje kredita: {item.stanje_kredita}
            </Col>
            <Col md={3}>
            {
              <BiEdit  onClick={handleOpenModal} style={{ fontSize: "20px", color: "red", marginRight: "10px", cursor: "pointer" }} />

}
            </Col>
          </Row>




        ))
      ) : (
        <Container className="text-danger">Nema servera za prikazati</Container>
      )}
          </>
        )
       }
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Container>
    </>
  )
}

export default ClientsServices;