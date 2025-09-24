import { useState } from "react";
import { Link } from "react-router-dom";
import navLinks from "../../config/navLinks";
import "./MobileNavigation.css";

const MobileNavigation = ({ open, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className={`mobile-nav-overlay ${open ? "show" : ""}`}>
      <div className="mobile-nav">
        {/* Close button */}
        <button className="close-btn" onClick={onClose} aria-label="Close menu">
          <i className="bi bi-x"></i>
        </button>

        <ul className="list-unstyled m-0 mt-5 pt-2 p-0 d-flex flex-column gap-3">
          {navLinks.map((link, index) =>
            link.links ? (
              <li key={index} className="mobile-dropdown">
                <button
                  className="dropdown-toggle-btn"
                  onClick={() => toggleDropdown(index)}
                >
                  {link.name}
                  <i
                    className={`bi ms-auto ${
                      openDropdown === index ? "bi-chevron-up" : "bi-chevron-down"
                    }`}
                  ></i>
                </button>
                <ul
                  className={`mobile-submenu ${
                    openDropdown === index ? "show" : ""
                  }`}
                >
                  {link.links.map((sub, i) => (
                    <li key={i}>
                      <Link to={sub.path} onClick={onClose}>
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={index}>
                <Link to={link.path} onClick={onClose}>
                  {link.name}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavigation;
