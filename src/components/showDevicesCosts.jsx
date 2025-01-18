import React from "react";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';


const ShowCosts = () => {
  const[potrosnja, setPotrosnja] = useState([]);
  const[potrosnjaDoSada, setPotrosnjaDoSada] = useState({});
  const[potrosnjaMjeseci, setPotrosnjaMjeseci] = useState([]);
  const[potrosnjaMjesec, setPotrosnjaMjesec] = useState({});


  useEffect(() => {
    axios.get('/potrosnja')
      .then((response) => {
        setPotrosnja(response.data);
      })
  }, [])

  const fetchPotrosnjaDoSada = () => {
    axios.get('/potrosnja/trenutno')
      .then((response) => {
        setPotrosnjaDoSada(response.data);
      })
  }

  const fetchZaSveMjesece = () => {
    axios.get('/potrosnja/mjeseci')
      .then((response) => {
        setPotrosnjaMjeseci(response.data)
        setPotrosnjaMjesec([]);
        
      })  
       
  }

  const fetchZaMjesec = () => {
    axios.get('/potrosnja/mjesec')
      .then((response) => {
        setPotrosnjaMjesec(response.data)
      })
  }


  return(
    <>
      <Container>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Dnevni troškovi</Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>potorsnja_kw</th>
          <th>datum</th>
        </tr>
      </thead>
      <tbody>
       {potrosnja.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.potrosnja_kw}</td>
            <td>{item.datum}</td>
            </tr>
        ))}
        </tbody>
    </Table>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <h4 className="mt-5">Dohvati generiranu potrošnju u danu do sada</h4>
      <Button
        onClick={fetchPotrosnjaDoSada}
       variant="primary">Saznaj i zabilježi</Button>
       {
        potrosnjaDoSada && potrosnjaDoSada.trosakDoSada &&  (
          <>

          <Card className="mt-3" border="primary" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Trošak za {potrosnjaDoSada.dan}.{potrosnjaDoSada.mjesec}</Card.Title>
          <Card.Text>
            Iznosi <br/>
            <strong>{potrosnjaDoSada.trosakDoSada} kW</strong>
          </Card.Text>
        </Card.Body>
      </Card>
      </>
        )
       }
       <h4 className="mt-5">Pregledaj ukupne troškove po mjesecima</h4>
       <Button
       className=""
        onClick={fetchZaSveMjesece}
       variant="primary">Izlistaj za sve mjesece</Button>
       {
        potrosnjaMjeseci.length > 0 && (
          <>
    <Table className="mt-3" striped bordered hover>
        <thead>
          <tr>
            <th>mjesec</th>
            <th>godina</th>
            <th>ukupno</th>
          </tr>
        </thead>
        <tbody>
        {potrosnjaMjeseci.map((item, index) => (
            <tr key={index}>
              <td>{item.mjesec}</td>
              <td>{item.godina}</td>
              <td>{item.ukupna_potrosnja}</td>
              </tr>
          ))}
          </tbody>
    </Table>
          </>
        )
       }
      </Container>
    </>
  )
}

export default ShowCosts;