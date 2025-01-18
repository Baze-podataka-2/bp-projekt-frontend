import React from 'react';
import { useState, useEffect } from 'react';
import 'axios';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CreateStatus = () => {
  const [device, setDevice] = useState('');
  const [posluzitelj, setPosluzitelj] = useState('');
  const [procesor, setProcesor] = useState('');
  const [ram, setRam] = useState('');
  const [ssd, setSsd] = useState('');
  const [temperatura, setTemperatura] = useState('');
  const [rack, setRack] = useState('');
  const [rackTemperatura, setRackTemperatura] = useState('');
  const [popunjenost, setPopunjenost] = useState('');
  const [pdu, setPdu] = useState('');
  const [ups, setUps] = useState('');
  const [bandwith, setBandwith] = useState('');
  const [interfaceRouter, setRouter] = useState('');

  const handleOption = (e) => {
    setDevice(e.target.value);
  }

  const insertStatusPosluzitelj = () => {
    const data = {
      id_posluzitelj: posluzitelj,
      procesor_status: procesor,
      ram_status: ram,
      ssd_status: ssd,
      temperatura_status: temperatura
    }

    axios.post('/status/dodaj/posluzitelj', data)
      .then((response) => {
        console.log(response)
        toast.success(`Status za poslužitelja sa IDem ${posluzitelj} zabilježen`)
      })
      setDevice('');
      setPosluzitelj('');
      setProcesor('');
      setRam('');
      setSsd('');
      setTemperatura('');
  }
  const insertStatusRack = () => {
    const data = {
      id_rack: rack,
      temperatura_status: rackTemperatura,
      popunjenost_status: popunjenost,
      pdu_status: pdu,
      ups_status: ups,
      bandwith_status_switch: bandwith || undefined,
      interface_status_router: interfaceRouter || undefined,
    }

    axios.post('/status/dodaj/rack', data)
      .then((response) => {
        console.log(response)
        toast.success(`Status za rack sa IDem ${rack} zabilježen`)
      })
      setDevice('');
      setRack('');
      setPdu('');
      setUps('');
      setBandwith('');
      setRouter('');
  }

  return(
    <>
    <ToastContainer/>
    <Container className='border rounded-3 shadow-lg py-5'>
    <Form>
      <Form.Group className="mb-3" controlId="formSelectDevice">
        <Form.Select value={device} onChange={handleOption} aria-label="Default select example">
          <option>Odaberite uređaj</option>
          <option value="poslužitelja">Poslužitelj</option>
          <option value="standardni rack">Standardni rack</option>
          <option value="mrežni rack">Mrežni rack</option>
        </Form.Select>
      </Form.Group>
      </Form>
      <h4>Zabilježi status za {device} </h4>
        <Container className="px-0">
              {
                device === "poslužitelja" && (
                  <div>
                    <div className="d-flex flex-row bd-hihlight mt-3 mb-3 justify-content-between">
                      <input
                      onChange={(e) => setPosluzitelj(e.target.value)}
                      placeholder="ID poslužitelja"
                      ></input>
                      <input
                      onChange={(e) => setProcesor(e.target.value)}
                      placeholder="Procesor status"
                      ></input>
                      <input
                      onChange={(e) => setRam(e.target.value)}
                      placeholder="RAM status"></input>
                      <input
                      onChange={(e) => setSsd(e.target.value)}
                      placeholder="SSD status"></input>
                      <input
                      onChange={(e) => setTemperatura(e.target.value)}
                      placeholder="Temperatura status"></input>
                    </div>
                  </div>
                )
              }
              </Container>
        <Container className="px-0">
              {
                device === "standardni rack" && (
                  <div>
                    <div className="d-flex flex-row bd-hihlight mt-3 mb-3 justify-content-between">
                      <input
                      onChange={(e) => setRack(e.target.value)}
                      placeholder="ID racka"
                      ></input>
                      <input
                      onChange={(e) => setRackTemperatura(e.target.value)}
                      placeholder="Temperatura status"
                      ></input>
                      <input
                      onChange={(e) => setPopunjenost(e.target.value)}
                      placeholder="Popunjenost status"></input>
                      <input
                      onChange={(e) => setPdu(e.target.value)}
                      placeholder="PDU status"></input>
                      <input
                      onChange={(e) => setUps(e.target.value)}
                      placeholder="Ups status"></input>
                    </div>
                  </div>
                )
              }
              </Container>
        <Container className="px-0">
              {
                device === "mrežni rack" && (
                  <div>
                    <div className="d-flex flex-row bd-hihlight mt-3 mb-3 justify-content-between flex-wrap">
                      <input
                      onChange={(e) => setRack(e.target.value)}
                      placeholder="ID racka"
                      ></input>
                      <input
                      onChange={(e) => setRackTemperatura(e.target.value)}
                      placeholder="Temperatura status"
                      ></input>
                      <input
                      onChange={(e) => setPopunjenost(e.target.value)}
                      placeholder="Popunjenost status"></input>
                      <input
                      onChange={(e) => setPdu(e.target.value)}
                      placeholder="PDU status"></input>
                      <input
                      onChange={(e) => setUps(e.target.value)}
                      placeholder="Ups status"></input>
                      <input
                      onChange={(e) => setBandwith(e.target.value)}
                      placeholder="Bandwith status"></input>
                      <input
                      className='mt-3'
                      onChange={(e) => setRouter(e.target.value)}
                      placeholder="Router status"></input>
                    </div>
                  </div>
                )
              }
              </Container>
              <Button className="mt-4" variant="primary" type="button"
      onClick={((e) => {
        e.preventDefault();
        if(device === 'poslužitelja') {
          insertStatusPosluzitelj();
        }
        else if(device === 'standardni rack' || device === "mrežni rack") {
          insertStatusRack();
        }
        
      })}
      >
        Zabilježi
      </Button>
    </Container>
    </>
  )
}

export default CreateStatus;