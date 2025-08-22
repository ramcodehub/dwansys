import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Demo from './pages/Demo';
import Detail from './pages/Detail';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-between m-5">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
