import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AgenticAI from './pages/AI_Solutions/AgenticAI/AgenticAI';
// AI Solutions
import AIPoweredVirtualAssistance from './pages/AI_Solutions/AIPoweredVirtualAssistance/AIPoweredVirtualAssistance';
import DocumentSummarization from './pages/AI_Solutions/DocumentSummarization/DocumentSummarization';
import LLMEvaluation from './pages/AI_Solutions/LLMEvaluation/LLMEvaluation';
import MachineLearningApplications from './pages/DataAnalytics/MachineLearningApplications/MachineLearningApplications';
import RAGApplication from './pages/AI_Solutions/RAGApplication/RAGApplication';
import AutomatedReportDelivery from './pages/DataAnalytics/AutomatedReportDelivery/AutomatedReportDelivery';
import BusinessIntelligence from './pages/DataAnalytics/BusinessIntelligence/BusinessIntelligence';
import ToolAugmentedChatbots from './pages/AI_Solutions/ToolAugmentedChatbots/ToolAugmentedChatbots';

// Data Solutions
import DataIngestion from './pages/DataSolutions/DataIngestion/DataIngestion';
import DataMigration from './pages/DataSolutions/DataMigration/DataMigration';
import DataModelling from './pages/DataSolutions/DataModelling/DataModelling';
import DataOrchestration from './pages/DataSolutions/DataOrchestration/DataOrchestration';
import DataTransformation from './pages/DataSolutions/DataTransformation/DataTransformation';

// General
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />

         
          <Route path="/llm-evaluation" element={<LLMEvaluation />} />
          <Route path="/agentic-ai" element={<AgenticAI />} />
          <Route path="/machine-learning-applications" element={<MachineLearningApplications />} />
          <Route path="/ai-powered-virtual-assitance" element={<AIPoweredVirtualAssistance />} />
          <Route path="/business-intelligence" element={<BusinessIntelligence />} />
          <Route path="/document-summarization" element={<DocumentSummarization />} />
          <Route path="/rag-application" element={<RAGApplication />} />
          <Route path="/tool-augmented-chatbots" element={<ToolAugmentedChatbots />} />
          <Route path="/automated-report-delivery" element={<AutomatedReportDelivery />} />

         
          <Route path="/data-migration-services" element={<DataMigration />} />
          <Route path="/data-orchestration" element={<DataOrchestration />} />
          <Route path="/data-ingestion" element={<DataIngestion />} />
          <Route path="/data-transformation" element={<DataTransformation />} />
          <Route path="/data-modelling" element={<DataModelling />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
