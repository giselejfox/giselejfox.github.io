import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { client } from "../contentful-client";
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function BlogDetailPage() {

    const blogSlug = useParams().blogTitlePath;

    // We have to get all the posts
    const [post, setPost] = useState();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await client.getEntries({content_type: 'blogPost'});
                const specificPost = response.items.find(post => post.fields.slug === blogSlug);
                if (specificPost) {
                    setPost(specificPost); // Set only the specific post in the state
                } else {
                    setPost({externalTitle: "nope"}); // No post found with the specific slug
                }
            } catch (error) {
                console.error('Error fetching entries:', error);
            }
        };
        fetchPosts();
    }, []);

    useEffect(() => {
        if (typeof post !== 'undefined') {
            setIsLoading(false)
        }
    }, [post])

    return (
        <div className="container">
            {isLoading &&
                <div className="spinner-border" role="status"></div>
            }
            {!isLoading &&
                <>
                    <h1>{post.fields.externalTitle}</h1>
                    {/* <div>{documentToReactComponents(post.fields.blogBody)}</div> */}
                </>
            }
        </div>
    )
}