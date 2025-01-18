import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row, Col, Badge } from "react-bootstrap"
const ServerStats = () => {

    const [stats, setStats] = useState(null);

    useEffect(() => {

        axios.get("http://localhost:8080/posluzitelji/statistika")
            .then((response) => {
                setStats(response.data)
            })
            .catch((error) => console.log(error));
    }, [])


    return (
        <Container className='mt-3'>
            <h1>Statistika</h1>
            <h4 className='mb-3'>Ovdije se prikazuje broj incidenata i logova za svaki poslužitelj</h4>
            {stats && stats.length > 0 ? (
                stats.map((st) => (
                    <Row key={st.id_posluzitelj} className="border border-secondary rounded shadow-sm py-2 my-2 mt-1" >
                        <Col md={1}>
                            <Badge bg="info" className="">{st.id_posluzitelj}</Badge>
                        </Col>
                        <Col md={2}>
                            Naziv: {st.naziv}
                        </Col>
                        <Col md={3}>
                            Kategorija: {st.kategorija}
                        </Col>
                        <Col md={2}>
                            Broj incidenata: {st.BrojIncidenata}
                        </Col>
                        <Col md={2}>
                            Broj Logova: {st.BrojLogZapisa}
                        </Col>

                    </Row>
                ))
            ) : (
                <Container className="text-danger">Nema statistike za prikazati</Container>
            )}
        </Container>
    )
}

export default ServerStats
