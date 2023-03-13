import React from "react";
import Button from 'react-bootstrap/Button';
import Footer from "./Footer.js"
import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div id="homepage-spread" className="container">
            <div id="homepage-content-row" className="row">
                <div className="col-lg-7 my-auto" id="homepage-text">
                    <h1 id="homepage-gisele-hi" className="fw-bold text-start"> Hi, I'm Gisele!</h1>
                    <div id="info-text">
                        <h2 id="homepage-intro" className="text-start">I'm a <strong>full-stack web developer</strong> and <strong>data analyst</strong> with an eye for homespun creativity.</h2>
                    </div>
                    <Link to="/projects">
                        <Button className="float-start">Check out all my projects here!</Button>
                    </Link>
                </div>
                <div className="col-lg-5" id="homepage-img">
                    <img src="img/profile_drawing.jpeg" className="float-left" alt="line drawing of Gisele's face" id="homepage-image" />
                </div>
            </div>
            <Footer />
        </div>   
    )
}