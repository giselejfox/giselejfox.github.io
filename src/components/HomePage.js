import React from "react";
import Button from 'react-bootstrap/Button';
import Footer from "./Footer.js"
import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div className="container">
            <div className="homepage-spread">
                <div class='content'>
                    <p className="text-start">Hi, my name is</p>
                    <h1 id="homepage-name" className="fw-bold text-start">Gisele Fox</h1>
                    <p id="homepage-intro" className="text-start">I'm a <strong>full-stack web developer</strong> and <strong>data analyst</strong> with an eye for homespun creativity.</p>
                    <Link to="/projects">
                        <Button className="float-start rounded-0">Check out all my projects here!</Button>
                    </Link>
                </div>
                <div className="homepage-image-div">
                    <img id="homepage-image" src="img/profile_drawing.jpeg" alt="line drawing of me"/>
                </div>
            </div>
            <Footer />
        </div>   
    )
}