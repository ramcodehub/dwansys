const CapabilitiesContent = ({ heading, content }) => {
  return (
    <div className="mt-4">
      <h2 className="fw-bold">{heading}</h2>
      <p className="fs-5" style={{ color: '#AAAAAA' }}>
        {content}
      </p>
    </div>
  );
};

export default CapabilitiesContent;
