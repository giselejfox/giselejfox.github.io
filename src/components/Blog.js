import React, { useState, useEffect } from 'react';
import { client } from "../contentful-client"

export default function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        client
            .getEntry('4rupDG7tERpusOi9waFMiq')
            .then((entry) => console.log(entry))
            .catch((err) => console.log(err))

        // const fetchPosts = async () => {
        //     try {
        //         const response = await client.getEntries();
        //         setPosts(response.items);
        //     } catch (error) {
        //         console.error('Error fetching entries:', error);
        //     }
        // };
        // fetchPosts();
    }, []);

    const postTitles = posts.map(post => <li key={post.sys.id}>{post.fields.externalTitle}</li>)

    return (
        <div className="container">
            <h1>Blog</h1>
            <ul>
                {postTitles}
            </ul>
        </div>
    )
}