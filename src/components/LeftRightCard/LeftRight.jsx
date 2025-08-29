import AdvBg from '../../assets/images/Advanced Data Visualization.jpeg';
import BuildingAIFramework from '../../assets/images/AI Strategy Frameworks.jpeg';
import CdcBg from '../../assets/images/Comprehensive DataCollection.jpeg';
import DataCatalogue from '../../assets/images/DataCatalogue.jpg';
import DataGovernance from '../../assets/images/DataGovernance.jpg';
import DataQuality from '../../assets/images/DataQuality.jpg';
import DataSecurity from '../../assets/images/DataSecurity.jpg';
import Button from '../Button/Button';
import './LeftRight.css';

const LeftRight = ({ image, heading, description, imageLeft = true }) => {
  const images = {
    'adv_bg.png': AdvBg,
    'cdc_bg.png': CdcBg,
    'BuildingAIFramework.png': BuildingAIFramework,
    'DataGovernance.jpg': DataGovernance,
    'DataCatalogue.jpg': DataCatalogue,
    'DataQuality.jpg': DataQuality,
    'DataSecurity.jpg': DataSecurity,
  };
  return (
    <div className="d-flex flex-column flex-md-row align-items-center left-right">
      <div
        className={`w-50 d-flex align-items-start ${imageLeft ? 'order-md-1' : 'order-md-2'}`}
      >
        <img src={images[image]} alt={heading} className="rounded" />
      </div>
      <div
        className={`w-50  d-flex flex-column align-items-start ${imageLeft ? 'order-md-2' : 'order-md-1'}`}
      >
        <h2 className="text-start fs-2">{heading}</h2>
        <p className="text-start lh-2 fw-500">{description}</p>
        <Button
          variant="primary"
          icon={
            <i className="bi bi-arrow-right text-white" aria-hidden="true"></i>
          }
          ariaLabel="Learn more"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default LeftRight;
