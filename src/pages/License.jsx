import React from 'react';
import { useState } from 'react';
import 'axios';
import { Container, Form, InputGroup, Button  } from 'react-bootstrap';
import axios from 'axios';


const ShowLicense = () => {
  const [licenca, setLicenca] = useState({});


  const fetchLicencaStatus = () => {
    axios.get(`/licence/aktivnost/${licenca}`)
    .then((response) => {
      console.log(response.data)
      setLicenca(response.data)
    })
  };


  const handleLicenca = (e) => {
    setLicenca(e.target.value)
  }



  return(
  <>
    <Container>
      <h1 className='mt-3'>Saznaj status licence</h1>
      <InputGroup size="lg" className="mb-3 mt-4">
        <Form.Control
          onChange={handleLicenca}
          placeholder="Unesite ID licence"
        />
        <Button onClick={fetchLicencaStatus}>Dohvati</Button>
      </InputGroup>
      {licenca.poruka && (
        <h2>{licenca.poruka}</h2>
      )}
    </Container>
  </>
  
)
 
}


export default ShowLicense;