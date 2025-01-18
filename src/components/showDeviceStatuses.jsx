import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

const ShowStatuses = () => {
  const [posluziteljStatus, setPosluziteljStatus] = useState([]);
  const [rackStatus, setRackStatus] = useState([]);

  useEffect(() => {
    axios.get('/status/posluzitelj')
    .then((response) => {
      setPosluziteljStatus(response.data);
    })
  }, [])


  useEffect(() => {
    axios.get('/status/rack')
    .then((response) => {
      setRackStatus(response.data);
    })
  }, [])



  return(
    <>
    <Accordion className="mt-5" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Statusi poslužitelja</Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID poslužitelja</th>
          <th>procesor_status</th>
          <th>ram_status</th>
          <th>ssd_status</th>
          <th>temperatura_status</th>
          <th>vrijeme_statusa</th>
        </tr>
      </thead>
      <tbody>
       {posluziteljStatus.map((item) => (
          <tr key={item.idj}>
            <td>{item.id_posluzitelj}</td>
            <td>{item.procesor_status}</td>
            <td>{item.ram_status}</td>
            <td>{item.ssd_status}</td>
            <td>{item.temperatura_status}</td>
            <td>{item.vrijeme_statusa}</td>
            </tr>
        ))}
        </tbody>
    </Table>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
    <Accordion className="mt-5" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Statusi rackova</Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID racka</th>
          <th>temperatura_status</th>
          <th>popunjenost_status</th>
          <th>pdu_status</th>
          <th>ups_status</th>
          <th>bandwith_status_switch</th>
          <th>interface_status_router</th>
          <th>vrijeme_statusa</th>
        </tr>
      </thead>
      <tbody>
       {rackStatus.map((item) => (
          <tr key={item.id_}>
            <td>{item.id_rack}</td>
            <td>{item.temperatura_status}</td>
            <td>{item.popunjenost_status}</td>
            <td>{item.pdu_status}</td>
            <td>{item.ups_status}</td>
            <td>{item.bandwith_status_switch}</td>
            <td>{item.interface_status_router}</td>
            <td>{item.vrijeme_statusa}</td>
            </tr>
        ))}
        </tbody>
    </Table>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
     
    </>
  )
}

export default ShowStatuses

