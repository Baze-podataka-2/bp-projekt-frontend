import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import axios from "axios";
import { BiTrash, BiEdit, BiBookOpen, BiPlus } from "react-icons/bi";
import { Row, Col, InputGroup, Badge } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom"
import CreateServer from "./CreateServer";
import serverPicture from "../images/singleServer.webp"
import { ToastContainer, toast } from 'react-toastify';
import DeleteServer from "../components/DeleteServer";
const Servers = () => {

  const [input, setInput] = useState("");
  const [singleServer, setSingleServer] = useState({})
  const [showDModal, setShowDModal] = useState(false);
  const [server, setServer] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);
 const [selectedId, setSelectedId] = useState(null);
  const handleCloseDModal = () => setShowDModal(false);
  const handleOpenDModal = (id) => {
    setSelectedId(id); 
    setShowDModal(true); 
  };

  const getSingleServer = () => {

      if (!input) {
          toast.warning("Molimo da unesete ID servera");
          return;
        }

    axios.get("/posluzitelji/" + input)
      .then((response) => {
        setSingleServer(response.data)
        toast.success("Poslužitelj uspješno dohvaćen")
      })
      .catch((error) => {
        console.log(error)
        toast.error("Dogodila se greška pri dohvacanju poslužitelja")
      })

  }

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

      <Container>
        {showDModal && <DeleteServer show={showDModal} onHide={handleCloseDModal} id={selectedId} />}
      </Container>
      
      <h1>Serveri</h1>

      <InputGroup size="lg" className="mb-3 mt-4">
        <Form.Control
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Unesite ID servera"
          required
        />
        <Button onClick={getSingleServer}>Dohvati</Button>
      </InputGroup>

      {singleServer[0] && (
        <Container className="w-100 align-items-center d-flex justify-content-center">
          <Card style={{ width: '18rem' }} className="mx-0 ">
            <Card.Img variant="top" src={serverPicture} />
            <Card.Body>
              <Card.Title><Badge bg="primary" className="me-5">{singleServer[0].id_posluzitelj}</Badge> {singleServer[0].naziv}</Card.Title>
              <Card.Text>
                <p>Kategorija: {singleServer[0].kategorija}</p>
                <p>Rack: {singleServer[0].id_rack}</p>
              </Card.Text>

            </Card.Body>
          </Card>
        </Container>
      )}

      <Container className="text-end">
        <Button onClick={handleOpenModal}><BiPlus />Dodaj</Button>
      </Container>
      <ToastContainer/>
      {server && server.length > 0 ? (
        server.map((srv) => (

          <Row key={srv.id_posluzitelj} className="border border-secondary rounded shadow-sm py-2 my-2" >
            <Col md={9}>
              ID: {srv.id_posluzitelj} Kategorija- {srv.kategorija} - rack - {srv.id_rack}
            </Col>
            <Col md={3}>

              <BiTrash  onClick={() => handleOpenDModal(srv.id_posluzitelj)} style={{ fontSize: "20px", color: "red", marginRight: "10px", cursor: "pointer" }} />

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