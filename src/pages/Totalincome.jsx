import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, InputGroup, Badge, Container } from "react-bootstrap";

const Totalincome = () => {

    const [services, setServices] = useState([])

    useEffect(() => {

        axios.get("/usluge/ukupniprihod")
            .then((response) => {
                setServices(response.data)
                console.log(response.data)
            })
            .catch((err) => console.log(err))

    }, [])

    return (
        <Container>
            <h1>Ukupni prihod od usluga</h1>

            {services && services.length > 0 ? (
                services.map((service, index) => (

                    <Row key={index} className="border border-secondary rounded shadow-sm py-2 my-2" >
                        <Col md={9}>
                            Usluga: {service.Usluga} Ukupni Prihod: {service.Ukupni_prihod}
                           
                        </Col>
                    </Row>
                ))

            ) : (
                <Container className="text-danger">Nema usluga za prikazati</Container>
            )}

        </Container>
    )
}

export default Totalincome