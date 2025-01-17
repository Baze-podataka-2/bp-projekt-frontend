import React, { useState, useEffect } from "react";
import axios from "axios"
import { Container, Button, Row, Col } from "react-bootstrap";
import { BiTrash, BiEdit, BiBookOpen, BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import DeleteIncident from "../components/DeleteIncident"

const Incidents = () => {

  const [incidents, setIncidents] = useState(null)
  const [showDModal, setShowDModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const handleCloseDModal = () => setShowDModal(false);
  const handleOpenDModal = (id) => {
    setSelectedId(id); 
    setShowDModal(true); 
  };

  useEffect(() => {

    axios.get("/incidenti")
      .then((response) => {
        setIncidents(response.data)
      })

      .catch((error) => {
        console.log(error.message)
      })

  }, [])

  return (
    <Container>

      <Container>
        {showDModal && <DeleteIncident show={showDModal} onHide={handleCloseDModal} id={selectedId} />}
      </Container>
   
    <h1>Incidenti</h1>
    <Container className="text-end">
      <Button><BiPlus />Dodaj</Button>
    </Container>

    {incidents && incidents.length > 0 ? (
      incidents.map((incident) => (

        <Row key={incident.id_incidenta} className="border border-secondary rounded shadow-sm py-2 my-2" >
          <Col md={8}>
            Datum- {incident.datum} - Opis - {incident.opis} - Stauts . {incident.status}
          </Col>
          <Col md={4}>

           
             <BiTrash onClick={() => handleOpenDModal(incident.id_incidenta)}  style={{ fontSize: "20px", color: "red", marginRight: "10px", cursor: "pointer"}} />
            <BiEdit style={{ fontSize: "20px", color: "black", marginRight: "10px" }} />
            <Link to={`/serveri/${incident.id_incidenta}`} style={{ pointerEvents: "auto" }}>
              <BiBookOpen style={{ fontSize: "20px", color: "black" }} />
            </Link>
          </Col>
        </Row>
      ))

    ) : (

      <Container className="text-danger">Nema incidenta za prikazati</Container>
   
   )}


  </Container>
  
  )
}

export default Incidents