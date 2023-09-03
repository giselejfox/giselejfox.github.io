import { Button } from "react-bootstrap"

export default function SoleOpinionBackground() {
    return (
        <div className="container sole-opinion-background">
            <Button variant="outline-dark" className="rounded-0 d-flex align-items-center mt-5">
                <svg width="24" height="24" viewBox="0 0 50 50" className="me-1">
                    <path d="M40,25 L10,25 M20,15 L10,25 L20,35" stroke="black" stroke-width="4" fill="none" />
                </svg>
                <span>Back</span>
            </Button>
            <div className="py-5">
                <h1>Sole Opinion</h1>
                <div className="d-flex flex-column flex-md-row flex-wrap justify-content-between">
                    <div className="pb-3 pb-lg-0">Custom form for collecting perspectives on shoes. In collaboration with Olivia Oomen.</div>
                    <div className="d-flex flex-column flex-md-row flex-wrap justify-content-end text-uppercase">
                        <div className="px-0 pb-3 pb-lg-0 pe-md-3">Collaboration</div>
                        <div className="px-0 pb-3 pb-lg-0 pe-md-3">1 month</div>
                        <div className="px-0 pb-3 pb-lg-0 pe-md-3">Sep 2023</div>
                    </div>
                </div>
            </div>
            <section>
                <h2>Problem</h2>
                <p>Liv wanted a way to collect people's perspectives on shoes for research for her capstone process</p>
                <p>It also acted as a way to make her portfolio more interactive and less of just looking opportunity</p>
            </section>
            <section>
                <h2>Process</h2>
                <h3>Ideating</h3>
                <p>-- Image of her sketch in the sketchbook --</p>
                <h3>Get the basic functionality down</h3>
                <div className="row row-cols-1 row-cols-md-2">
                    <div>
                        <p>Started by creating the basics of the form, making sure I had all the accessibility procedures in place and connecting the inputs to a firebase database and storage.</p>
                        <p>I knew this wasn't what it was going to look like (at all) but wanted to get a head start since I hadn't worked with a drawable canvas or drag and drop elements before.</p>
                    </div>
                    <img className="w-50" src="/img/sole-opinion-progress-1.png" alt="screenshot of a form on a webpage with no styling" />
                </div>
            </section>
        </div>
    )
}
            
            
            