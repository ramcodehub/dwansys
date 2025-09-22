import ContactUs from '../../pages/ContactUs/ContactUs';
import Button from '../Button/Button';
import './PopUp.css';

const PopUp = ({ show, onClose }) => {
  if (!show) return null;

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
