import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" sticky='top' collapseOnSelect>
      <Container>
          <Navbar.Brand>
            <Link  as={Link} to={'/'} style={{textDecoration:'none', color:'HighlightText'}}>
            <Image src={logo}
              style={{height: '50'}}
            ></Image>
            Data-Center-Tim2
            </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <NavDropdown title="Klijenti">
              <NavDropdown.Item><Link as={Link} to={'usluge'} style={{textDecoration:'none', color:'#212529'}}>Usluge</Link></NavDropdown.Item>
              <NavDropdown.Item>Usluge klijenata</NavDropdown.Item>
              <NavDropdown.Item>Racuni prema klijentima</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link as={Link} to={'serveri'}>Serveri</Nav.Link>
            <Nav.Link as={Link} to={'incidenti'} href="">Incidenti</Nav.Link>
            <Nav.Link as={Link} to={'oprema'} href="">Oprema</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header