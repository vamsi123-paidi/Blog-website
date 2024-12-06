import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Navbar expand="lg" className="footer-navbar">
          <Nav className="text-center flex-wrap">
            <Nav.Link href="/" className="footer-link">Home</Nav.Link>
            <Nav.Link href="/bollywood" className="footer-link">Bollywood</Nav.Link>
            <Nav.Link href="/technology" className="footer-link">Technology</Nav.Link>
            <Nav.Link href="/hollywood" className="footer-link">Hollywood</Nav.Link>
            <Nav.Link href="/fitness" className="footer-link">Fitness</Nav.Link>
            <Nav.Link href="/food" className="footer-link">Food</Nav.Link>
          </Nav>
        </Navbar>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/vamsi-paidi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0 footer-text">
            © {new Date().getFullYear()} Vamsi Paidi. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
