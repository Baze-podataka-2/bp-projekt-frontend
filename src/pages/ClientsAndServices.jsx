import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import { BiTrash, BiEdit, BiInfoCircle} from "react-icons/bi";
import { Link } from "react-router-dom"
import Form from "react-bootstrap/Form"
import UpdateService from "../components/UpdateService";
import ClientDebtStatus from "../components/IsClientInDebt";
import ActiveClients from "../components/showActiveClients";

const ClientsServices = () => {
  const [klijenti, setKlijenti] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);
  const [input, setInput] = useState('')
  const [brDana, setBrDana] = useState([])


  useEffect(() => {
    axios.get(/klijenti/)
      .then((response) => {
        console.log(response.data)
        setKlijenti(response.data)
      })
  }, []);


  const BrojDanaR = () => {
    axios.get("/klijenti/brojdana/" + input)
      .then((response) => {
        setBrDana(response.data)
      })
      .catch((err) => console.log(err))
  }

  return (

    <>
      <h1 className="mt-3">Upravljanje klijentima</h1>
      <Container>
        <Form>
          <Form.Group className="mb-3 " controlId="formTextInput">
            <Form.Label>Prikaži koliko je klijent koristio uslugu</Form.Label>
            <Form.Control
              type="text"
              placeholder="ID"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </Form.Group>
          <Button onClick={BrojDanaR}>Prikaži</Button>
        </Form>
        {brDana && brDana.length > 0 ?
        <Container className="d-flex justify-content-center align-items-center text-center border border-secondary rounded mb-5 mt-5">
          <Row className="w-100 mx-0">
            <Col md={1} className="d-flex justify-content-center align-items-center">
              <h4>
                <Badge bg="success"><BiInfoCircle style={{ fontSize: "25px", fontWeight: "bold" }} /></Badge>
              </h4>
            </Col>
            <Col md={10} className="d-flex justify-content-center align-items-center">
               <h4>{brDana[0].recenica}</h4> 
            </Col>
          </Row>
        </Container>: null}

        <ClientDebtStatus/>
        <ActiveClients/>

        <Container>
          {showModal && <UpdateService show={showModal} onHide={handleCloseModal} />}
        </Container>
      </Container>
      <Container>
        <Accordion className="mt-5" defaultActiveKey="0">
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
                              <BiEdit onClick={handleOpenModal} style={{ fontSize: "20px", color: "red", marginRight: "10px", cursor: "pointer" }} />

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