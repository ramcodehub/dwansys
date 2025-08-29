import './Subscribe.css';

const Subscribe = () => {
  return (
    <div className="d-flex align-items-center justify-content-between text-start rounded-4 subscribe">
      <div className="col-lg-6">
        <h2 className="lh-1">Subscribe to our list</h2>
        <p className="lh-1 m-0 p-0" style={{ color: '#AAAAAA' }}>
          Stay up to date with the industry trends.
          <br />
          Don’t worry we won’t spam.
        </p>
      </div>
      <div className="col-lg-6 position-relative">
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-black rounded-3"
          style={{ padding: '1.25rem' }}
        />
        <button className="px-5 py-3 fs-6 rounded-3">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
