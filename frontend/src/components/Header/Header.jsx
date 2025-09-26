import { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.png';
import Button from '../Button/Button';
import PopUp from "../PopUp/PopUp";
import Navigation from '../Navigation/Navigation';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [mobileNavOpen,setMobileNavOpen]=useState(false);
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
      <nav className=" d-flex justify-content-between header-nav" >
        <Navigation />
      </nav>
      <div className="d-flex align-items-center gap-3">
        <ThemeToggle />
        <Button variant="secondary" onClick={() => setShowContact(true)} className='navBar-Btn'>Get Started</Button>
      </div>
      <PopUp show={showContact} onClose={() => setShowContact(false)} />
      <button
        className="mobile-menu-btn d-md-none"
        onClick={() => setMobileNavOpen(true)}
        aria-label="Open mobile menu"
      >
        <i className="bi bi-list"></i>
      </button>

      <MobileNavigation
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
    </header>
  );
};

export default Header;
