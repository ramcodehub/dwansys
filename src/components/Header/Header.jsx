import './Header.css';

import logo from '../../assets/images/logo.png';
import Button from '../Button/Button';

const Header = () => {
  return (
    <header className="header d-flex align-items-center justify-content-around">
      <img src={logo} alt="Logo" />
      <nav className="header-nav">
        <ul>
          <li className="dropdown">
            <a href="#" className="header-link">
              Data Solutions <i class="bi bi-chevron-down dropdown-icon"></i>
            </a>
            <ul>
              <li>
                <a href="#">Data Ingestion</a>
              </li>
              <li>
                <a href="#">Data Storage</a>
              </li>
              <li>
                <a href="#">Data Transformation</a>
              </li>
              <li>
                <a href="#">Data Migration Services</a>
              </li>
              <li>
                <a href="#">Data Modelling</a>
              </li>
              <li>
                <a href="#">Data Orchestration</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="header-link">
              Data Analytics <i class="bi bi-chevron-down dropdown-icon"></i>
            </a>
            <ul>
              <li>
                <a href="#">Data Ingestion</a>
              </li>
              <li>
                <a href="#">Data Storage</a>
              </li>
              <li>
                <a href="#">Data Transformation</a>
              </li>
              <li>
                <a href="#">Data Migration Services</a>
              </li>
              <li>
                <a href="#">Data Modelling</a>
              </li>
              <li>
                <a href="#">Data Orchestration</a>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#" className="header-link">
              AI Solutions <i class="bi bi-chevron-down dropdown-icon"></i>
            </a>
            <ul>
              <li>
                <a href="#">Data Ingestion</a>
              </li>
              <li>
                <a href="#">Data Storage</a>
              </li>
              <li>
                <a href="#">Data Transformation</a>
              </li>
              <li>
                <a href="#">Data Migration Services</a>
              </li>
              <li>
                <a href="#">Data Modelling</a>
              </li>
              <li>
                <a href="#">Data Orchestration</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="header-link">
              Explore dwansys
            </a>
          </li>
          <li>
            <a href="#" className="header-link">
              Blogs
            </a>
          </li>
          <li>
            <a href="#" className="header-link">
              Careers
            </a>
          </li>
        </ul>
      </nav>
      <Button variant="secondary" children="Get Started" />
    </header>
  );
};

export default Header;
