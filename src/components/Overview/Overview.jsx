import './Overview.css';

const Overview = ({ content, image }) => {
  return (
    <div className="d-flex my-5 overview gap-5">
      <div className="d-flex flex-column align-items-start gap-3">
        <h1 className="fw-500">OVERVIEW :</h1>
        <p className="text-start">{content}</p>
      </div>
      <img src={image} className="rounded-4" />
    </div>
  );
};

export default Overview;
