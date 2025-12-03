import { useState, useEffect } from "react";

export default function HomepageContent() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(currentImageIndex => (currentImageIndex + 1) % 7); // 8 is how many images I have in the folder!
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    function ProjectColumn({ title, titleURL, subtitle, date }) {
        return (
            <>
                {titleURL ? (
                    <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                        <a className="text-dark" href={titleURL}>
                            <h3 className="about-h3 fw-bold mb-1 about-h3-link">
                                {title}
                                <span className="ps-1">
                                    <svg width="12" height="12" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.494309 12.5916C0.103785 12.9821 0.103785 13.6153 0.494309 14.0058C0.884834 14.3963 1.518 14.3963 1.90852 14.0058L0.494309 12.5916ZM13.7988 1.70129C13.7988 1.14901 13.3511 0.701294 12.7988 0.701294L3.79883 0.701294C3.24654 0.701294 2.79883 1.14901 2.79883 1.70129C2.79883 2.25358 3.24654 2.70129 3.79883 2.70129H11.7988V10.7013C11.7988 11.2536 12.2465 11.7013 12.7988 11.7013C13.3511 11.7013 13.7988 11.2536 13.7988 10.7013L13.7988 1.70129ZM1.90852 14.0058L13.5059 2.4084L12.0917 0.994187L0.494309 12.5916L1.90852 14.0058Z" fill="black" />
                                    </svg>
                                </span>
                            </h3>
                        </a>
                        <div className="lh-sm">{subtitle}</div>
                    </div>
                ) : (
                    <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                        <h3 className="about-h3 fw-bold mb-1">{title}</h3>
                        <div className="lh-sm pb-1">{subtitle}</div>
                        <div className="lh-sm fs-italics">{date}</div>
                    </div>
                )}
            </>
        );

    }
    return (
        <div className="container py-5 mt-3">
            <div className="row">
                <div className="col-12 col-lg-3 d-flex flex-column pb-5 ps-4 ps-lg-0 align-items-start align-items-lg-center">
                    <img className="homepage-image" src={"img/2min_sketches/" + currentImageIndex + ".jpeg"} alt="line drawing of me" />
                </div>
                <div className="col-12 col-lg-6 landing-page-content row">
                    <h1>Gisele Fox <span className="small-h1">(she/they)</span></h1>
                    <p>Hello! I am a information enthusiast and web developer with a passion for creating unique yet practical solutions.</p>
                    <p>Right now I wear many hats at Forum One where I coordinate website projects/portfolios and contribute to business development proposals.</p>
                    <p>On the side I like to creatively code websites. My most active project these days has been developing Olivia Oomen's industrial design portfolio that includes a custom homepage with matter.js draggable objects and a connection to the Contentful CMS.</p>
                    <p>Interested in working together? I'm working on building my portfolio so I would be too! Feel free to send me an email if you have fun ideas you want to see brought to life.</p>

                    <h2 className="about-h2">projects</h2>
                    <div className="horizontal-line mb-3"></div>
                    <div className="row">
                        <ProjectColumn
                            title={"Interactive Industrial Design Portfolio"}
                            titleURL={"/#/olivia-oomen-portfolio"}
                            subtitle={"React, Next.js, Matter.js"}
                        />
                        <ProjectColumn
                            title={"DIY Feed Reader"}
                            titleURL={"/#/diy-feed-reader"}
                            subtitle={"FirebaseDB, GoogleAPI, RSS"}
                        />
                        <ProjectColumn
                            title={"BACTracker"}
                            titleURL={"https://bactracker-be654.web.app/"}
                            subtitle={"React Native, Bootstrap"}
                        />
                    </div>

                    <h2 className="about-h2">experience</h2>
                    <div className="horizontal-line mb-3"></div>
                    <div className="row">
                        <ProjectColumn
                            title={"Forum One"}
                            // titleURL={"https://bactracker-be654.web.app/"}
                            subtitle={"Project Coordinator, Business Analyst, Solutions Analyst"}
                            date={"2023 - Present"}
                        />
                        <ProjectColumn
                            title={"King County Councilmember Perry"}
                            // titleURL={"https://bactracker-be654.web.app/"}
                            subtitle={"Data and Communications Intern"}
                            date={"2022-2023"}
                        />
                        <ProjectColumn
                            title={"University of Washington"}
                            // titleURL={"https://bactracker-be654.web.app/"}
                            subtitle={"Front End Dev Teaching Assistant"}
                            date={"2023"}
                        />
                    </div>

                    <h2 className="about-h2">education</h2>
                    <div className="horizontal-line mb-3"></div>
                    <div className="row">
                        <ProjectColumn
                            title={"University of Washington"}
                            // titleURL={"https://bactracker-be654.web.app/"}
                            subtitle={"B.S. Informatics"}
                            date={"2020-2023"}
                        />
                        <ProjectColumn
                            title={"Seattle Central College"}
                            // titleURL={"https://bactracker-be654.web.app/"}
                            // subtitle={"B.S. Informatics"}
                            date={"2019-2020"}
                        />
                    </div>

                    <h2 className="about-h2">contact</h2>
                    <div className="horizontal-line mb-3"></div>
                    <div className="d-flex flex-row">
                        <div className="col-12 col-lg-4" >
                            <h3 className="about-h3 fw-bold mb-1">EMAIL</h3>
                            <div className="lh-sm">giselejfox@gmail.com</div>
                            <div className="pt-3" >
                                <h3 className="about-h3 fw-bold mb-1">OTHER</h3>
                                <a className="text-dark" href="https://www.linkedin.com/in/giselejfox/" target="_blank" rel="noreferrer" ><div>LinkedIn</div></a>
                                <a className="text-dark" href="https://github.com/giselejfox" target="_blank" rel="noreferrer" ><div>Github</div></a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <p>Visit my <a className="text-dark" href="https://giselejfox.github.io/digital-garden" target="_blank" rel="noreferrer" >🌱 digital garden</a> to get a better picture of what I'm thinking about these days.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}