import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ image, heading, description ,link}) => {
  // const images = {
  //   'adv_bg.png': AdvBg,
  //   'cdc_bg.png': CdcBg,
  //   'BuildingAIFramework.png': BuildingAIFramework,
  //   'DataGovernance.jpg': DataGovernance,
  // };
  return (
    <div className="d-flex flex-column align-items-start justify-content-center p-3 d-inline rounded-4 card">
      <img
        src={image}
        alt={heading}
        className="pb-3 rounded-2 card-img-top object-fit-cover"
      />
      <h2 className="text-start colored fs-3">{heading}</h2>
      <p className="text-start lh-2 fs-6 fw-800">{description}</p>
       
       <Link to={link} className='primaryBtn bg-black text-decoration-none ps-1 d-flex gap-3'>Learn More <i className="bi bi-arrow-right text-white" aria-hidden="true"></i> </Link>
       
      {/* <Button
        variant="primary"
        icon={
          <i className="bi bi-arrow-right text-white" aria-hidden="true"></i>
        }
        ariaLabel="Learn more"
      >
        Learn More
      </Button> */}
    </div>
  );
};

export default Card;
