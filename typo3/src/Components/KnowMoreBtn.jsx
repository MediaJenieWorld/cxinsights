import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const KnowMoreBtn = ({ btnClass = "", link, label = "KNOW MORE" }) => {
    return (
        <button className={btnClass + " button"}
            aria-label={label}
        >
            {label}
        </button>
    );
};
export default KnowMoreBtn