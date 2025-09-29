import './Hero.css';

const Hero = ({ heading, content }) => {
  return (
    <div className="full-width">
      <div className="d-flex flex-column align-items-center justify-content-center px-5 bg-black w-100 hero">
        <h1 className="fw-bold m-0 p-0 lh-1 text-center">{heading}</h1>

        <p className="fw-medium text-center  lh-1 mx-auto text-white">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Hero;
