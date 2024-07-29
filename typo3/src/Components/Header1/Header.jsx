import { useEffect, useState } from "react";
import "./style.scss";
import { menuItems } from "./const";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();

  useEffect(() => {
    return () => setIsMenuOpen(false)
  }, [location]);


  return (
    <div className="header1">
      <div className="top">
        <div className="logo">
          <img loading="lazy" src="/assets/Banner.png" height={40} width={40} alt="Logo" />
          <h3 className="text-16 text-700">CX Agent</h3>
        </div>
        <button
          className={isMenuOpen ? "menu-toggle active " : "menu-toggle"}
          onClick={toggleMenu} >
        </button>
      </div>
      <div className={isMenuOpen ? "menu active " : "menu"}>
        {menuItems.map((item, index) => (
          <div key={index} className="item-section">
            <Link to={item.url} className="h3"> {item.title}</Link>
            <div className="items">
              {item.links &&
                item.links.map((link, linkIndex) => (
                  <Link key={linkIndex} to={link.href}>
                    {link.label}
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
