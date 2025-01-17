import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Container, Button, Row, Col, Modal } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const CreateIncident = ({ show, onHide }) => {

    const navigate = useNavigate();

    const [datum, setDatum] = useState('');
    const [opis, setOpis] = useState('');
    const [status, setStatus] = useState('');
  
    const hideModal = () => {
      navigate("/incidenti");
      onHide();
    };
  
    const handleSendData = () => {
      const incidentData = {
        datum,
        opis,
        status
      }
  
      axios.post("http://localhost:8080/incidenti/", incidentData)
        .then(() => {
          hideModal()
        })
        .catch((error) => {
          console.log(error)
        });
    };
  
  return (
    <Modal show={true} onHide={hideModal}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered      
  >
    <Modal.Header closeButton onClick={hideModal} className='text-center align-items-center'><h1 className="mb-0">Novi Incident</h1></Modal.Header>
    <Container className='py-3'>
      <Row className="justify-content-center mt-4 text-center w-100">
        <Col>
          <Form className='mb-2'>

          <Form.Group className="mb-3 " controlId="formTextInput">
              <Form.Control
                type="date"
                placeholder="Datum"
                value={datum}
                onChange={(event) => setDatum(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formTextInput">
              <Form.Control
                type="text"
                placeholder="Opis"
                value={opis}
                onChange={(event) => setOpis(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formTextInput">
              <Form.Control
                type="text"
                placeholder="Status"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
              />
            </Form.Group>
          </Form>
          <Button variant="danger" className='mt-3 w-25' onClick={handleSendData}>Spremi</Button>
          </Col>

      </Row>
    </Container>

  </Modal>
  )
}

export default CreateIncident