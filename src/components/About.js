import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Icon from '@mdi/react';
import { mdiEmailOutline, mdiLinkedin, mdiGithub } from '@mdi/js';


export default function About() {

    const [showCopiedEmailConfirmation, setShowCopiedEmailConfirmation] = useState(false)

    function copyEmailToClipboard() {
        navigator.clipboard.writeText("giselejfox@gmail.com")
        setShowCopiedEmailConfirmation(true)
        setTimeout(turnOffCopiedEmailConfirmation, 4000)
        function turnOffCopiedEmailConfirmation() {
            setShowCopiedEmailConfirmation(false)
        }
    }

    return (
        <div className="container">
            <Row className="mt-5">
                <Col xs={12} md={5}>
                    <h1>About Me</h1>
                    <p>I'm an information professional currently working in Seattle as a Solutions Architect at a web agency called <a className="text-secondary" href="https://www.forumone.com">Forum One</a>. I budget projects, write technical proposals, aid in the product delivery, and help answer technical questions along the way.</p>
                    <p>You can also find me processing my own wool at home, knitting sweaters, lifting weights, and finding the best notion setup.</p>
                    <h2>Contact</h2>
                    <div className="d-flex flow-row">
                        <Icon 
                            path={mdiEmailOutline} 
                            size={1.25}
                            onClick={copyEmailToClipboard} 
                        />
                        <a href="https://www.linkedin.com/in/giselejfox/" target="_blank" rel="noreferrer" >
                            <Icon 
                                path={mdiLinkedin}
                                title="LikedIn"
                                size={1.25}
                                horizontal
                                vertical
                                rotate={180}
                                color="black"
                            />
                        </a>
                        <a href="https://github.com/giselejfox" target="_blank" rel="noreferrer" >
                            <Icon 
                                path={mdiGithub}
                                title="Github"
                                size={1.25}
                                horizontal
                                vertical
                                rotate={180}
                                color="black"
                            />
                        </a>
                    </div>
                    <div className="rounded p-2 px-3 mt-2" style={{backgroundColor:"#bdf5bd", display:showCopiedEmailConfirmation ? "block" : "none"}}>👍 Copied email 'giselejfox@gmail.com'</div>
                </Col>
                <Col xs={12} md={7}>

                </Col>
            </Row>
        </div>
    )

    // return (
    //     <div className="container about-all">
    //         {/* <h1 className="text-start page-header">About</h1> */}
    //         <Row className="px-4 pt-5">
    //             <Col xs={12} md={5} className="text-start">
    //                 <img style={{maxHeight: "24rem", objectFit: "cover", alignSelf:"end"}} className="rounded w-100 mb-3" src="img/profile.JPG" alt="portrait of Gisele, a white androgynous looking individual with short burly hair and a striped button down" />
    //             </Col>
    //             <Col xs={12} md={7} className="about-content d-flex flex-column align-items-start">
    //                 <h1 className="text-start end-section-lg"><div className="fw-lighter fs-3">👋 Hello! I'm </div><strong>Gisele Fox</strong></h1>
    //                 <h2>About Me</h2>
    //                 <p className="text-start">I'm an information professional excited about leveraging technology to enhance people's experience of the physical world, whether it be appreicating the outdoors or creating more efficient urban space.</p>
    //                 <p className="text-start end-section-lg">Graduating from the University of Washington's iSchool in August 2023</p>
    //                 <h2>Fun Facts</h2>
    //                 <ul className="text-start end-section-lg">
    //                     <li>I grew up for 5 years in Italy and can speak fluent Italian. (Ciao mi amici!)</li>
    //                     <li>I make my own pocket notebooks for scribbling down thoughts or doodling.</li>
    //                     <li>I knit and crochet my own bags and sweaters!</li>
    //                 </ul>
                    // <h2>Contact</h2>
                    // <div className="d-flex flow-row">
                    //     <Icon 
                    //         path={mdiEmailOutline} 
                    //         size={1.25}
                    //         onClick={copyEmailToClipboard} 
                    //     />
                    //     <a href="https://www.linkedin.com/in/giselejfox/" target="_blank" rel="noreferrer" >
                    //         <Icon 
                    //             path={mdiLinkedin}
                    //             title="LikedIn"
                    //             size={1.25}
                    //             horizontal
                    //             vertical
                    //             rotate={180}
                    //             color="black"
                    //         />
                    //     </a>
                    //     <a href="https://github.com/giselejfox" target="_blank" rel="noreferrer" >
                    //         <Icon 
                    //             path={mdiGithub}
                    //             title="Github"
                    //             size={1.25}
                    //             horizontal
                    //             vertical
                    //             rotate={180}
                    //             color="black"
                    //         />
                    //     </a>
                    // </div>
                    // <div className="rounded p-2 px-3 mt-2" style={{backgroundColor:"#bdf5bd", display:showCopiedEmailConfirmation ? "block" : "none"}}>👍 Copied email 'giselejfox@gmail.com'</div>
    //                 <div className="mb-5"></div>
    //             </Col>
    //         </Row>
    //     </div>
    // )
}