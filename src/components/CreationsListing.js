import React from "react";
import creationsData from "../data/creationsData.json"
import { Link } from 'react-router-dom';

export default function CreationsListing() {

    const creationsElems = creationsData
        .filter((post) => post.published)
        .map((post) => {
            return (
                <div className="col-12 col-lg-3 my-5 d-flex flex-column" key={post.id}>
                    <Link className="text-dark text-decoration-none" to={`/creations/${post.id}`}>
                        <img className="creations-img mb-3" src={`img/creations/icons/${post.img}`} alt={post.title} />
                        <div className="text-decoration-none eyebrow-text">{post.publishedDate}</div>
                        <div>{post.title}</div>
                    </Link>
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