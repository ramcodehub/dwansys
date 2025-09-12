import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Demo from './pages/Demo';
import Detail from './pages/Detail';
import Home from './pages/Home/Home';
import LLMEvalution from './pages/AI_Solutions/LLMEvalution/LLMEvalution';
import DataMigration from './pages/DataSolutions/DataMigration/DataMigration';
import DataOrchestration from './pages/DataSolutions/DataOrchestration/DataOrchestration'

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/ai-solutions/llm-evalution" element={<LLMEvalution/>}/>
          <Route path='/data-migration-services' element={<DataMigration/>}/>
          <Route path='/data-orchestration' element={<DataOrchestration/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
