import React from "react";
import blogData from "../data/blogData.json"
import { Link } from 'react-router-dom';

export default function BlogListing() {

    return (
        <div className="container">
            <ul>
                {blogData.map(post => (
                    <li key={post.id}>
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}