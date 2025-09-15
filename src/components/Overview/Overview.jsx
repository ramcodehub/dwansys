import './Overview.css';

const Overview = ({ content, image }) => {
  return (
    <div className="d-flex my-5 overview gap-5">
      <div className="d-flex flex-column align-items-start gap-3">
        <h1 className="fw-500">OVERVIEW :</h1>
        <p className="text-start">
          As organizations expand globally and manage countless data sources,
          the challenge of harmonizing information across systems can feel
          daunting. Data Orchestration transforms this complexity into
          opportunity — uniting fragmented data streams into a seamless,
          automated flow. By integrating, transforming, and delivering data in
          real time, orchestration empowers organizations to unlock insights
          faster, make smarter decisions, and accelerate innovation
          with confidence.
        </p>
      </div>
      <img src={image} className="rounded-4" />
    </div>
  );
};

export default Overview;
