import { useState } from "react";
import { Link } from "react-router-dom";
import navLinks from "../../config/navLinks";

const Navigation = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <ul className="list-unstyled m-0 p-0 d-flex gap position-relative">
      {navLinks.map((link, index) =>
        link.links ? (
          <li
            key={index}
            className="dropdown"
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <span className="d-flex align-items-baseline text-decoration-none fw-medium header-link">
              {link.name}
              <i className="bi bi-chevron-down dropdown-icon"></i>
            </span>

            {openIndex === index && (
              <ul className="d-flex flex-column position-absolute m-0 p-2 rounded dropdown-menu shadow z-3">
                {link.links.map((subLink, i) => (
                  <li key={i} className="list-unstyled">
                    <Link
                      className="m-0 p-0 text-decoration-none"
                      to={subLink.path}
                      onClick={() => setOpenIndex(null)} // ✅ closes dropdown on click
                    >
                      {subLink.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ) : (
          <li key={index}>
            <Link
              className="d-flex align-items-baseline text-decoration-none fw-medium header-link"
              to={link.path}
              onClick={() => setOpenIndex(null)} // ✅ also closes any open dropdown
            >
              {link.name}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default Navigation;
