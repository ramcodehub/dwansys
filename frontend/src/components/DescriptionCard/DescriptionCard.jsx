import './DescriptionCard.css';

const DescriptionCard = ({ Para1, Para2, Para3, Para4, Image1, Image2 }) => {
  return (
    <div className="description-card d-flex flex-column ">
      <div className="d-flex my-5 desc-img align-items-center gap-5 break-anywhere">
        <p className="text-start  fs-5">{Para1}</p>
        <img src={Image1} className="rounded-4" />
      </div>
      <p className="m-0 p-0 fs-5 break-anywhere">{Para2}</p>
      <div className="d-flex my-5 desc-img align-items-center gap-5">
        <img src={Image2} className="rounded-4" />
        <p className="text-start break-anywhere fs-5">{Para3}</p>
      </div>
      {Para4 && <p className="m-0 p-0 fs-5 break-anywhere">{Para4}</p>}
    </div>
  );
};

export default DescriptionCard;
