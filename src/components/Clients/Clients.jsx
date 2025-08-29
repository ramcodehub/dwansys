import cnn from '../../assets/images/cnn.png';
import forbes from '../../assets/images/forbes.png';
import yahoo from '../../assets/images/yahoo.png';
import './Clients.css';

const MediaLogos = () => {
  return (
    <div className="d-flex align-items-center justify-content-around py-5 w-100 medialogosContainer">
      <img
        src={cnn}
        alt="cnn"
        width="100"
        height="40"
        className="medialogosImages"
      />
      <img src={yahoo} alt="cnn" width="100" className="medialogosImages" />
      <img src={forbes} alt="cnn" width="110" className="medialogosImages" />
      <img
        src={yahoo}
        alt="cnn"
        width="100"
        height="40"
        className="medialogosImages"
      />
    </div>
  );
};

export default MediaLogos;
