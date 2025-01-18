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
            <NavDropdown title="Oprema">
              <NavDropdown.Item><Link as={Link} to={'oprema'} style={{textDecoration:'none', color:'#212529'}}>Skladiste opreme</Link></NavDropdown.Item>
              <NavDropdown.Item><Link as={Link} to={'konfiguracija'} style={{textDecoration:'none', color:'#212529'}}>Konfiguracija uređaja</Link></NavDropdown.Item>
            </NavDropdown>`
            


            <NavDropdown title="Server">
              <NavDropdown.Item><Link as={Link} to={'serveri'} style={{textDecoration:'none', color:'#212529'}}>Prikaz servera</Link></NavDropdown.Item>
              <NavDropdown.Item> <Link as={Link} to={'logovi'} style={{textDecoration:'none', color:'#212529'}}>Prikaz logova</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Zaposlenici">
              <NavDropdown.Item><Link as={Link} to={'zaposlenici'} style={{textDecoration:'none', color:'#212529'}}>Status zaposlenika</Link></NavDropdown.Item>
              <NavDropdown.Item> <Link as={Link} to={''} style={{textDecoration:'none', color:'#212529'}}>Marko ideja</Link></NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to={'statusi'} href="">Praćenje statusa uređaja</Nav.Link>
            <Nav.Link as={Link} to={'troskovi'} href="">Troškovi</Nav.Link>

            <Nav.Link as={Link} to={'incidenti'} href="">Incidenti</Nav.Link>
            <Nav.Link as={Link} to={'snapshots'} href="">Database Snapshot</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header

/* 
Ideja za navbar te opcentio stranice i komponente
Neka je svaki item u navbaru zapravo dropdown koji vodi na substranice povezane sa dropdown nazivom
Pa bi tako bio u mom slucaju Oprema bio glavni: Pa potom skladiste opreme i konfiguracija uredaja
Te bi se na tim stranicama radile CRUD opreacije te iscitavali ili dohvacali neki podaci iz querya(mada je to opet CRUD operacija samo dajem primjer)

Potom bi mogao biti Server kao glavni te u dropdownima 
*/