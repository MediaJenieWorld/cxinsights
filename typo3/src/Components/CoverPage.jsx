
function CoverPageImage({ src }) {
    return <img loading="lazy" style={{ objectFit: "cover" }} height={250} width={"100%"} src={src} alt={src} />
}

export default CoverPageImage