import React, { useState } from "react";
import { Container, Card, Button, Form, InputGroup } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const GetSingleEquipment = () => {
  const [singleOprema, setSingleOprema] = useState({});
  const [input, setInput] = useState('');

  const fetchSingleEquipment = () => {
    if (!input) {
      toast.error("Molimo unesite ID opreme!");
      return;
    }
    axios.get(`/oprema/${input}`)
      .then((response) => {
        console.log(response.data)
        setSingleOprema(response.data);

        toast.success(`Oprema sa ID-em ${input} uspješno dohvaćena`);
        setInput('');
      })
      .catch((error) => {
        toast.error("Greška pri dohvaćanju podataka.", error);
      });
  };

  return (
    <>
      <ToastContainer />
      <h2 className="mt-4">Dohvati pojedinačnu opremu</h2>
      <InputGroup size="lg" className="mb-3 mt-4">
        <Form.Control
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Unesite ID opreme"
        />
        <Button onClick={fetchSingleEquipment}>Dohvati</Button>
      </InputGroup>

      {singleOprema[0] && (
        <Card style={{ width: '18rem' }} className="mt-3">
          <Card.Img variant="top" src={singleOprema.slika || "https://engineering.fb.com/wp-content/uploads/2018/05/data-center-shot.jpg"} />
          <Card.Body>
            <Card.Title>{singleOprema[0].vrsta}</Card.Title>
            <Card.Text>
              Podaci o opremi: {singleOprema[0].specifikacije}
              <br />
              Stanje na zalihama: {singleOprema[0].stanje_na_zalihama}
            </Card.Text>
            <Button variant="primary">Akcije</Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default GetSingleEquipment;
