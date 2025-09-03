import { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.png';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      className={`header d-flex align-items-center justify-content-between w-100 position-fixed z-2 ${sticky ? 'fixed-header' : ''}`}
    >
      <img src={logo} alt="Logo" />
      <nav className="me-4 header-nav">
        <Navigation />
      </nav>
      <Button variant="secondary">Get Started</Button>
    </header>
  );
};

export default Header;
