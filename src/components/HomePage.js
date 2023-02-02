import React from "react";

export default function HomePage() {
    return (
        <div id="homepage-spread" className="container">
            <div className="row">
                <div className="col-lg-7" id="homepage-text">
                    <h1 id="gisele-hi" className="fw-bold text-start">Hi, I'm Gisele!</h1>
                    <h2 className="fw-bold text-start">I'm an Information Professional</h2>
                    <div id="info-text">
                        <p className="text-start" >I'll be graduating from the Informatics program at the University of Washington in June 2023 and my technical skills focus on full-stack web development and data analysis.</p>
                        <p className="text-start">In my free time I like to knit sweaters, interview people, and re-work my Notion setup!</p>
                    </div>
                    <button className="button float-start">Check out all my projects here!</button>
                </div>
                <div className="col-lg-5" id="homepage-img">
                    <img src="img/profile_drawing.jpeg" className="float-left" alt="line drawing of Gisele's face" id="homepage-image" />
                </div>
            </div>
        </div>   
    )
}