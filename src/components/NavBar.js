import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/home" className="fw-bold">
                    <img 
                        src="img/profile_drawing.jpeg"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="container-fluid justify-content-end">
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="">Resume</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    )
}

// Gisele Fox, Projects, About, Resume