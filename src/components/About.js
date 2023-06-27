import React from "react";
import { Col, Row } from "react-bootstrap";


export default function About() {
    return (
        <div className="container about-all">
            {/* <h1 className="text-start page-header">About</h1> */}
            <Row className="px-4 pt-5">
                <Col xs={12} md={5}>
                    <img style={{maxHeight: "24rem", objectFit: "cover", alignSelf:"end"}} className="rounded w-100 mb-3" src="img/profile.JPG" alt="portrait of Gisele, a white androgynous looking individual with short burly hair and a striped button down" />
                </Col>
                <Col xs={12} md={7} className="about-content d-flex flex-column align-items-start">
                    <h2>About Me</h2>
                    <p className="text-start end-section-lg">I'm an information professional excited about leveraging technology to enhance people's experience of the physical world, whether it be appreicating the outdoors or creating more efficient urban space.</p>
                    <h3>Fun Facts</h3>
                    <ul className="text-start">
                        <li>I grew up for 5 years in Italy and can speak fluent Italian. (Ciao mi amici!)</li>
                        <li>I make my own pocket notebooks for scribbling down thoughts or doodling.</li>
                        <li>I knit and crochet my own bags and sweaters!</li>
                    </ul>
                </Col>
            </Row>
        </div>

    )
}