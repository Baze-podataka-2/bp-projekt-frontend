import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import CreateTask from "../components/addTaskForEmployee";

const Employees = () => {

  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    axios.get('/zaposlenici/broj-zadataka')
    .then((response) => {
      setEmployees(response.data)
    });
  }, []);


  const fetchEmployee = () => {
    axios.get('/zaposlenici/najmanje-zadataka')
      .then((response) => {
        setEmployee(response.data)
      })
  }
 


  return(
    <>
    <h1 className="mt-3">Zaposlenici</h1>
    <Container>
    <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Status zaposlenika</Accordion.Header>
          <Accordion.Body>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Ime</th>
          <th>Prezime</th>
          <th>Odjel</th>
          <th>Zanimanje</th>
          <th>Broj zadataka</th>
        </tr>
      </thead>
      <tbody>
        {
          employees.map((item) => (
            <tr key={item.id_zaposlenik}>
              <td>{item.id_zaposlenik}</td>
              <td>{item.ime}</td>
              <td>{item.prezime}</td>
              <td>{item.id_odjel}</td>
              <td>{item.zanimanje}</td>
              <td>{item.broj_zadataka}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
    {employees.length === 0 && <p>Podaci nedostupni</p>}
    <div>
    <h4>Zaposlenik sa najmanje zadataka</h4>
    <Button onClick={fetchEmployee}
    variant="outline-primary">Dohvati</Button>
    </div>
        {
          employee && employee.id && (
            <>
              <ListGroup className="mt-4 mb-3">
                <ListGroup.Item>ID zaposlenika: {employee.id}</ListGroup.Item>
                <ListGroup.Item>Ime: {employee.ime}</ListGroup.Item>
                <ListGroup.Item>Prezime: {employee.prezime}</ListGroup.Item>
                <ListGroup.Item>Broj zadataka: {employee.broj}</ListGroup.Item>
              </ListGroup>
              <CreateTask 
              idZaposlenika={employee.id}></CreateTask>
            </>
          )
        }
    </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
    </>
  )
}

export default Employees;