import navLinks from '../../config/navLinks';

const Navigation = () => (
  <ul className="list-unstyled m-0 p-0 d-flex gap position-relative">
    {navLinks.map((link, index) =>
      link.links ? (
        <li key={index} className="dropdown">
          <a
            className="d-flex align-items-baseline text-decoration-none fw-medium header-link"
            href="#"
          >
            {link.name}
            <i className="bi bi-chevron-down dropdown-icon"></i>
          </a>
          <ul className="d-flex flex-column position-absolute m-0 p-2 rounded dropdown-menu shadow z-3">
            {link.links.map((link, i) => (
              <li key={i} className="list-unstyled">
                <a className="m-0 p-0 text-decoration-none">{link}</a>
              </li>
            ))}
          </ul>
        </li>
      ) : (
        <li key={index}>
          <a
            className="d-flex align-items-baseline text-decoration-none fw-medium header-link"
            href="#"
          >
            {link.name}
          </a>
        </li>
      )
    )}
  </ul>
);

export default Navigation;
