import React from "react";
import Card from 'react-bootstrap/Card';

export default function Projects() {
    return (
        <div className="container">
            <h1 id="projects-header" className="text-start" >Projects</h1>
            <div className="row" >
                <div className="col">
                    <Card>
                        <Card.Img variant="top" src="img/placeholder.JPG" />
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card>
                </div>
                <div className="col">
                    <Card>
                        <Card.Img variant="top" src="img/placeholder.JPG" />
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card>
                </div>
                <div className="col">
                    <Card>
                        <Card.Img variant="top" src="img/placeholder.JPG" />
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card>
                </div>
            </div>
        </div>
    )
}