import React, { useState, useEffect, useRef } from 'react';
import { client } from "../contentful-client"
import { formatDate } from '../helpers/formatdate';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Row, Col } from 'react-bootstrap';


export default function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await client.getEntries({content_type: 'blogPost'});
                setPosts(response.items);
            } catch (error) {
                console.error('Error fetching entries:', error);
            }
        };
        fetchPosts();
    }, []);

    const postTitles = posts.map(post => <PostCard slug={post.fields.slug} id={post.sys.id} externalTitle={post.fields.externalTitle} datePosted={post.fields.datePosted} description={post.fields.description}/>)

    return (
        <div className="container mt-3">
            <Row>
                <Col xs={12} md={5}>{postTitles}</Col>
                <Col xs={12} md={7}></Col>
            </Row>

        </div>
    )
}

function PostCard({ slug, id, externalTitle, datePosted, description }) {
    const cardRef = useRef(null);

    const handleMouseEnter = () => {
        gsap.to(cardRef.current, {
            rotation: 2,
            duration: 0.2,
            ease: 'power2.inOut'
        });
    };

    const handleMouseLeave = () => {
        gsap.to(cardRef.current, {
            rotation: 0,
            duration: 0.2,
            ease: 'power2.inOut'
        });
    };
    
    return (
        <Link key={id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="text-decoration-none text-dark" to={'/blog/' + slug}>
            <div ref={cardRef} className='p-4'>
                <h2>{externalTitle}</h2>
                <p>{formatDate(datePosted)}</p>
                <p>{description}</p>
            </div>
        </Link>
    )
}