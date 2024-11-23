// Custom component to handle image rendering
export const CustomImage = ({ src, alt }) => {
    return <img src={src} alt={alt} style={{ maxWidth: '100%', height: 'auto' }} />;
};

// Custom component to handle image rendering
export const CustomDivider = () => {
    return <div style={{ height: "40px", width: "100%"}}></div>;
};

export const CustomLink = ({ href, children }) => {
    return <a href={href} style={{color: "#004dbf"}}>{children}</a>;
};

export const CustomBlockQuote = ({ children }) => {
    return <blockquote className='custom-blockquote'>{children}</blockquote>
}

export const CustomHeaderOne = ({ children }) => {
    return <h1>{children}</h1>
}

export const CustomHeaderTwo = ({ children }) => {
    return <h2 className="mt-4">{children}</h2>
}