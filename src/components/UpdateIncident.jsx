import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Button, Row, Col, Modal } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
const UpdateIncident = ({ show, onHide, idU}) => {

    const [datum, setDatum] = useState('');
    const [opis, setOpis] = useState('');
    const [status, setStatus] = useState('');

    const navigate = useNavigate();

    const hideModal = () => {
        onHide();
      };
      
      const handleEditData = () => {
        const data = {
            datum,
            opis,
            status
        };
    
        axios.put('http://localhost:8080/incidenti/' + idU, data)
          .then(() => {
            navigate('/incidenti');
          })
          .catch((error) => {
            console.log(error)
          });
      }

    return (
        <Modal show={true} onHide={hideModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered      
      >
        <Modal.Header closeButton onClick={hideModal} className='text-center align-items-center'><h1 className="mb-0">Ured Incident {idU}</h1></Modal.Header>
        <Container className='py-3'>
          <Row className="justify-content-center mt-4 text-center w-100">
            <Col>
              <Form className='mb-2'>
    
              <Form.Group className="mb-3 " controlId="formTextInput">
                  <Form.Control
                    type="date"
                    placeholder="datum"
                    value={datum}
                    onChange={(event) => setDatum(event.target.value)}
                  />
                </Form.Group>
    
                <Form.Group className="mb-3 " controlId="formTextInput">
                  <Form.Control
                    type="text"
                    placeholder="opis"
                    value={opis}
                    onChange={(event) => setOpis(event.target.value)}
                  />
                </Form.Group>
    
                <Form.Group className="mb-3 " controlId="formTextInput">
                  <Form.Control
                    type="text"
                    placeholder="status"
                    value={status}
                    onChange={(event) => setStatus(event.target.value)}
                  />
                </Form.Group>
              </Form>
              <Button variant="danger" className='mt-3 w-25' onClick={handleEditData}>Spremi</Button>
              </Col>
    
          </Row>
        </Container>
    
      </Modal>
    )
}

export default UpdateIncident