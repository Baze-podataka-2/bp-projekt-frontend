import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import { BiTrash, BiEdit, BiBookOpen, BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom"
const ClientsServices = () => {
  const[klijenti, setKlijenti] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseDModal = () => setShowDModal(false);
  const handleOpenDModal = (id) => {
    setSelectedId(id); 
    setShowDModal(true); 
  };

  useEffect(() => {
    axios.get('/klijenti')
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
        {showModal && <CreateServer show={showModal} onHide={handleCloseModal} />}
      </Container>

      <Container>
        {showDModal && <DeleteServer show={showDModal} onHide={handleCloseDModal} id={selectedId} />}
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
    <Container className="text-end">
        <Button onClick={handleOpenModal}><BiPlus />Dodaj</Button>
      </Container>
      <ToastContainer/>
      {klijenti && klijenti.length > 0 ? (
        klijenti.map((item, index) => (

          <Row key={index} className="border border-secondary rounded shadow-sm py-2 my-2" >
            <Col md={9}>
              ID: {item.id_klijent} Ime: {item.ime_klijenta} Prezime: {item.prezime_klijenta} Usluga: {item.usluga} Stanje kredita: {item.stanje_kredita}
            </Col>
            <Col md={3}>
              <BiEdit  onClick={() => handleOpenDModal(srv.id_posluzitelj)} style={{ fontSize: "20px", color: "red", marginRight: "10px", cursor: "pointer" }} />

              <Link to={`/serveri/${srv.id_posluzitelj}`} style={{ pointerEvents: "auto" }}>
                <BiBookOpen style={{ fontSize: "20px", color: "black" }} />
              </Link>

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