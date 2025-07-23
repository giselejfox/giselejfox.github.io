import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import aboutData from "../data/about.json"

export default function About() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex(currentImageIndex => (currentImageIndex + 1) % 7); // 8 is how many images I have in the folder!
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    const dataColumn = (columnTitle) => {
        return aboutData[columnTitle].map((textChunk) => {
            return (
                <div className="pt-3">
                    {textChunk.titleLink === "" ?
                        <h3 className="about-h3 fw-bold mb-1">{textChunk.title}</h3>
                        :
                        <a className="text-dark" href={textChunk.titleLink} target="_blank" rel="noreferrer" ><h3 className="about-h3 fw-bold mb-1">{textChunk.title}
                            <span className="ps-1">
                                <svg width="12" height="12" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.494309 12.5916C0.103785 12.9821 0.103785 13.6153 0.494309 14.0058C0.884834 14.3963 1.518 14.3963 1.90852 14.0058L0.494309 12.5916ZM13.7988 1.70129C13.7988 1.14901 13.3511 0.701294 12.7988 0.701294L3.79883 0.701294C3.24654 0.701294 2.79883 1.14901 2.79883 1.70129C2.79883 2.25358 3.24654 2.70129 3.79883 2.70129H11.7988V10.7013C11.7988 11.2536 12.2465 11.7013 12.7988 11.7013C13.3511 11.7013 13.7988 11.2536 13.7988 10.7013L13.7988 1.70129ZM1.90852 14.0058L13.5059 2.4084L12.0917 0.994187L0.494309 12.5916L1.90852 14.0058Z" fill="black"/>
                                </svg>
                            </span>
                        </h3></a>
                    }
                    <div className="lh-sm">{textChunk.subtitle}</div>
                    <div>{textChunk.date}</div>
                </div>
            )
        })
    }

    return (
        <div className="container">
            <div className="row">
                <p className="col-12 col-md-8 col-lg-5 pt-4 pb-lg-4">Gisele Fox is a information enthusiast and web developer with a passion for creating unique, practical solutions. Their expertise spans <span className="fw-bold">custom creative coding</span>, <span className="fw-bold">technical writing, and project management</span>. Currently, they work as a Project Coordinator at Forum One in the Seattle area.</p>
            </div>
            {/* <div className="horizontal-line"></div> */}
            <Row className="pb-5 pt-4">
                <Col xs={12} md={4} className="d-flex align-items-center justify-content-center"><img className="homepage-image" src={"img/2min_sketches/" + currentImageIndex + ".jpeg"} alt="line drawing of me"/></Col>
                <Col xs={12} md={2} className="pt-5 pt-md-0 px-md-3">
                    <h2 className="about-h2">experience</h2>
                    {dataColumn("experience")}
                </Col>
                <Col xs={12} md={2} className="pt-5 pt-md-0 px-md-3">
                    <h2 className="about-h2">education</h2>
                    {dataColumn("education")}
                </Col>
                <Col xs={12} md={2} className="pt-5 pt-md-0 px-md-3">
                    <h2 className="about-h2">select personal projects</h2>
                    {dataColumn("personal-projects")}
                </Col>
                <Col xs={12} md={2} className="pt-5 pt-md-0 px-md-3">
                    <h2 className="about-h2">contact</h2>
                    <div className="pt-3" >
                        <h3 className="about-h3 fw-bold mb-1">EMAIL</h3>
                        <div className="lh-sm">giselejfox@gmail.com</div>
                    </div>
                    <div className="pt-3" >
                        <h3 className="about-h3 fw-bold mb-1">OTHER</h3>
                        <a className="text-dark" href="https://www.linkedin.com/in/giselejfox/" target="_blank" rel="noreferrer" ><div>LinkedIn</div></a>
                        <a className="text-dark" href="https://github.com/giselejfox" target="_blank" rel="noreferrer" ><div>Github</div></a>
                    </div>
                </Col>
            </Row>
        </div>
    )
}