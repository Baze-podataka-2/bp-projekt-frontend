import React from 'react'
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import imageD from "../images/datacenter.webp"
import { Link } from "react-router-dom"
const Home = () => {
  return (
   <div>
    {/* Hero Section */}
    <section className="bg-light py-5 mt-3">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4">Projekt za baze podataka</h1>
            <p className="lead">
              Dobrodošli na naš projekt za predmet "Baze podataka". Ovdje ćemo
              predstaviti implementaciju sustava koji omogućuje upravljanje i
              analizu podataka.
            </p>
            <a href="#pregled">
            <Button variant="primary" size="lg">
              Pregled projekta
            </Button>
            </a>
          </Col>
          <Col md={6}>
            <img
              src={imageD}
              alt="Database Illustration"
              className="img-fluid object-fit-cover w-100"
            />
          </Col>
        </Row>
      </Container>
    </section>

    {/* Features Section */}
    <section className="py-5" id='pregled'>
      <Container>
        <h2 className="text-center mb-4">Ključne značajke projekta</h2>
        <Row className="text-center justify-content-between mt-5" >
          <Col md={3} className='border rounded-3 shadow-sm py-5'>
            <h3>Prikaz poslužitelja</h3>
            <p>
              Omogućujemo unos, ažuriranje i brisanje podataka  o poslužiteljima na jednostavan
              način.
            </p>
            <Link to="/serveri">
            <Button>Vidi više</Button>
            </Link>
          </Col>
          <Col md={3} className='border rounded-3 shadow-sm py-5 '>
            <h3>Prikaz opreme</h3>
            <p>
               Unos izmjena i brisanje opreme iz baze podataka
            </p>
            <Link to="/oprema">
            <Button>Vidi više</Button>
            </Link>
          </Col>
          <Col md={3} className='border rounded-3 shadow-sm py-5'>
            <h3>Prikaz usluga</h3>
            <p>
            Unos izmjena i brisanje usluga iz baze podataka
            </p>
            <Link to="/usluge">
            <Button>Vidi više</Button>
            </Link>
          </Col>
        </Row>

        <Row className="text-center justify-content-between mt-3">
          <Col md={3} className='border rounded-3 shadow-sm py-5'>
            <h3>Prikaz incidenata</h3>
            <p>
              Omogućujemo unos, ažuriranje i brisanje podataka  o incidentima na jednostavan
              način.
            </p>
            <Link to="/incidenti">
            <Button>Vidi više</Button>
            </Link>
          </Col>
          <Col md={3} className='border rounded-3 shadow-sm py-5 '>
            <h3>Prikaz računa prema klijentima</h3>
            <p>
               Unos izmjena i brisanje računa iz baze podataka
            </p>
            <Link to="/">
            <Button>Vidi više</Button>
            </Link>
          </Col>
          <Col md={3} className='border rounded-3 shadow-sm py-5'>
            <h3>Insert ideja</h3>
            <p>
           Lorem ipsum
            </p>
            <Link to="/">
            <Button>Vidi više</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  );
}

export default Home