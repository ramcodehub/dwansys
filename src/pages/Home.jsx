import Banner from '../components/Banner/Banner';
import Button from '../components/Button/Button';
import Video from '../components/Video/Video.jsx';

const Home = () => {
  return (
    <div className="d-flex flex-column gap-3 align-items-center">
      <Banner/>
      <Video/>
      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>
      <Button variant="secondary">Get Started</Button>
      <Button
        variant="primary"
        icon={
          <i className="bi bi-arrow-right text-white" aria-hidden="true"></i>
        }
        ariaLabel="Learn more"
      >
        Learn More
      </Button>
    </div>
  );
};

export default Home;
