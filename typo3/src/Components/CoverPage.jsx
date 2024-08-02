
function CoverPageImage({ src, loading = "lazy" }) {
    return <img loading={loading} style={{ objectFit: "cover" }} height={250} width={"100%"} src={src} alt={src} />
}

export default CoverPageImage