import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import axios from "axios";
import { BiTrash, BiEdit, BiBookOpen, BiPlus } from "react-icons/bi";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"
import CreateServer from "./CreateServer";

const Servers = () => {

  const [input, setInput] = useState("");
  const [server, setServer] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleOpenModal = () => setShowModal(true);

  useEffect(() => {
    axios.get("/posluzitelji")
      .then((response) => {
        setServer(response.data)
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  return (

    <Container>
      <Container>
        {showModal && <CreateServer show={showModal} onHide={handleCloseModal} />}
      </Container>
      <h1>Serveri</h1>
      <Container className="text-end">
        <Button onClick={handleOpenModal}><BiPlus />Dodaj</Button>
      </Container>

      {server && server.length > 0 ? (
        server.map((srv) => (

          <Row key={srv.id_posluzitelj} className="border border-secondary rounded shadow-sm py-2 my-2" >
            <Col md={8}>
              Kategorija- {srv.kategorija} - rack - {srv.id_rack}
            </Col>
            <Col md={4}>

              <BiTrash style={{ fontSize: "20px", color: "red", marginRight: "10px", cursor: "pointer" }} />

              <BiEdit style={{ fontSize: "20px", color: "black", marginRight: "10px" }} />
              <Link to={`/serveri/${srv.id_posluzitelj}`} style={{ pointerEvents: "auto" }}>
                <BiBookOpen style={{ fontSize: "20px", color: "black" }} />
              </Link>
            </Col>
          </Row>




        ))
      ) : (
        <Container className="text-danger">Nema servera za prikazati</Container>
      )}


    </Container>

  )
}

export default Servers;