import './RealWorld.css';

const RealWorld = ({ content, backgroundImage }) => {
  return (
    <div className="my-4">
      <h1 className="fw-bold mb-4">REAL WORLD EXAMPLE :</h1>
      <div
        className="real-world rounded-4"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <p className="fs-5 fw-large ps-3">{content}</p>
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default RealWorld;
