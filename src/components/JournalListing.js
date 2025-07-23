import React from "react";
import journalData from "../data/journalData.json"
import { Link } from 'react-router-dom';

export default function JournalListing() {

    const journalElems = journalData
        .filter((post) => post.published === "true")
        .map((post) => {
            return (
                <li className="list-unstyled my-4" key={post.id}>
                    <div className="eyebrow-text">{post.publishedDate}</div>
                    <Link className="text-dark" to={`/journal/${post.id}`}>{post.title}</Link>
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
                            <Link className="text-dark" to={'https://gisele-rss-feed.netlify.app/'}>My "RSS" Reader</Link>
                        </li>
                        <li className="list-unstyled my-3">
                            <Link className="text-dark" to={`/journal/000-favorite-websites`}>My Favorite Websites</Link>
                        </li>
                        <li className="list-unstyled my-3">
                            <Link className="text-dark" to={`/journal/000-film-photography`}>Select Film Photos</Link>
                        </li>
                        <li className="list-unstyled my-3">
                            <Link className="text-dark" to={`/journal/000-kindle`}>Highlights from My Kindle</Link>
                        </li>
                        <li className="list-unstyled my-3">
                            <Link className="text-dark" to={`/journal/000-bunker-media`}>My Bunker Media</Link>
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

