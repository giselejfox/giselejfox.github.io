import React from "react";
import Button from 'react-bootstrap/Button';
import Footer from "./Footer.js"

export default function HomePage() {
    return (
        <div id="homepage-spread" className="container">
            <div className="row">
                <div className="col-lg-7 my-auto" id="homepage-text">
                    <h1 id="homepage-gisele-hi" className="fw-bold text-start"> Hi, I'm Gisele!</h1>
                    {/* <h2 className="fw-bold text-start">I'm an Information Professional</h2> */}
                    <div id="info-text">
                        <h2 id="homepage-intro" className="text-start">I'm a <strong>full-stack web developer</strong> and <strong>data analyst</strong> with an eye for homespun creativity.</h2>
                    </div>
                    <Button href="/projects" className="float-start">Check out all my projects here!</Button>
                    {/* <p id="homepage-graduating" >Graduating from the University of Washington's iSchool in Aug 2023</p> */}
                </div>
                <div className="col-lg-5" id="homepage-img">
                    <img src="img/profile_drawing.jpeg" className="float-left" alt="line drawing of Gisele's face" id="homepage-image" />
                </div>
            </div>
            <Footer />
        </div>   
    )
}