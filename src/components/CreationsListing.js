import React from "react";
import { useState } from "react";
import creationsData from "../data/creationsData.json"
import { Link } from 'react-router-dom';

export default function CreationsListing() {

    const [imageLoading, setImageLoading] = useState(true);

    const handleImageLoad = () => {
        setImageLoading(false);
    };

    const creationsElems = creationsData
        .filter((post) => post.published)
        .map((post) => {
            return (
                <div className="col-12 col-lg-3 mb-5 my-lg-5 d-flex flex-column justify-content-end" key={post.id}>
                    <Link className="text-dark text-decoration-none" to={`/creations/${post.id}`}>
                        {/* Placeholder */}
                        {imageLoading && <div className="image-placeholder">Loading...</div>}
                        <img
                            className="creations-img mb-3"
                            src={`img/creations/icons/${post.img}`}
                            alt={post.title}
                            onLoad={handleImageLoad}
                            style={{ display: imageLoading ? "none" : "block" }}
                        />
                        <div className="text-decoration-none eyebrow-text">{post.publishedDate}</div>
                        <div>{post.title}</div>
                    </Link>
                </div>
            )
        })

    return (
        <div className="container">
            <h1 className="visually-hidden">Creations</h1>
            <div className="row mt-3 mt-lg-5">
                {creationsElems}
            </div>
        </div>
    )
}