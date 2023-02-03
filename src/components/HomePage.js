import React from "react";
import Button from 'react-bootstrap/Button';

export default function HomePage() {
    return (
        <div id="homepage-spread" className="container">
            <div className="row">
                <div className="col-lg-7" id="homepage-text">
                    <h1 id="gisele-hi" className="fw-bold text-start"> 👋 Hi, I'm Gisele!</h1>
                    <h2 className="fw-bold text-start">I'm an Information Professional</h2>
                    <div id="info-text">
                        <p className="text-start">My technical skills focus on full-stack web development that I've aquired through personal or school-based projects and data analysis that I've put into practice with an internship with King County Councilmember Perry.</p>
                        <p className="text-start">In my free time I like to knit sweaters, interview people, and re-work my Notion setup!</p>
                    </div>
                    <Button href="#" className="float-start">Check out all my projects here!</Button>
                </div>
                <div className="col-lg-5" id="homepage-img">
                    <img src="img/profile_drawing.jpeg" className="float-left" alt="line drawing of Gisele's face" id="homepage-image" />
                </div>
            </div>
        </div>   
    )
}