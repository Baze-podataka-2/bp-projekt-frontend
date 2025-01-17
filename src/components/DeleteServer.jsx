import React from 'react'
import axios from "axios"
import { Modal, Button, Container } from "react-bootstrap"
import { useParams } from "react-router-dom";
const DeleteServer = ({ show, onHide, id}) => {
    const hideModal = () => {
        onHide();
      };

const handleDelete =()=>{
  axios.delete("http://localhost:8080/posluzitelji/" +  id)
  .then(()=>{
    hideModal();
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
                  Potvrda brisanja servera iz baze
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Jeste li sigurni da zelite izbrisati ovaj server</h4>
              </Modal.Body>
              <Modal.Footer>
                <Button  onClick={handleDelete}>Izbriši</Button>
              </Modal.Footer>
            </Modal>
  )
}

export default DeleteServer