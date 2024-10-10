import React from "react";
import journalData from "../data/journalData.json"
import { Link } from 'react-router-dom';

export default function JournalListing() {

    const journalElems = journalData
        .filter((post) => post.published === "true")
        .map((post) => {
            return (
                <li className="list-unstyled my-3" key={post.id}>
                    <div>{post.publishedDate}</div>
                    <Link className="text-dark fw-bold" to={`/journal/${post.id}`}>{post.title}</Link>
                    <div>{post.description}</div>
                </li>
            )
        })

    return (
        <div className="container">
            <h1 className="visually-hidden">My Personal Archive</h1>
            <div className="row">
                <div className="col-12 col-lg-3">
                    <h2 className="mt-4">Lists</h2>
                    <ul className="list-unstyled ">
                        <li className="list-unstyled my-3">
                            <Link className="text-dark fw-bold" to={`/journal/000-favorite-websites`}>My Favorite Websites</Link>
                            {/* <div>A reminder of how cool the internet can be</div> */}
                        </li>
                        <li className="list-unstyled my-3">
                            <Link className="text-dark fw-bold" to={`/journal/000-film-photography`}>Select Film Photos</Link>
                            {/* <div>Small pieces of my life</div> */}
                        </li>
                        <li className="list-unstyled my-3">
                            <Link className="text-dark fw-bold" to={`/journal/000-kindle`}>Highlights from My Kindle</Link>
                            {/* <div>The lines highlighted from my Kindle</div> */}
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-lg-9">
                    <h2 className="mt-4">Journal</h2>
                    <ul className="list-unstyled">
                        {journalElems}
                    </ul>
                </div>
            </div>
        </div>
    )
}

