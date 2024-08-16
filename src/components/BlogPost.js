import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

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
            <Link to={"/blog"}><button className='btn btn-outline-dark my-3'>⬅️ Blog</button></Link>
            <ReactMarkdown>{contentAndData.content}</ReactMarkdown>
        </div>
    );
}