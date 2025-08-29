import React from 'react'
import logo from '../../assets/images/logo.png';
import navLinks from '../../config/navLinks';
import './Footer.css'


const Footer = () => {
  return (
    <footer id="footer" className="footer p-5">
    <div className="footer-content my-5 ms-5 me-3">
      <div className="container" >
        <div className="row d-flex justify-content-between">
          <div className="col-lg-4 col-md-6">
            <div className="footer-info d-flex flex-column gap-2">
              <h4>Reach Us</h4>
              <p> We welcome your inquiries and would be <br/>pleased to hear from you.<br/>Please get in touch with us. </p>
               <h6><i className="bi bi-telephone me-2"></i> +91 9014986761</h6>
               <h6><i className="bi bi-envelope-fill me-2"></i> info@yvisoft.com</h6>
            </div>
          </div>
          <div className='col-lg-8 d-flex justify-content-around' >
          {navLinks.map((navLink,index)=>navLink.links&&(
            <div className="col-lg-3 col-md-6 footer-as" key={index}>
            <h4 className='colored'>{navLink.name}</h4>
            {navLink.links.map((link, i) => (
              <ul key={i} className='list-unstyled m-0 p-0'>
                <li className='mb-3 lh-1'><a>{link}</a></li>
               </ul>
            ))}
          </div>

          ))}
          <div className="footer-as">
            <h4 className='colored'>Insights</h4>
            <ul className='list-unstyled'>
                <li className='mb-2 lh-1'><a>Explore Dwansys</a></li>
                <li className='mb-2 lh-1'><a>Blog</a></li>
                <li className='lh-1'><a>Careers</a></li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>  
    <div className="footer-legal text-center">
      <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

        <div className="d-flex flex-column align-items-center align-items-lg-start">
          <div className="copyright d-flex align-items-center">
            <img src={logo} alt="Dwansys" width="200" style={{borderRight:'1px solid #414141'}}/>
            <p className='p-3'><span>&copy; 2025. dwansys. All rights reserved.</span></p>
         </div>
          <div className="credits">
          </div>
        </div>
        <div style={{color:'#AAAAAA'}}>
            <a>Privacy Policy <i className='bi bi-dot text-white'></i> Terms & Conditions</a>
        </div>
        {/* <div className="social-as order-first order-lg-last mb-3 mb-lg-0 d-flex align-items-center">
          <strong><span>Follow us:</span></strong>  
          <a href="https://www.aedin.com/company/yvi-soft-solutions-private-limited/" target="_blank" className="aedin"><i className="bi bi-aedin"></i></a> 
          <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
        </div> */}
      </div>
    </div>
  </footer>
  );
}

export default Footer
