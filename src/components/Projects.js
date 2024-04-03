import React from "react";
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "react-bootstrap";

import AllProjectInfo from "../data/AllProjectInfo.json"
import { Link } from "react-router-dom";


export default function Projects() {

    const projectCards = AllProjectInfo.map((project) => {
        return(<ProjectCard image={project.image} title={project.title} description={project.description} techText={project.techText} buttonInfo={project.buttonInfo} />)
    })

    return (
        <Container>
            {/* <h1 className="page-header text-start" >Projects</h1> */}
            <Row className="project-row mt-5" xs={1} md={2} xl={3} >
                {projectCards}
            </Row>
        </Container>
    )
}

function ProjectCard({ image, title, description, techText, buttonInfo }) {

    // const projectButtons = buttonInfo.map((button) => {
    //     return(
    //         <ProjectCardButton link={button.link} title={button.title} />
    //     )
    // })

    return(
        <Col className="mb-5 px-2" >
            <a href="https://oliviaoomen.com" target="_blank" rel="noreferrer noopener" className="text-decoration-none text-dark">
                <Card className="mx-3">
                    {/* Each card image should be a square */}
                    <Card.Img className="rounded" variant="top" src={"img/"+image} style={{maxHeight: "fit-content", objectFit: "cover"}}/>
                    <Card.Title >{title}</Card.Title>
                    {/* <Card.Text>{description}</Card.Text> */}
                    <Card.Text className="tech-text">{techText}</Card.Text>
                    {/* <div className="d-flex flex-row flex-wrap justify-content-start">
                        {projectButtons}
                    </div> */}
                </Card>
            </a>
        </Col>
    )
}

// function ProjectCardButton({ link, title }) {


//     return (
//         <div>
//             {link[0] === '/' ? 
//                 <Link to={link} className="mb-2 me-2">
//                     <Button variant="outline-dark" className="project-button rounded-0">{title}</Button>
//                 </Link> 
//             : 
//                 <a href={link} target="_blank" rel="noreferrer" className="mb-2 me-2">
//                     <Button variant="outline-dark" className="project-button rounded-0">{title}</Button>
//                 </a>
//             }
//         </div>
//     )
// }
