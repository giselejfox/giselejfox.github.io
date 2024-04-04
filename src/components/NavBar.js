import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/" className="fw-bold">
                    <img 
                        src="img/mock-logo.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="container-fluid justify-content-end">
                        <Link className="nav-link rounded" to="/projects" >Projects</Link>
                        {/* <Link className="nav-link" to="/blog" >Blog</Link> */}
                        <Link className="nav-link rounded" to="https://drive.google.com/file/d/1eUoEhnnkuE9q-7FU8P7WZnHolb7-ipUf/view?usp=sharing" target="_blank" rel="noreferrer noopener" >Resume</Link>
                        <Link className="nav-link rounded" to="/about" >About</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
