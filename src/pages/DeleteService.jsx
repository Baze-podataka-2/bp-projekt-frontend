import React from "react";
import axios from "axios"
import { Modal, Button, Container } from "react-bootstrap"
import { useParams } from "react-router-dom";

const DeleteService = ({ show, onHide, id}) => {

    const hideModal = () => {
        onHide();
      };

const handleDelete =()=>{
  axios.delete("http://localhost:8080/usluge/" +  id)
  .then(()=>{
    hideModal();
    console.log(id)
})
  .catch((err)=>{console.log(err)})
}


  return (
    <Modal
      size="lg"
      show={true}
      onHide={hideModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Potvrda brisanja usluge
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Jeste li sigurni da zelite izbrisati ovu uslugu?</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button  onClick={handleDelete}>Izbriši</Button>
        
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteService