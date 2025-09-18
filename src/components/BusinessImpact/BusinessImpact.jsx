const BusinessImpact = ({ points }) => {
  return (
    <div className="col-lg-12 d-flex flex-column justify-content-center pt-3">
      <h1 className="fw-bold">BUSSINESS IMPACT :</h1>
      <div className="content">
        {points.map((point, index) => (
          <div key={index} className="mt-4 ps-4">
            <p style={{ color: '#AAAAAA', fontSize: '1.25rem' }}>
              <strong className="fs-5" style={{ color: '#ffffff' }}>
                {point.title}
              </strong>{' '}
              {point.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessImpact;
