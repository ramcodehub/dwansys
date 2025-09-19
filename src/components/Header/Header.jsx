import { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.png';
import Button from '../Button/Button';
import PopUp from "../PopUp/PopUp";
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [showContact, setShowContact] = useState(false);
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
      className={`header d-flex align-items-center justify-content-between w-100 position-fixed  ${sticky ? 'fixed-header' : ''}`}
    >
      <img src={logo} alt="Logo" />
      <nav className="me-4 header-nav">
        <Navigation />
      </nav>
      <Button variant="secondary" onClick={() => setShowContact(true)}>Get Started</Button>
      <PopUp show={showContact} onClose={() => setShowContact(false)} />

    </header>
  );
};

export default Header;
