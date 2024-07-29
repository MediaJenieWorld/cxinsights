import { Link } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="section">
        <h1>Logo</h1>
        <p>Copyright © 2020</p>
      </div>
      <div className="section text-28 text-400">
        <Link to="#">Home</Link>
        <Link to="#">About Us</Link>
        <Link to="#">Contact Us</Link>
      </div>
      <div className="section text-28">
        <Link to="#">Services</Link>
        <Link to="#">Service 01</Link>
        <Link to="#">Service 02</Link>
        <Link to="#">Service 03</Link>
        <Link to="#">Service 04</Link>
      </div>
      <div className="section text-28">
        <Link to="#">Resources</Link>
        <Link to="#">Blogs</Link>
        <Link to="#">Articles</Link>
        <Link to="#">03</Link>
      </div>
      <div className="section social text-28">
        <Link to="#">
          <img loading="lazy"
            height={24}
            width={24}
            src="/icons/facebook.svg"
            alt="social-icon"
          />
        </Link>
        <Link to="#">
          <img loading="lazy"
            height={24}
            width={24}
            src="/icons/instagram.svg"
            alt="social-icon"
          />
        </Link>
        <Link to="#">
          <img loading="lazy"
            height={24}
            width={24}
            src="/icons/twitter.svg"
            alt="social-icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
