import React from "react";
import journalData from "../data/journalData.json"
import { Link } from 'react-router-dom';

function BookSVG() {
    return (
        <svg height="24" viewBox="0 0 83 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.3265 12.789C42.3265 19.3343 42.6893 25.8504 42.6893 32.401C42.6893 38.3103 42.3265 44.1858 42.3265 50.078C42.3265 54.4064 41.9637 58.7033 41.9637 63.0384C41.9637 65.1849 42.3265 67.2382 42.3265 69.3876" stroke="black" stroke-width="4" stroke-linecap="round"/>
            <path d="M42.0952 13.2472C39.3992 10.5512 36.435 7.68492 33.1862 5.66843C29.0782 3.11868 23.2896 2 18.5125 2C12.2147 2 6.17053 3.10745 4 9.61904" stroke="black" stroke-width="4" stroke-linecap="round"/>
            <path d="M81.0952 15.2472C78.3992 12.5512 75.435 9.68492 72.1862 7.66843C68.0782 5.11868 62.2896 4 57.5125 4C51.2147 4 45.1705 5.10745 43 11.619" stroke="black" stroke-width="4" stroke-linecap="round"/>
            <path d="M2.41725 70.8388C2.68471 69.6353 6.54318 68.0746 7.57724 67.4929C10.3172 65.9517 13.1518 64.8899 16.2041 64.1268C19.9518 63.1899 25.0559 61.7015 28.8622 62.857C32.6446 64.0052 38.3847 65.5441 39.7868 69.7504" stroke="black" stroke-width="4" stroke-linecap="round"/>
            <path d="M42 69.4031C42.2675 68.1996 46.1259 66.6388 47.16 66.0572C49.8999 64.516 52.7346 63.4542 55.7868 62.6911C59.5345 61.7542 64.6386 60.2658 68.4449 61.4213C72.2273 62.5695 77.9675 64.1084 79.3696 68.3147" stroke="black" stroke-width="4" stroke-linecap="round"/>
            <path d="M3.8685 9.88654C3.8685 15.9317 4.23131 21.9604 4.23131 28.0271C4.23131 34.9726 3.8685 41.9403 3.8685 48.8888C3.8685 53.9681 3.50569 59.004 3.50569 64.0664C3.50569 66.1921 3.8685 68.3168 3.8685 70.4761" stroke="black" stroke-width="4" stroke-linecap="round"/>
            <path d="M79.5 15C79.5 20.3877 80 25.7608 80 31.1677C80 37.3577 79.5 43.5677 79.5 49.7605C79.5 54.2874 79 58.7756 79 63.2874C79 65.1819 79.5 67.0756 79.5 69" stroke="black" stroke-width="4" stroke-linecap="round"/>
        </svg>
    )
}

export default function JournalListing() {

    const journalElems = journalData
        .filter((post) => post.published === "true")
        .map((post) => {
            return (
                <li className="list-unstyled my-3" key={post.id}>
                    <div>{post.publishedDate}</div>
                    <Link className="text-dark fw-bold" to={`/journal/${post.id}`}>{post.title}</Link>
                    {/* <div>{post.description}</div> */}
                </li>
            )
        })

    return (
        <div className="container">
            <h1 className="visually-hidden">My Personal Archive</h1>
            <div className="row">
                <div className="col-12 col-lg-3">
                    <h2 className="mt-4">Ongoing Lists</h2>
                    <ul className="list-unstyled ">
                        <li className="list-unstyled my-3">
                            <div>
                                <Link className="text-dark fw-bold" to={`/journal/000-favorite-websites`}>My Favorite Websites</Link>
                                {/* <div>A reminder of how cool the internet can be</div> */}
                            </div>
                        </li>
                        <li className="list-unstyled my-3">
                            <Link className="text-dark fw-bold" to={`/journal/000-film-photography`}>Film Photography</Link>
                            {/* <div>Small pieces of my life</div> */}
                        </li>
                        <li className="list-unstyled my-3">
                            <Link className="text-dark fw-bold" to={`/journal/000-kindle`}>Highlights from My Kindle</Link>
                            {/* <div>The lines highlighted from my Kindle</div> */}
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-lg-5">
                    <h2 className="mt-4">Journal</h2>
                    <ul className="list-unstyled">
                        {journalElems}
                    </ul>
                </div>
            </div>
        </div>
    )
}

