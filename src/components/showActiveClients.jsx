import React from "react";
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';


const ActiveClients = () => {
  const [activeClients, setActiveClients] = useState([]);

  const dohvatiAktivne = () => {
    axios.get('/klijenti/aktivni')
      .then((response) => {
        setActiveClients(response.data);
      })
  }
 
  
  return(<>

  <Button
  onClick={dohvatiAktivne}
  >Prikaži aktivne klijente</Button>

  {
    activeClients.length > 0 && (
      <Table className="mt-3"striped bordered hover>
      <thead>
        <tr>
          <th>Ime</th>
          <th>Prezime</th>
          <th>ID klijenta</th>
          <th>Pocetak usluge</th>
          <th>Kraj usluge</th>
          <th>ID usluge</th>
          <th>Vrsta usluge</th>
        </tr>
      </thead>
      <tbody>
        {
          activeClients.map((item, index) => (
            <tr key={index}>
              <td>{item.ime}</td>
              <td>{item.prezime}</td>
              <td>{item.id_klijent}</td>
              <td>{item.pocetak_usluge}</td>
              <td>{item.kraj_usluge}</td>
              <td>{item.id_usluga}</td>
              <td>{item.vrsta}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
    )
  }

  </>)
}

export default ActiveClients