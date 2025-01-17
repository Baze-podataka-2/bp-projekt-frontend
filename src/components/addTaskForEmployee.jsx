import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';


const CreateTask = ({ idZaposlenika }) => {

  const [modal, setModal] = useState(false);
  const [datum, setDatum] = useState('');
  const [poruka, setPoruka] = useState('');
  const [posluzitelj, setPosluzitelj] = useState('');

  const handleClose = () => setModal(false);
  const handleOpen = () => setModal(true);

  const handleDateInput = (e) => {
    setDatum(e.target.value);
  }
  
  const handlePorukaInput = (e) => {
    setPoruka(e.target.value);
    console.log(poruka);
  }
  
  const handlePosluziteljInput = (e) => {
    setPosluzitelj(e.target.value);
  }


  const saveTask = () => {
    const data = {
      datum: datum,
      poruka: poruka,
      posluzitelj: posluzitelj,
      zaposlenik: idZaposlenika,
    };
    console.log('Podaci koji se šalju na backend:', data);

    axios.post('/zaposlenici/kreiraj', data)
      .then((response) => {
        console.log(response)
        toast.success(`Zadatak na održavanju kreiran`);

      })
  }


  return(
    <>
    <ToastContainer></ToastContainer>
    <Button onClick={handleOpen}
    >Dodjeli mu zadatak</Button>
    <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Zadatak za zaposlenika sa ID-em {idZaposlenika} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Za datum</Form.Label>
              <Form.Control
                type="email"
                placeholder="Unesi datum za odrzavanje"
                autoFocus
                value={datum}
                onChange={handleDateInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Na poslužitelju</Form.Label>
              <Form.Control
                type="email"
                placeholder="Unesi ID poslužitelja"
                autoFocus
                value={posluzitelj}
                onChange={handlePosluziteljInput}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Opis posla</Form.Label>
              <Form.Control as="textarea" rows={3} value={poruka} onChange={handlePorukaInput} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Zatvori
          </Button>
          <Button variant="primary" onClick={() => {
            handleClose()
            saveTask()
          }}>Spremi zadatak
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreateTask;