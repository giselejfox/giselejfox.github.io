// Markdown parser
export const parseFrontMatter = (content) => {
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
