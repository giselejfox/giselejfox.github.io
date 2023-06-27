import React from "react";
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button } from "react-bootstrap";

import AllProjectInfo from "../data/AllProjectInfo.json"

function ProjectCardButton({ link, title }) {
    return(
        <div className="col project-button-col">
            <a href={link} target="_blank" rel="noreferrer">
                <Button variant="outline-dark" className="project-button rounded">{title}</Button>
            </a>
        </div>
    )
}

function ProjectCard({ image, title, description, techText, buttonInfo }) {

    const projectButtons = buttonInfo.map((button) => {
        return(
            <ProjectCardButton link={button.link} title={button.title} />
        )
    })

    return(
        <Col className="mb-5" >
            <Card className="mx-3">
                <Card.Img variant="top" src={"img/"+image} style={{maxHeight: "fit-content", objectFit: "cover"}}/>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text className="tech-text">{techText}</Card.Text>
                <div className="row">
                    {projectButtons}
                </div>
            </Card>
        </Col>
    )
}

export default function Projects() {

    const projectCards = AllProjectInfo.map((project) => {
        return(<ProjectCard image={project.image} title={project.title} description={project.description} techText={project.techText} buttonInfo={project.buttonInfo} />)
    })

    return (
        <Container>
            <h1 className="page-header text-start" >Projects</h1>
            <Row className="project-row mt-5" xs={1} md={2} xl={3} >
                {projectCards}
            </Row>
        </Container>
    )
}
