import Button from "../Button/Button";
import ContactUs from '../../pages/ContactUs/ContactUs';
import "./PopUp.css";

const PopUp = ({ show, onClose }) => {
  if (!show) return null; // don’t render when hidden

  return (
    <div className="contact-overlay">
      <div className="popup">
        <ContactUs />
        <Button className="close-btn" onClick={onClose}>
          ✖
        </Button>
        
      </div>
    </div>
  );
};

export default PopUp;
