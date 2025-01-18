import React from "react";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShowCosts from "../components/showDevicesCosts";



const DeviceGeneratedCosts = () => {
  return(
  <>
  <h1 className="mt-3">Generirani troškovi</h1>
    <Container>
      <ShowCosts/>
    </Container>
  </>)
}

export default DeviceGeneratedCosts;