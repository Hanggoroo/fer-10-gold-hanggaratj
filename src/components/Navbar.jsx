import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LogoNav from '../assets/logonavbar.jpg'

import "../styles/navBar.css"

function OffcanvasExample() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} style={{backgroundColor: "#F1F3FF"}} expand={expand}>
          <Container>
            {/* Logo */}
            <Navbar.Brand href="/">
                <img src={LogoNav} alt="logo website" style={{width:"100%", height:"28px"}} className="d-inline-block align-text-top me-2" />
            </Navbar.Brand>
             {/* Akhir Logo */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              {/* Menu */}
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#ourServices">Our Services</Nav.Link>
                  <Nav.Link href="#whyUs">Why Us</Nav.Link>
                  <Nav.Link href="#testimony">Testimonial</Nav.Link>
                  <Nav.Link href="#fAQ">FAQ</Nav.Link>
                </Nav>
              </Offcanvas.Body>
               {/* Akhir Menu */}
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;