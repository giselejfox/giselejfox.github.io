import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

import { CustomImage, CustomBlockQuote, CustomDivider, CustomLink, CustomHeaderTwo } from './CustomMarkdown';
import { parseFrontMatter } from '../helpers/parseFrontMatter';


export default function CreationsDetail() {
    const { postId } = useParams(); // Get the post ID from the URL
    const [contentAndData, setContentAndData] = useState('');

    useEffect(() => {
        // get the right year folder in the path
        let finalPath = `20${postId.substring(3, 5)}/${postId}`
        console.log("test")
        // get the markdown file
        import(`../creations/${finalPath}.md`)
            .then((res) => fetch(res.default))
            .then((res) => res.text())
            .then((text) => setContentAndData(parseFrontMatter(text)))
            .catch((err) => console.error(err));
    }, [postId]);

    return (
        <div className="container">
            <div className='row'>
                <div className='col-lg-8'>
                    <div className='my-3'>
                        <Link className="text-dark text-decoration-none d-flex flex-row" to={"/creations"} aria-label="Go back to journal">
                            <div className='me-2'>                    
                                <svg height="18" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label='back'>
                                    <path d="M31.0997 15.9937C24.9018 15.9937 18.7039 15.9937 12.506 15.9937C9.94049 15.9937 7.46131 15.6 4.89355 15.6C4.60303 15.6 1.8863 16.354 2.9248 15.2062C6.57034 11.1769 11.1849 8.1409 14.956 4.18124C15.3043 3.81559 17.8611 1.23539 16.0498 1.90625C14.2962 2.55573 12.7264 4.83584 11.4123 6.14999C9.0986 8.46367 7.02898 10.5775 4.4998 12.6468C3.05556 13.8285 1.18263 15.2453 2.15918 17.3937C3.31084 19.9274 7.08241 23.3352 9.44354 24.8531C11.4182 26.1225 15.1272 28.5423 16.1373 30.5624" stroke="black" stroke-width="3" stroke-linecap="round"/>
                                </svg>
                            </div>
                            <div>back</div>
                        </Link>
                    </div>
                    <ReactMarkdown
                        components={{
                            img: CustomImage,
                            hr: CustomDivider,
                            a: CustomLink,
                            blockquote: CustomBlockQuote,
                            h2: CustomHeaderTwo,
                        }}
                    >{contentAndData.content}</ReactMarkdown>
                </div>
                <div className='col-lg-4'></div>
            </div>
        </div>
    );
}