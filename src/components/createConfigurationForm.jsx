import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConfigurationForm = () => {
  const [device, setDevice] = useState('');
  const [grafickaKartica, setGrafickaKartica] = useState('');
  const [procesor, setProcesor] = useState('');
  const [sdd, setSsd] = useState('');
  const [ram, setRam] = useState('');
  const [ip_adresa, setIpAdresa] = useState('');
  const [dimenzije, setDimenzije] = useState('');
  const [pdu, setPdu] = useState('');
  const [patchpanel, setPatchpanel] = useState('');
  const [rackrails, setRackrails] = useState('');
  const [ups, setUps] = useState('');
  const [hladenje, setHladenje] = useState('');
  const [preklopnik, setPreklopink] = useState('');
  const [router, setRouter] = useState('');

  const handleInput = (e) => {
    setDevice(e.target.value);
    console.log(device)
  }

  const createConfigurationSet = () => {
    const data = {
      graficka_kartica: grafickaKartica || null,
      procesor: procesor || null,
      SSD: sdd || null,
      ram: ram || null,
      IP_adresa: ip_adresa || null,
      dimenzije: dimenzije || null,
      PDU: pdu || null,
      patchpanel: patchpanel || null,
      rack_rails: rackrails || null,
      UPS: ups || null,
      hladenje: hladenje || null,
      switch: preklopnik || null,
      router: router || null

    }
    axios.post('/konfiguracija/kreiraj-konfiguraciju', data)
      .then((response) => {
        console.log(response)
        toast.success(`Konfiguracija uspješno kreirana`);
        setDevice('');
        setGrafickaKartica('');
        setProcesor('');
        setSsd('');
        setRam('');
        setIpAdresa('');
        setDimenzije('');
        setPdu('');
        setPatchpanel('');
        setRackrails('');
        setUps('');
        setHladenje('');
        setPreklopink('');
        setRouter('');
      })
  }
  return(
    <>
    <ToastContainer/>
    <Container className="border rounded-3 shadow-lg py-5">
    <Form>
      <Form.Group className="mb-3" controlId="formSelectDevice">
        <Form.Select value={device} onChange={handleInput} aria-label="Default select example">
          <option>Odaberite uredaj</option>
          <option value="1">Poslužitelj</option>
          <option value="2">Standardni rack</option>
          <option value="3">Mrežni rack</option>
        </Form.Select>
      </Form.Group>
      <h4 className="mt-4 mb-3">Kreiraj konfiguracijski set</h4>
      <Container className="px-0">
      {
        device === "1" && (
          <div>
          <h5>Radite konfiguraciju za poslužitelja</h5>
            <div className="d-flex flex-row bd-hihlight mt-3 mb-3 justify-content-between">
              <input
              onChange={(e) => {
                setGrafickaKartica(e.target.value)
              }}
              placeholder="Grafička kartica"
              ></input>
              <input
              onChange={(e) => {
                setProcesor(e.target.value)
              }}
              placeholder="Procesor"
              ></input>
              <input
              onChange={(e) => {
                  setSsd(e.target.value)
                }}
              placeholder="SSD"></input>
              <input
              onChange={(e) => {
                setRam(e.target.value)
              }}
              placeholder="RAM"></input>
              <input
              onChange={(e) => {
                setIpAdresa(e.target.value)
                console.log(ip_adresa)
              }}
              placeholder="IP adresa"></input>
            </div>
          </div>
        )
      }
      </Container>
      <Container className="px-0">
      {
        device === "2" && (
          <div>
          <h5>Radite konfiguraciju za standardni rack</h5>
            <div className="d-flex flex-row bd-hihlight mt-3 mb-3 justify-content-between">
              <input
              onChange={(e) => {
                setDimenzije(e.target.value)
              }}
              placeholder="Dimenzije"
              ></input>
              <input
              onChange={(e) => {
                setPdu(e.target.value)
              }}
              placeholder="Pdu"
              ></input>
              <input
              onChange={(e) => {
                  setPatchpanel(e.target.value)
                }}
              placeholder="Patchpanel"></input>
              <input
              onChange={(e) => {
                setRackrails(e.target.value)
              }}
              placeholder="Rackrails"></input>
              <input
              onChange={(e) => {
                setUps(e.target.value)
              }}
              placeholder="Ups"></input>
              <input
              onChange={(e) => {
                setHladenje(e.target.value)
              }}
              placeholder="Hladenje"></input>
            </div>
          </div>
        )
      }
      </Container>
      <Container className="px-0">
      {
        device === "3" && (
          <div>
          <h5>Radite konfiguraciju za mrežni rack</h5>
            <div className="d-flex flex-row bd-hihlight mt-3 mb-3 justify-content-between flex-wrap">
              <input
              onChange={(e) => {
                setDimenzije(e.target.value)
              }}
              placeholder="Dimenzije"
              ></input>
              <input
              onChange={(e) => {
                setPdu(e.target.value)
              }}
              placeholder="Pdu"
              ></input>
              <input
              onChange={(e) => {
                  setPatchpanel(e.target.value)
                }}
              placeholder="Patchpanel"></input>
              <input
              onChange={(e) => {
                setRackrails(e.target.value)
              }}
              placeholder="Rackrails"></input>
               <input
              onChange={(e) => {
                setUps(e.target.value)
              }}
              placeholder="Ups"></input>
              <input
              onChange={(e) => {
                setHladenje(e.target.value)
              }}
              placeholder="Hladenje"></input>
              <input className="mt-3 d-inline"
              onChange={(e) => {
                setPreklopink(e.target.value)
              }}
              placeholder="Switch"></input>
            </div>         
            <input className="mt-3 d-inline"
              onChange={(e) => {
                setRouter(e.target.value)
              }}
              placeholder="Router"></input>
          </div>
        )
      }
      </Container>
      <Button className="mt-4" variant="primary" type="button"
      onClick={((e) => {
        e.preventDefault();
        createConfigurationSet();
      })}
      >
        Kreiraj
      </Button>
    </Form>
    </Container>
    </>
  )

}



export default ConfigurationForm