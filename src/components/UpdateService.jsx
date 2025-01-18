import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Button, Row, Col, Modal } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
const UpdateService = ({ show, onHide}) => {

    const [id_klijent, setId_klijent] = useState('');
    const [id_usluga, setId_usluga] = useState('');
    

    const navigate = useNavigate();

    const hideModal = () => {
        onHide();
      };
      
      const handleEditData = () => {
        const data = {
           id_klijent,
           id_usluga
        };
    
        axios.get('http://localhost:8080/klijenti/', data)
          .then(() => {
            navigate("/klijenti")
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
        <Modal.Header closeButton onClick={hideModal} className='text-center align-items-center'><h1 className="mb-0">Promjeni paket usluge</h1></Modal.Header>
        <Container className='py-3'>
          <Row className="justify-content-center mt-4 text-center w-100">
            <Col>
              <Form className='mb-2'>
    
              <Form.Group className="mb-3 " controlId="formTextInput">
                  <Form.Control
                    type="text"
                    placeholder="Id korisnika"
                    value={id_klijent}
                    onChange={(event) => setId_klijent(event.target.value)}
                  />
                </Form.Group>
    
                <Form.Group className="mb-3 " controlId="formTextInput">
                  <Form.Control
                    type="text"
                    placeholder="nova usluga"
                    value={id_usluga}
                    onChange={(event) => setId_usluga(event.target.value)}
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

export default UpdateService