import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';



const Servers = () => {

  const [input, setInput] = useState("");
  const [server, setServer] = useState([]);


  const fetchServer = async () => {
    try {
      const response = await axios.get(`/posluzitelji/${input}`);
      setServer(response.data[0]);
      console.log(input)
      console.log(response.data);
      console.log("radi se o serveru" + response.data[0].kategorija);
      
    } catch (error) {
      if(error) {
        throw error;
      }
      
    }
  }


  function ServerCard({ server }) {
    
    return (  
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{server.kategorija || 'Nema nista za prikazati'}</Card.Title>
          <Card.Text>
          {server.naziv || 'Nema nista za prikazati'}
          </Card.Text>
          <Button variant="primary">Vidi više</Button>
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
      <ServerCard server={server}/>
    </Container>
    </>
  )
}

export default Servers;