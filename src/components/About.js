import React from "react";
import { Col, Row } from "react-bootstrap";


export default function About() {
    return (
        <div className="container about-all">
            {/* <h1 className="text-start page-header">About</h1> */}
            <Row className="px-4 pt-4">
                <Col xs={12} md={5}>
                    <img style={{maxHeight: "24rem", objectFit: "cover", alignSelf:"end"}} className="rounded w-100 mb-3" src="img/profile.JPG" alt="portrait of Gisele, a white androgynous looking individual with short burly hair and a striped button down" />
                </Col>
                <Col xs={12} md={7} className="d-flex flex-column align-items-start">
                    <h2>About Me -</h2>
                    <p className="text-start">I'm an information professional excited about leveraging technology to enhance people's experience of the physical world, whether it be appreicating the outdoors or creating more efficient urban space.</p>
                </Col>
            </Row>
        </div>

    )
}