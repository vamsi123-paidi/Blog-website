import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="w-100 justify-content-between">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/bollywood">Bollywood</Nav.Link>
            <Nav.Link href="/technology">Technology</Nav.Link>
            <Nav.Link href="/hollywood">Hollywood</Nav.Link>
            <Nav.Link href="/fitness">Fitness</Nav.Link>
            <Nav.Link href="/food">Food</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
