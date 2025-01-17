import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import { BiTrash, BiEdit, BiBookOpen, BiPlus} from "react-icons/bi";
import { Link } from "react-router-dom"
import DeleteService from "./DeleteService";
import CreateService from "./CreateService";
const Services = () => {

  const [usluge, setUsluge] = useState([]);

  // To open delete service modal
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const handleCloseModal = () => setShowModal(false);

  const handleOpenModal = (id) => {
    setSelectedId(id); 
    setShowModal(true); 
  };

  // For opening "new service" modal
  const [showSModal, setShowSModal] = useState(false);
  const handleCloseSModal = () => setShowSModal(false);
  const handleOpenSModal = ()=> setShowSModal(true)

  useEffect(() => {

    axios.get('/usluge')
      .then((response) => {
        setUsluge(response.data)
        console.log(response.data)
      })

  }, [])


  function BasicExample() {
    return (
      <>
        <Container>
          {showModal && <DeleteService show={showModal} onHide={handleCloseModal} id={selectedId} />}
        </Container>
        <Container>
          {showSModal && <CreateService show={showModal} onHide={handleCloseSModal}/>}
        </Container>
        <Container className="text-end">
        <Button onClick={handleOpenSModal}><BiPlus />Dodaj</Button>
      </Container>
        <Accordion defaultActiveKey="0" >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Popis usluga</Accordion.Header>
            <Accordion.Body>
              <ul>
                {usluge.map((item) =>
                  <Row key={item.id_usluga} className="border border-secondary rounded shadow-sm py-2 my-2" >
                    <Col md={9}>
                      Vrsta usluge - {item.vrsta} - Cijena usluge - {item.cijena}
                    </Col>
                    <Col md={3}>
                   
                      <BiTrash onClick={() => handleOpenModal(item.id_usluga)}  style={{ fontSize: "20px", color: "red", marginRight: "10px", cursor: "pointer"}} />
                     
                      <Link to={`/usluge/${item.id_usluga}`} style={{ pointerEvents: "auto" }}>
                        <BiBookOpen style={{ fontSize: "20px", color: "black" }} />
                      </Link>
                    </Col>
                  </Row>
                )}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>
    );
  }

  return (
    <>
      <h1 className="mt-3">Usluge</h1>
      <Container className="px-0 mt-3">
        <BasicExample></BasicExample>
      </Container>
    </>
  )
}

export default Services