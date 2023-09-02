import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "./Footer.js"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

export default function HomePage() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex(currentImageIndex => (currentImageIndex + 1) % 7); // 8 is how many images I have in the folder!
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="homepage-all d-flex justify-content-center align-items-center">
            <Container>
                <Row>
                    <Col xs={{span: 12, order:"first"}} lg={{span: 6, order:"last"}} className="d-flex flex-column justify-content-center">
                        <img className="homepage-image" src={"img/2min_sketches/" + currentImageIndex + ".jpeg"} alt="line drawing of me"/>
                    </Col>
                    <Col xs={{span: 12, order:"last"}} lg={{span: 6, order:"first"}} className="text-start d-flex flex-column justify-content-center">
                        <div className="homepage-content mb-4">
                            <p className="homepage-intro-hi">Hi, my name is</p>
                            <h1 id="homepage-name" className="fw-bold">Gisele Fox</h1>
                            <p>I'm a <strong>front-end web developer</strong> and <strong>data analyst</strong></p>
                            <Link to="/projects">
                                <Button variant="outline-dark" className="float-start rounded-0">Check out my projects!</Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Footer />
            </Container>   
            <div style={{height:"6rem", width:"1rem"}}></div>
        </div>
    )
}