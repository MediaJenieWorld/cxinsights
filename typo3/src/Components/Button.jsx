
// eslint-disable-next-line react/prop-types
const Button = ({ label, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={className}
            aria-label={label}
        >
            {label}
        </button>
    )
}

export default Button