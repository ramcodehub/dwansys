import './CapabilitiesBanner.css';

const CapabilitiesBanner = ({ heading, content, backgroundImage }) => {
  return (
    <div className="full-width">
      <div className="capabilities-banner">
        <div className="capabilities-banner-top  d-flex flex-column align-iems-center justify-content-start">
          <h1>{heading}</h1>
          <p className="colored-logo fw-bold lh-sm">{content}</p>
        </div>
        <div
          className="capabilities-banner-bottom"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
    </div>
  );
};

export default CapabilitiesBanner;
