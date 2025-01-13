import axios from "axios";
import { useParams } from "react-router-dom";
import Ract, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const SingleService = () => {

    const [service, setService] = useState(null);
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8080/usluge/${id}`)
            .then((response) => {
                setService(response.data)     
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    if (!service) {
        return (
            <h2>Nema usluge za prikazati</h2>
        )
    }

    return (
        <Container className="text-center border border-1 rounded py-5 mt-5">

            <h1> Usluga {service[0].vrsta}</h1>
            <p> Cijena: {service[0].cijena}</p>

            <Link to="/usluge">
                <Button variant="secondary">Natrag</Button>
            </Link>

        </Container>
    )
}

export default SingleService