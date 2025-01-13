import React from 'react'
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import imageD from "../images/datacenter.webp"
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
            <Button variant="primary" size="lg">
              Pregled projekta
            </Button>
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
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4">Ključne značajke projekta</h2>
        <Row className="text-center">
          <Col md={4}>
            <h3>Upravljanje podacima</h3>
            <p>
              Omogućujemo unos, ažuriranje i brisanje podataka na jednostavan
              i intuitivan način.
            </p>
          </Col>
          <Col md={4}>
            <h3>Analitika</h3>
            <p>
              Generiranje izvještaja i analiza podataka za podršku donošenju
              odluka.
            </p>
          </Col>
          <Col md={4}>
            <h3>Sigurnost</h3>
            <p>
              Podaci su zaštićeni kroz sustave autentifikacije i enkripcije.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  );
}

export default Home