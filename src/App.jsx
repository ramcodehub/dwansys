import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Demo from './pages/Demo';
import Detail from './pages/Detail';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
    </>
  );
}

export default App;
