import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/" className="fw-bold py-0 mt-4" >
                    Gisele Fox
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="fw-bold">
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
