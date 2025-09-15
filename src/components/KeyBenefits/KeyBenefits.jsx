import BenifitsCard from '../CapabilitiesCard/BenifitsCard';
import './KeyBenefits.css';

const KeyBenefits = ({ benefits }) => {
  return (
    <div className="container m-0 p-0 my-5">
      <h1 className="fw-bold my-3">KEY BENIFITS :</h1>
      <div className="rounded-4 px-3 pt-3 mt-4 key-benefits">
        <div className="row">
          {benefits.map((benefit, index) => (
            <div className="col-md-4 d-flex align-items-stretch" key={index}>
              <BenifitsCard
                icon={benefit.icon}
                heading={benefit.title}
                content={benefit.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;
