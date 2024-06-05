import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            {/* Only shows on xs/s */}
            <nav class="collapsed-navbar navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="google.com">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="collapsed-nav-item nav-item">
                            <a class="nav-link active" aria-current="page" href="google.com">Home</a>
                        </li>
                        <li class="collapsed-nav-item nav-item">
                            <a class="nav-link active" aria-current="page" href="google.com">Project #1</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            {/* shows md+ */}
            <nav class="expanded-navbar">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <li class="expanded-nav-item nav-item">
                            <a class="nav-link active" aria-current="page" href="google.com">Home</a>
                        </li>
                        <li class="expanded-nav-item nav-item">
                            <a class="nav-link active" aria-current="page" href="google.com">Project #1</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        
    )
}
