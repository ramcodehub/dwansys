import logo from '../../assets/images/logo.png';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
  return (
    <header className="header d-flex align-items-center justify-content-between ">
      <img src={logo} alt="Logo" />
      <nav className="me-4 header-nav">
        <Navigation />
      </nav>
      <Button variant="secondary">Get Started</Button>
    </header>
  );
};

export default Header;
