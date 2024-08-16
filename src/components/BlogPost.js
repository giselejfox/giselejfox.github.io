import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

// Custom component to handle image rendering
const CustomImage = ({ src, alt }) => {
    return <img src={src} alt={alt} style={{ width: '100%', height: 'auto' }} />;
};

export default function BlogPost() {
    const { postId } = useParams(); // Get the post ID from the URL
    const [contentAndData, setContentAndData] = useState('');

    useEffect(() => {
        import(`../blogs/${postId}.md`)
            .then((res) => fetch(res.default))
            .then((res) => res.text())
            .then((text) => setContentAndData(parseFrontMatter(text)))
            .catch((err) => console.error(err));
    }, [postId]);

    const parseFrontMatter = (content) => {
        const frontMatterPattern = /^---\n([\s\S]+?)\n---/;
        const match = content.match(frontMatterPattern);
        if (match) {
            const yamlString = match[1];
            const data = yamlString.split('\n').reduce((acc, line) => {
                const [key, value] = line.split(':').map(str => str.trim());
                acc[key] = value;
                return acc;
            }, {});
            return { data, content: content.replace(frontMatterPattern, '').trim() };
        }
        return { data: {}, content };
    };

    return (
        <div className="container">
            <div className='row'>
                <div className='col-lg-9'>
                    <div className='my-3'><Link className="text-dark" to={"/blog"}>⬅️ Blog</Link></div>
                    <ReactMarkdown
                        components={{
                            img: CustomImage, // Custom renderer for images
                        }}
                    >{contentAndData.content}</ReactMarkdown>
                </div>
                <div className='col-lg-3'></div>
            </div>
        </div>
    );
}