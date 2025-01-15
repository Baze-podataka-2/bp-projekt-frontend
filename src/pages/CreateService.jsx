import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Container, Button, Row, Col, Modal } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const CreateService = ({ show, onHide }) => {

  const navigate = useNavigate();
  const [vrsta, setVrsta] = useState('');
  const [cijena, setCijena] = useState('');

  const hideModal = () => {
    navigate("/usluge");
    onHide();
  };



  const handleSendData = () => {
    const serverData = {
      vrsta,
      cijena,
    }

    axios.post("http://localhost:8080/usluge/", serverData)
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
      <Modal.Header closeButton onClick={hideModal} className='text-center align-items-center'><h1 className="mb-0">Nova usluga</h1></Modal.Header>
      <Container className='py-3'>
        <Row className="justify-content-center mt-4 text-center w-100">
          <Col>
            <Form className='mb-2'>
              <Form.Group className="mb-3 " controlId="formTextInput">
                <Form.Control
                  type="text"
                  placeholder="Vrsta"
                  value={vrsta}
                  onChange={(event) => setVrsta(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formTextInput">
                <Form.Control
                  type="text"
                  placeholder="Cijena"
                  value={cijena}
                  onChange={(event) => setCijena(event.target.value)}
                />
              </Form.Group>
            </Form>
            <Button variant="danger" className='mt-3 w-25' onClick={handleSendData}>Spremi</Button>
            </Col>

        </Row>
      </Container>

    </Modal>
  );
};

export default CreateService