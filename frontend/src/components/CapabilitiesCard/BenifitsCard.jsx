import './BenifitsCard.css';
const BenifitsCard = ({ icon, heading, content }) => {
  return (
    <div className="w-100 p-3 d-flex flex-column flex-grow-1 gap-2 rounded-4 mb-3 capabilities-card">
      <div className="icon py-2 text-center rounded-2">
        <i className={`${icon} fs-2`}></i>
      </div>
      <div>
        <h3 className="colored">{heading}</h3>
        <p style={{ color: '#AAAAAA' }}>{content}</p>
      </div>
    </div>
  );
};

export default BenifitsCard;
