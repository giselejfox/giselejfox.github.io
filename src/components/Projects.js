import React from "react";
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button } from "react-bootstrap";


const AllProjectInfo = [
    {
        title: "BACTracker",
        image: "BACTracker-screens.png",
        description: "React Native application that includes a BAC calculator tuned to your height/weight/sex and how much you've had to eat beforehand, and an information hub answering commonly asked questions about alcohol.",
        techText: "React Native, Bootsrap, Javascript, HTML, CSS",
        buttonInfo: [
            {
                link: "https://bactracker-be654.web.app/",
                title: "Live Site"
            },
            {
                link: "https://github.com/iBant-Capstone/source-code",
                title: "Github"
            }
        ]
    },
    {
        title: "HuskySwaps",
        image: "huskyswaps.png",
        description: "Interactive web app that allows users to post clothing they want to swap with other UW students. Includes user authentication with Firebase login.",
        techText: "React, Bootsrap, Javascript, HTML, CSS, Firebase",
        buttonInfo: [
            {
                link: "https://huskyswaps-e2042.web.app/items#home",
                title: "Live Site"
            },
            {
                link: "https://github.com/info340-wi22/project-Giselejfox",
                title: "Github"
            }
        ]
    },
    {
        title: "King County Constituent Data Presentation",
        image: "huskyswaps.png",
        description: "Choose your own adventure based presentation breaking down the constituent interests of District 3. Results from analyzing responses to Councilmember Perry's survey.",
        techText: "PowerBI, Excel, Data Analysis Expressions",
        buttonInfo: [
            {
                link: "https://www.canva.com/design/DAFUH_5hOzM/QFMNWUBUx0o2spsb806K2w/view?utm_content=DAFUH_5hOzM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
                title: "Presentation"
            }
        ]
    },
    {
        title: "The Movie Times",
        image: "movietimes.png",
        description: "Interactive data interface analyzing the correlation between between COVID-19 and popularity of movies involving pandemics.",
        techText: "R, Markdown, HTML, CSS, Shiny",
        buttonInfo: [
            {
                link: "https://roshnisrikanth.shinyapps.io/The_Movie_Times_AG_1/",
                title: "Live Site"
            },
            {
                link: "https://github.com/info-201a-au20/final-project-movies",
                title: "Github"
            }
        ]
    }
]

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
        <Col className="mb-3" >
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
