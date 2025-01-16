import React from "react";
import { Container } from "react-bootstrap";


import ConfigurationForm from "../components/createConfigurationForm";
const Configuration = () => {


  return(
    <>
    <h1 className="mt-3">Konfiguracija</h1>
     <Container className="">
        <ConfigurationForm></ConfigurationForm>
     </Container>
    </>
  )
}

export default Configuration