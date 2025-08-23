import './Header.css';

import logo from '../../assets/images/logo.png';
import Button from '../Button/Button';

const Header = () => {
  return (
    <header className="header d-flex align-items-center justify-content-around">
      <img src={logo} alt="Logo" />
      <nav className="header-nav">
        <a href="#" className="header-link dropdown">
          Data Solution <i class="bi bi-chevron-down dropdown-icon"></i>
          <ul>
            <li><a href="#">Data Ingestion</a></li>
            <li><a href="#">Data Storagge</a></li>
            <li><a href="#">Data Transformation</a></li>
            <li><a href="#">Data Migration Services</a></li>
            <li><a href="#">Data Modelling</a></li>
            <li><a href="#">Data Orchestration</a></li>
          </ul>
        </a>
        <a href="#" className="header-link">
          Data Analytics <i class="bi bi-chevron-down dropdown-icon"></i>
        </a>
        <a href="#" className="header-link">
          AI Solutions <i class="bi bi-chevron-down dropdown-icon"></i>
        </a>
        <a href="#" className="header-link">
          Explore dwansys
        </a>
        <a href="#" className="header-link">
          Blogs
        </a>
        <a href="#" className="header-link">
          Careers
        </a>
        
      </nav>
      <Button variant='secondary' children='Get Started'/>
    </header>
  );
};

export default Header;
