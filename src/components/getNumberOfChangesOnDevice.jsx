import React from 'react';
import { useState, useEffect } from 'react';
import 'axios';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListGroup from 'react-bootstrap/ListGroup';




const GetChanges = () => {
  const [izmjene, setIzmjene] = useState({});
  const [uredaj, setUredaj] = useState('');
  const [id_uredjaja, setIdUredjaja] = useState('');


  const handlerForUredaj = (e) => {
    setUredaj(e.target.value)
  }
  const handlerForId = (e) => {
    setIdUredjaja(e.target.value)
  }

  const fetchChangesOnDevice = () => {
    axios.get(`/konfiguracija/izmjene/${uredaj}/${id_uredjaja}`)
      .then((response) => {
        setIzmjene(response.data);
      })
  }


  return(
    <>
    
    <h4 className='mt-4'>Prikaži broj izmjena na pojedinom uredaju</h4>
    <input

    placeholder='Vrsta uredaja'
    onChange={handlerForUredaj}
    >
    </input>
    <input
    className='ms-4'
    placeholder='Njegov id'
    onChange={handlerForId}
    >
    </input>
    <Button 
    className='ms-4'
    onClick={fetchChangesOnDevice}
    variant="primary">Dohvati</Button>
    {
          izmjene && (
            <>
              <ListGroup className="mt-4 mb-3">
                <ListGroup.Item>Broj izmjena: {izmjene.rezultat}</ListGroup.Item>
              </ListGroup>
            </>
          )
        }
    </>
  )


}


export default GetChanges;