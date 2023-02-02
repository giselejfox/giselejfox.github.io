import React from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Gisele Fox</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Work</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Resume</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </Container>
        </Navbar>
        
    )
}