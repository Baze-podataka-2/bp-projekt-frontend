import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';



const Servers = () => {

  const [input, setInput] = useState('');
  const [server, setServer] = useState([]);


  const fetchServer = async () => {
    try {
      const response = await axios.get(`posluzitelji/${input}`);
      setServer(response.data);
      console.log(input);
      console.log(server);
      
    } catch (error) {
      if(error) {
        throw error;
      }
      
    }
  }


  function BasicExample() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{server.kategorija || 'Nema niceg'}</Card.Title>
          <Card.Text>
          {server.kategorija || 'Nema niceg'}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }

 return(
    <>
    <Container>Serveri</Container>
    <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    />
    <Button onClick={fetchServer}>Dohvati</Button>
    <Container>
      <BasicExample></BasicExample>
    </Container>
    </>
  )
}

export default Servers;