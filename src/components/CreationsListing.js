import React from "react";
import creationsData from "../data/creationsData.json"
import { Link } from 'react-router-dom';

export default function CreationsListing() {

    const creationsElems = creationsData
        .filter((post) => post.published)
        .map((post) => {
            return (
                <div className="col-12 col-lg-4 my-5 d-flex flex-column" key={post.id}>
                    <Link to={`/journal/${post.id}`}>
                        <img className="creations-img mb-3" src={`img/creations/${post.img}`} alt={post.title} />
                    </Link>
                    <div>
                        <div>{post.publishedDate}</div>
                        <Link className="text-dark fw-bold" to={`/journal/${post.id}`}>{post.title}</Link>
                    </div>
                </div>
            )
        })

    return (
        <div className="container">
            <h1 className="visually-hidden">Creations</h1>
            <div className="row mt-5">
                {creationsElems}
            </div>
        </div>
    )
}