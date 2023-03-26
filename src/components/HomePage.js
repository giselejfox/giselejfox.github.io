import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "./Footer.js"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

export default function HomePage() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex(currentImageIndex => (currentImageIndex + 1) % 7); // 8 is hoe many images I have in the folder!
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center nav-incl-whole-page">
            <Container>
                <Row>
                    <Col lg={6} className="text-start justify-content-center d-flex flex-column">
                        <div className="homepage-content">
                            <p>Hi, my name is</p>
                            <h1 id="homepage-name" className="fw-bold">Gisele Fox</h1>
                            <p>I'm a <strong>full-stack web developer</strong> and <strong>data analyst</strong></p>
                            <Link to="/projects">
                                <Button variant="outline-dark" className="float-start rounded-0">Check out my projects here!</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <img className="homepage-image" src={"img/2min_sketches/" + currentImageIndex + ".jpeg"} alt="line drawing of me"/>
                    </Col>
                </Row>
                <Footer />
            </Container>   
        </div>
    )
}