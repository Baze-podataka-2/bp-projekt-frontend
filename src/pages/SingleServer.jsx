import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const SingleService = () => {

    const [server, setServer] = useState(null);
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8080/posluzitelji/${id}`)
            .then((response) => {
                setServer(response.data)
                console.log(response.data)         
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    if (!server) {
        return (
            <h2>Nema servera za prikazati</h2>
        )
    }

    return (
        <Container className="text-center border border-1 rounded py-5 mt-5">

            <h1> Usluga {server[0].kategorija}</h1>
            <p> Naziv posluzitelja: {server[0].naziv}</p>
            <p> Rack: {server[0].id_rack}</p>

            <Link to="/serveri">
                <Button variant="secondary">Natrag</Button>
            </Link>

        </Container>
    )
}

export default SingleService