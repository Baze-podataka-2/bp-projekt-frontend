import React from "react";
import { Container } from "react-bootstrap";
import ConfigurationForm from "../components/createConfigurationForm";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

const Configuration = () => {
  const [konfiguracije, setKonfiguracije] = useState([]);

  useEffect(() => {
    axios.get('/konfiguracija')
      .then((response) => {
        setKonfiguracije(response.data);
      }, [])
  })
  return(
    <>
    <h1 className="mt-3">Konfiguracija</h1>
     <Container>
        <ConfigurationForm></ConfigurationForm>
    <h4 className="mt-5">Popis svih konfiguracija</h4>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Konfiguracijski set</th>
          <th>Grafička kartica</th>
          <th>Procesor</th>
          <th>SSD</th>
          <th>RAM</th>
          <th>IP adresa</th>
          <th>Dimenzije</th>
          <th>PDU</th>
          <th>Patchpanel</th>
          <th>Rack rails</th>
          <th>UPS</th>
          <th>Hladenje</th>
          <th>Switch</th>
          <th>Router</th>
        </tr>
      </thead>
      <tbody>
       {konfiguracije.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.graficka_kartica}</td>
            <td>{item.procesor}</td>
            <td>{item.SSD}</td>
            <td>{item.ram}</td>
            <td>{item.IP_adresa}</td>
            <td>{item.dimenzije}</td>
            <td>{item.PDU}</td>
            <td>{item.patchpanel}</td>
            <td>{item.rack_rails}</td>
            <td>{item.UPS}</td>
            <td>{item.hladenje}</td>
            <td>{item.switch}</td>
            <td>{item.router}</td>
            </tr>
        ))}
        </tbody>
    </Table>
     </Container>
    </>
  )
}

export default Configuration