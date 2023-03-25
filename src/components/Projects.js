import React from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";

export default function Projects() {
    return (
        <div className="container">
            <h1 className="page-header text-start" >Projects</h1>
            <div className="row project-row" >
                <div className="col">
                    <Card>
                        <Card.Img variant="top" src="img/huskyswaps.png" />
                        <Card.Title>Husky Swaps</Card.Title>
                        <Card.Text>
                            Interactive web app that allows users to login and post clothing they want to swap with other UW students
                        </Card.Text>
                        <Card.Text className="tech-text" >
                            React, Firebase
                        </Card.Text>
                        <div className="row">
                            <div className="col project-button-col">
                                <a href="https://huskyswaps-e2042.web.app/items#home" target="_blank" rel="noreferrer">
                                    <Button className="project-button">
                                        Live Site
                                    </Button>
                                </a>
                            </div>
                            <div className="col project-button-col">
                                <a href="https://github.com/info340-wi22/project-Giselejfox" target="_blank" rel="noreferrer" >
                                    <Button className="project-button">
                                        Github
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col">
                    <Card>
                        <Card.Img variant="top" src="img/huskyswaps.png" />
                        <Card.Title>King County Data Presentation</Card.Title>
                        <Card.Text>
                            Interactive presentation breaking down District 3's responses to Councilmember Perry's survey.
                        </Card.Text>
                        <Card.Text className="tech-text" >
                            PowerBI, Excel, Data Analysis Expressions
                        </Card.Text>
                        <div className="row">
                            <div className="col project-button-col">
                                <a href="https://huskyswaps-e2042.web.app/items#home" target="_blank" rel="noreferrer">
                                    <Button className="project-button">
                                        Live Site
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col">
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
                                    <Button className="project-button">
                                        Live Site
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}