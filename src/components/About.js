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
        <div className="container px-5 vh-100 d-flex flex-columns align-items-center">
            <div className="pe-5">
            <svg className='mb-5' width="272" height="322" viewBox="0 0 272 322" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M219 114C219 99.8852 214.084 87.1143 210.444 73.6667C206.296 58.3408 202.47 42.7951 190.167 31.7222C180.15 22.7072 169.795 16.628 156.056 16.0555C140.265 15.3976 124.707 16.4641 112.222 27.4444C104.111 34.5782 98.4 45.0421 93 54.2222C86.6883 64.9521 80.5982 75.8803 75 87C70.0297 96.8725 64.7219 106.678 60.2222 116.778C55.9814 126.296 54.4147 136.52 51.9445 146.556C46.2669 169.621 46.8356 194.324 47 218C47.1173 234.889 50.3771 253.418 56.0556 269.389C59.3549 278.668 64.261 287.474 70 295.444C74.7577 302.052 84.3154 306.974 90.7778 312C108.37 325.683 139.214 319.337 157 310.444C189.308 294.29 217.049 268.259 225.778 232C229.394 216.979 228.719 201.518 231.5 186.5C232.511 181.039 233.107 173.268 231 168" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M92 114C99.3511 110.905 108.909 109.631 116.778 108C123.095 106.69 134.405 104.985 140.556 108.222C143.576 109.812 144.94 115.972 145 118.778C145.216 128.936 144.551 138.341 144.056 148.5C142.458 181.257 143 214.177 143 247" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M124 137C112.563 137 87.97 134.49 89 152C89.1901 155.232 99.162 151.908 100.222 150C101.135 148.357 108.661 140 103 140" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M195 135C187.293 135 179.025 133.68 172.944 139C170.374 141.249 162.413 152.429 168 155.222C174.178 158.311 181.11 153.729 181.944 147.056C182.086 145.922 182.641 140.397 181.444 140.056C179.508 139.502 178.168 138.752 177 137" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M124 19C109.695 12.9479 89.0249 10.3708 73.7778 14.4445C50.3024 20.7165 27.3346 41.3728 15.1111 62C3.77039 81.1375 2 106.311 2 128C2 154.102 8.39612 179.579 11.5 205.444C13.7114 223.873 20 241.77 20 260.444C20 265.163 19.1331 268.754 17.2222 273C15.8812 275.98 21.0678 273.235 22 272.778C28.8149 269.437 34.0163 269 41.5 269C43.8213 269 50.0227 268.045 51 270" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M124 21C135.66 13.8247 149.049 5.37588 162.778 3.05555C181.543 -0.116023 199.436 1.81361 215.556 12.2222C229.042 20.9305 238.109 31.2128 241.444 47.2222C244.778 63.2225 246.741 79.5516 248.556 95.7778C252.134 127.774 251.607 160.243 255.444 192.222C257.241 207.195 257.902 223.116 261.056 237.833C263.389 248.721 266.49 259.387 267.5 270.5C267.715 272.867 271.842 295.212 268.333 297.444C263.922 300.252 257.582 295.496 253.778 293.778C248.858 291.556 243.98 289.71 239.056 287.556C232.821 284.828 226.229 283.269 219.556 282.056C216.4 281.482 209.101 281.303 208 278" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path d="M98 263C113.319 266.268 128.031 271.782 143.556 274C151.994 275.205 160.854 274.285 169 277" stroke="black" stroke-width="3" stroke-linecap="round"/>
            </svg>
            <h1 className="mb-4 fw-bold">Hi, I'm Gisele Fox!</h1>
            <p>I work in Seattle as a Solutions Analyst at Forum One. I budget projects, write technical proposals, aid in the product delivery, and help answer technical questions along the way.</p>
            <p>You can also find me processing my own wool at home, knitting sweaters, lifting weights, and finding the best notion setup.</p>
            </div>
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