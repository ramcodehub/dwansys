import './Header.css';

import logo from '../../assets/images/logo.png';
import Button from '../Button/Button';

const Header = () => {
  const navLinks = [
    {
      name: 'Data Solutions',
      links: [
        'Data Ingestion',
        'Data Storage',
        'Data Transformation',
        'Data Migration Services',
        'Data Modelling',
        'Data Orchestration',
      ],
    },
    {
      name: 'Data Analytics',
      links: [
        'Business Intelligence',
        'Machine Learning applications',
        'Automated Report Delivery',
      ],
    },
    {
      name: 'AI Solutions',
      links: [
        'AI powered Virtual Assistance',
        'Document Summarization',
        'LLM Evaluation',
        'RAG Application',
        'Tool Augmented Chatbots',
        'Agentic AI',
      ],
    },
    { name: 'Explore dwansys' },
    { name: 'Blogs' },
    { name: 'Careers' },
  ];
  return (
    <header className="header d-flex align-items-center justify-content-between ">
      <img src={logo} alt="Logo" />
      <nav className="me-4 header-nav">
        <ul className="list-unstyled m-0 p-0 d-flex gap  position-relative">
          {navLinks.map((link, index) =>
            link.links ? (
              <li key={index} className="dropdown">
                <a className="d-flex align-items-baseline text-decoration-none fw-medium header-link">
                  {link.name}{' '}
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
                <a className="d-flex align-items-baseline text-decoration-none fw-medium header-link">
                  {link.name}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
      <Button variant="secondary" children="Get Started" />
    </header>
  );
};

export default Header;
