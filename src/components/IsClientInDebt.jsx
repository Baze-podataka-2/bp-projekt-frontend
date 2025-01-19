import React from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';





const ClientDebtStatus = () => {
  const [klijentDebt, setKlijentDebt] = useState({})
  const [id_klijent, setKlijent] = useState('');


  const handleKlijent = (e) => {
    setKlijent(e.target.value);
  }


  const fetchaStatusDugaKlijenta = () => {
    axios.get(`/klijenti/dugovanje`, {
      params: { id_klijent: id_klijent }
    })
    .then((response) => {
      console.log(response.data);
      setKlijentDebt(response.data);
    })
    .catch((error) => {
      console.error('Došlo je do pogreške prilikom dohvaćanja podataka:', error);
    });
  };
  




  return(
    <>
    <h4 className="mt-4">Saznaje da li je klijent u dugovanju</h4>
    <InputGroup size="lg" className="mb-3 mt-4">
        <Form.Control
          value={id_klijent}
          onChange={handleKlijent}
          placeholder="Unesite ID klijenta"
        />
        <Button onClick={fetchaStatusDugaKlijenta}>Dohvati</Button>
      </InputGroup>
      {
        klijentDebt.poruka && (
          <>
          <h2>{klijentDebt.poruka}</h2>
          </>
        )
      }
    </>
  )
}

export default ClientDebtStatus