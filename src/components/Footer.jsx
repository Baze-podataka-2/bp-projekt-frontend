import React from 'react';
import { Container, Row, Col, Navbar, Image } from 'react-bootstrap';
import logo from "../images/logo.png"
import { BiMailSend, BiPhone} from "react-icons/bi";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    
    <Container>
    <Navbar bg="white" className="mt-5 py-5 ">
      <Container>
        <Row className="w-100 text-center justify-content-between text-center">
          <Col md={6}>
            {/* Logo Sekcija */}
            <Image 
              src={logo} // Zameni sa URL-om logotipa
              alt="Company Logo"
              width={"auto"}
              height={110}
              className="mb-3"
              rounded
            />
            
          </Col>
          <Col md={6}>
            {/* *** PROMJENITI LINKOVE! *** */}
            <h5>Brzi linkovi</h5>
            <Link to="/" className="text-decoration-none">
            <p className='text-black' >Početna</p>
            </Link>
            <Link to="/"  className="text-decoration-none">
            <p className='text-black' >Serveri</p>
            </Link>
            <Link to="/" className="text-decoration-none"> 
            <p className='text-black'>Oprema</p>
            </Link>
            <Link to="/" className="text-decoration-none"> 
            <p className='text-black'>Incidenti</p>
            </Link>
            <Link to="/" className="text-decoration-none"> 
            <p className='text-black'>Racuni prema klijentima</p>
            </Link>
          </Col>
        
        </Row>
      </Container>
     
    </Navbar>
    <p className='text-center'>© 2025 Tim 2</p>
    </Container>
    
  );
};

export default Footer;
