import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="flex-row">
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
}

export default App;
