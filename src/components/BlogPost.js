import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export default function BlogPost() {
    const { postId } = useParams(); // Get the post ID from the URL
    const [contentAndData, setContentAndData] = useState('');

    useEffect(() => {
        import("../blogs/openHand.md")
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
            <ReactMarkdown>{contentAndData.content}</ReactMarkdown>
            <p>{postId}</p>
        </div>
    );
}