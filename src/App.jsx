import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Demo from './pages/Demo';
import Detail from './pages/Detail';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
