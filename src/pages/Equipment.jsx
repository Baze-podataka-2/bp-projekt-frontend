import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, InputGroup } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import GetSingleEquipment from "../components/getSingleEquipment";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Equipments = () => {

  const [oprema, setOprema] = useState([]);
  const [popularnaOprema, setPopularnaOprema] = useState({});


  useEffect(() => {
    axios.get('/oprema')
    .then((response) => {
      setOprema(response.data)
    });
  }, [])


  const fetchPopularnaOprema = () => {
    axios.get('/oprema/popularna')
      .then((response) => {
        setPopularnaOprema(response.data);
      })
  }


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
    <Row>
        <Col><GetSingleEquipment></GetSingleEquipment></Col>
        <Col><h2 className="mt-4">Prikaži najpopularniju opremu</h2>
        <InputGroup size="lg" className="mb-3 mt-4">
          <Button onClick={fetchPopularnaOprema}>Prikaži</Button>
        </InputGroup>
        {
          popularnaOprema[0] && popularnaOprema[0].id && (
            <div>
              <Card style={{ width: '18rem' }} className="mt-3">
        <Card.Img variant="top" src="https://engineering.fb.com/wp-content/uploads/2018/05/data-center-shot.jpg" />
        <Card.Body>
        <Card.Title><strong>ID opreme: </strong> {popularnaOprema[0].id}</Card.Title>
          <Card.Text>
            <strong>Naziv opreme: </strong> {popularnaOprema[0].naziv_opreme} <br/>
            <strong>Broj njezinog korištenja: </strong> {popularnaOprema[0].broj_koristenja} <br/>
          </Card.Text>
        </Card.Body>
      </Card>
            </div>
          )
        }</Col>
      </Row>
    </Container>
    </>
  )
}


export default Equipments