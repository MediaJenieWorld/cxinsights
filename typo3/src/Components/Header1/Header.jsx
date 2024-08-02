import { useEffect, useState } from "react";
import "./style.scss";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Home",
    url: "/home",
  },
  {
    title: "About Us",
    url: "/about",
    links: [
      {
        label: "Company",
        href: "/behindUs",
      },
      {
        label: "People",
        href: "/behindUs",
      },
      {
        label: "Work With Us",
        href: "/behindUs",
      },
    ],
  },
  {
    title: "Our Services",
    url: "/services",
    links: [
      {
        label: "Consulting",
        href: "/services/details",
      },
      {
        label: "Design",
        href: "/services/details",
      },
      {
        label: "Digital",
        href: "/services/details",
      },
    ],
  },
  {
    title: "Our Work",
    url: "/work",
    links: [
      {
        label: "Work Gallery",
        href: "/work",
      },
    ],
  },
  {
    title: "Contact Us",
    url: "/contact",
    links: [],
  },
];

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
    <header className="header1">
      <div className="top">
        <div className="logo">
          <img loading="lazy" src="/user-48.png" height={40} width={40} alt="Logo" />
          <h3 className="text-16 text-700">CX Agent</h3>
        </div>
        <button
          className={isMenuOpen ? "menu-toggle active " : "menu-toggle"}
          aria-label={"menu-button"}
          onClick={toggleMenu} >
        </button>
      </div>
      <nav className={isMenuOpen ? "menu active " : "menu"}>
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
      </nav>
    </header>
  );
};

export default Header;
