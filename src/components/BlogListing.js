import React from "react";
import blogData from "../data/blogData.json"
import { Link } from 'react-router-dom';

export default function BlogListing() {

    const blogElems = blogData.map(post => {
        return (
            <li className="list-unstyled my-3" key={post.id}>
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
                <div>{post.description}</div>
                <div>{post.publishedDate}</div>
            </li>
        )
    })

    return (
        <div className="container">
            <ul className="list-unstyled">
                {blogElems}
            </ul>
        </div>
    )
}