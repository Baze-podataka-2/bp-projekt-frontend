import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import GetSingleEquipment from "../components/getSingleEquipment";

const Equipments = () => {

  const [oprema, setOprema] = useState([]);

  useEffect(() => {
    axios.get('/oprema')
    .then((response) => {
      setOprema(response.data)
    });
  }, [])



  return(
    <>
    <h1 className="mt-3">Oprema</h1>
    <Container>
    <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Popis opreme</Accordion.Header>
          <Accordion.Body>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Vrsta</th>
          <th>Specifikacije</th>
          <th>Stanje na zalihama</th>
        </tr>
      </thead>
      <tbody>
        {
          oprema.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.vrsta}</td>
              <td>{item.specifikacije}</td>
              <td>{item.stanje_na_zalihama}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
    {oprema.length === 0 && <p>Podaci nedostupni</p>}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
    <Container>
      <GetSingleEquipment></GetSingleEquipment>
    </Container>
    </>
  )
}


export default Equipments