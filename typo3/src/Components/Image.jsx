
// eslint-disable-next-line react/prop-types
const ImageComp = ({ height, width, src, alt, ...props }) => {
    let newAlt = alt || src
    return (
        <img loading="lazy"
            height={height} width={width} src={"/assets/" + src} alt={newAlt} {...props} />
    )
}

export default ImageComp