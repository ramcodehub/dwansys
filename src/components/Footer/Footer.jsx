import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import navLinks from '../../config/navLinks';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer px-5 pt-5 pb-4">
      <div className="footer-content my-5 ms-4 me-3">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-md-12 col-lg-6 col-xl-4">
              <div className="footer-info d-flex flex-column gap-2">
                <h4>Reach Us</h4>
                <p>
                  We welcome your inquiries and would be <br />
                  pleased to hear from you.
                  <br />
                  Please get in touch with us.
                </p>
                <h6>
                  <i className="bi bi-telephone me-2"></i> +91 9014986761
                </h6>
                <h6>
                  <i className="bi bi-envelope-fill me-2"></i> info@dwansys.ai
                </h6>
              </div>
            </div>
            <div className="col-md-12 col-lg-12 col-xl-8">
              <div className="col-xl-12 d-flex justify-content-around footer-links pe-1">
                {navLinks.map(
                  (navLink, index) =>
                    navLink.links && (
                      <div
                        className="col-12 col-md-6 col-lg-3  col-xl-3  footer-as"
                        key={index}
                      >
                        <h4 className="colored">{navLink.name}</h4>
                        <ul className="list-unstyled m-0 p-0">
                          {navLink.links.map((link, i) => (
                            <li className="mb-3 lh-1" key={i}>
                              <Link to={link.path}>{link.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                )}

                <div className="footer-as col-12 col-md-6 col-lg-3 col-xl-3 ms-4">
                  <h4 className="colored">Insights</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2 lh-1">
                      <Link to="/discover-dwansys">Discover Dwansys</Link>
                    </li>
                    <li className="mb-2 lh-1">
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li className="lh-1">
                      <Link to="/careers">Careers</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-legal text-center">
        <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
          <div className="d-flex flex-column align-items-center align-items-lg-start">
            <div className="copyright d-flex align-items-start">
              <img
                src={logo}
                alt="Dwansys"
                width="200"
                style={{ borderRight: '1px solid #414141' }}
              />
              <p className="pt-3 ps-3">
                <span>&copy; 2025. dwansys. All rights reserved.</span>
              </p>
            </div>
          </div>
          <div style={{ color: '#AAAAAA' }}>
            <a href="#">
              Privacy Policy <i className="bi bi-dot text-white"></i> Terms &
              Conditions
            </a>
          </div>
          <div className="social-links   mb-3 mb-lg-0 d-flex flex-column align-items-center">
            <strong>
              <span>Follow us:</span>
            </strong>
            <div>
              <a href="https://www.linkedin.com/company/dwansys-technologies-private-limited/" target="_blank" className="linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61581184911014"
                target="_blank"
                className="facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/dwansys/"
                target="_blank"
                className="instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://x.com/dwansys" target="_blank" className="twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
