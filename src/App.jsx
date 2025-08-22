import "./App.css";
import PrimaryButton from "./components/Button/PrimaryButton"

function App() {
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-primary">Hello, Bootstrap 5 + Vite + React 🚀</h1>
        <button className="secondaryBtn">Get Started</button>
        <PrimaryButton></PrimaryButton>
      </div>
    </>
  );
}

export default App;
