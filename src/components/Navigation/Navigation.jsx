import { Link } from 'react-router-dom';
import navLinks from '../../config/navLinks';

const Navigation = () => (
  <ul className="list-unstyled m-0 p-0 d-flex gap position-relative">
    {navLinks.map((link, index) =>
      link.links ? (
        <li key={index} className="dropdown">
          <span className="d-flex align-items-baseline text-decoration-none fw-medium header-link">
            {link.name}
            <i className="bi bi-chevron-down dropdown-icon"></i>
          </span>
          <ul className="d-flex flex-column position-absolute m-0 p-2 rounded dropdown-menu shadow z-3">
            {link.links.map((subLink, i) => (
              <li key={i} className="list-unstyled">
                <Link
                  className="m-0 p-0 text-decoration-none"
                  to={subLink.path}
                >
                  {subLink.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ) : (
        <li key={index}>
          <Link
            className="d-flex align-items-baseline text-decoration-none fw-medium header-link"
            to={link.path}
          >
            {link.name}
          </Link>
        </li>
      )
    )}
  </ul>
);

export default Navigation;
