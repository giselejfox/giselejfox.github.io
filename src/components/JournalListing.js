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
                    {/* <div>{post.description}</div> */}
                </li>
            )
        })

    return (
        <div className="container">
            <h1 className="visually-hidden">My Personal Archive</h1>
            <h2 className="mt-4">Ongoing Lists</h2>
            <ul className="list-unstyled row">
                <li className="list-unstyled my-3 col-4">
                    <Link className="text-dark fw-bold" to={`/journal/000-favorite-websites`}>My Favorite Websites</Link>
                    <div>A reminder that the internet can be really cool</div>
                </li>
                <li className="list-unstyled my-3 col-4">
                    <Link className="text-dark fw-bold" to={`/journal/000-film-photography`}>Film Photography</Link>
                    <div>Small pieces of my life</div>
                </li>
            </ul>
            <h2 className="mt-4">Journal</h2>
            <ul className="list-unstyled">
                {journalElems}
            </ul>
        </div>
    )
}