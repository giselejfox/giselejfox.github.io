import React from "react";
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Projects() {
    return (
        <Container>
            <h1 className="page-header text-start" >Projects</h1>
            <Row className="project-row" >
                <Col>
                    <Card>
                        <Card.Img variant="top" src="img/huskyswaps.png" />
                        <Card.Title>Husky Swaps</Card.Title>
                        <Card.Text>
                            Interactive web app that allows users to login and post clothing they want to swap with other UW students. Includes user authentication with Firebase login.
                        </Card.Text>
                        <Card.Text className="tech-text" >
                            React, Firebase
                        </Card.Text>
                        <div className="row">
                            <div className="col project-button-col">
                                <a href="https://huskyswaps-e2042.web.app/items#home" target="_blank" rel="noreferrer">
                                    <Button variant="outline-dark" className="project-button rounded-0">
                                        Live Site
                                    </Button>
                                </a>
                            </div>
                            <div className="col project-button-col">
                                <a href="https://github.com/info340-wi22/project-Giselejfox" target="_blank" rel="noreferrer" >
                                    <Button variant="outline-dark" className="project-button rounded-0">
                                        Github
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="img/huskyswaps.png" />
                        <Card.Title>King County Data Presentation</Card.Title>
                        <Card.Text>
                            Interactive presentation breaking down the constituent interests of District 3 from responses to Councilmember Perry's survey.
                        </Card.Text>
                        <Card.Text className="tech-text" >
                            PowerBI, Excel, Data Analysis Expressions
                        </Card.Text>
                        <div className="row">
                            <div className="col project-button-col">
                                <a href="https://huskyswaps-e2042.web.app/items#home" target="_blank" rel="noreferrer">
                                    <Button variant="outline-dark" className="project-button rounded-0">
                                        Live Site
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="img/movietimes.png" />
                        <Card.Title>The Movie Times</Card.Title>
                        <Card.Text>
                            Interactive data interface analyzing the correlation between between COVID-19 and popularity of movies involving pandemics.
                        </Card.Text>
                        <Card.Text className="tech-text" >
                            R, Markdown, HTML, CSS, Shiny
                        </Card.Text>
                        <div className="row">
                            <div className="col project-button-col">
                                <a href="https://roshnisrikanth.shinyapps.io/The_Movie_Times_AG_1/" target="_blank" rel="noreferrer">
                                    <Button variant="outline-dark" className="project-button rounded-0">
                                        Live Site
                                    </Button>
                                </a>
                            </div>
                            <div className="col project-button-col">
                                <a href="https://github.com/info340-wi22/project-Giselejfox" target="_blank" rel="noreferrer" >
                                    <Button variant="outline-dark" className="project-button rounded-0">
                                        Github
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}