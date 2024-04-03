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
                    {/* <svg width="331" height="325" viewBox="0 0 331 325" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M305.633 113.254C305.633 113.254 252.633 -2.74581 111.633 32.7542C111.633 32.7542 -11.1577 60.9268 35.6334 224.254C63.9956 323.254 188.133 296.754 188.133 296.754C188.133 296.754 295.579 272.254 248.133 174.35C216.633 109.35 178.133 127.755 178.133 127.755C153.633 135.255 125.633 169.754 148.133 213.754" stroke="black" stroke-width="50" stroke-linecap="round"/>
                    </svg> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="container-fluid justify-content-end">
                        <Link className="nav-link" to="/projects" >Projects</Link>
                        <Link className="nav-link" to="/blog" >Blog</Link>
                        <Link className="nav-link" to="https://drive.google.com/file/d/1eUoEhnnkuE9q-7FU8P7WZnHolb7-ipUf/view?usp=sharing" target="_blank" rel="noreferrer noopener" >Resume</Link>
                        <Link className="nav-link" to="/about" >About</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
