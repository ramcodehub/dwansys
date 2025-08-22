import './Header.css';

import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" />
      <nav className="header-nav">
        <a href="#" className="header-link">
          Data Solution
        </a>
        <a href="#" className="header-link">
          Data Analytics
        </a>
        <a href="#" className="header-link">
          AI Solutions
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
    </header>
  );
};

export default Header;
