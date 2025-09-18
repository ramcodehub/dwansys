import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AgenticAI from './pages/AI_Solutions/AgenticAI/AgenticAI';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
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

// Insurance
import AIPoweredPricingPersonalizedInsurance from './pages/UseCases/Insurance/AIPoweredPricingPersonalizedInsurance';
import AIinRiskAssessmentUnderwriting from './pages/UseCases/Insurance/AIinRiskAssessmentUnderwriting';
import FraudDetectionPrevention from './pages/UseCases/Insurance/FraudDetectionPrevention';
import PredictiveAnalyticsforClaimsManagement from './pages/UseCases/Insurance/PredictiveAnalyticsforClaimsManagement';
import RegulatoryComplianceDocumentProcessing from './pages/UseCases/Insurance/RegulatoryComplianceDocumentProcessing';
import AIinAutoHealthPropertyInsurance from './pages/UseCases/Insurance/AIinAutoHealthPropertyInsurance';

// HealthcareAndLifeSciences
import WearableHealthTechRemoteMonitoring from './pages/UseCases/HealthcareAndLifeSciences/WearableHealthTechRemoteMonitoring';
import PredictiveAnalyticsforDiseaseOutbreaks from './pages/UseCases/HealthcareAndLifeSciences/PredictiveAnalyticsforDiseaseOutbreaks';
import GenomicsandPrecisionMedicine from './pages/UseCases/HealthcareAndLifeSciences/GenomicsandPrecisionMedicine';
import AIinDrugDiscoveryandDevelopment from './pages/UseCases/HealthcareAndLifeSciences/AIinDrugDiscoveryandDevelopment';
import AIinMentalHealth from './pages/UseCases/HealthcareAndLifeSciences/AIinMentalHealth';
import AIinMedicalDiagnosisandImagingAnalysis from './pages/UseCases/HealthcareAndLifeSciences/AIinMedicalDiagnosisandImagingAnalysis';
import AIinHospitalOperationsWorkflowOptimization from './pages/UseCases/HealthcareAndLifeSciences/AIinHospitalOperationsWorkflowOptimization';

// Sustainability
import SocialSentimentAnalysis from './pages/UseCases/Sustainability/SocialSentimentAnalysis';
import ResourceEfficiency from './pages/UseCases/Sustainability/ResourceEfficiency';
import FraudEthicsMonitoring from './pages/UseCases/Sustainability/FraudEthicsMonitoring';
import ClimateRiskModelling from './pages/UseCases/Sustainability/ClimateRiskModelling';
import CarbonEmissionsMonitoring from './pages/UseCases/Sustainability/CarbonEmissionsMonitoring';
import WorkplaceSafetyMonitoring from './pages/UseCases/Sustainability/WorkplaceSafetyMonitoring';


// BankingAndFinancialServices
import FraudDetectionPreventionwithAI from './pages/UseCases/BankingAndFinancialServices/FraudDetectionPreventionwithAI';
import AIPoweredRiskAssessment from './pages/UseCases/BankingAndFinancialServices/AIPoweredRiskAssessment';
import AIPoweredLoanApprovals from './pages/UseCases/BankingAndFinancialServices/AIPoweredLoanApprovals';
import AIPoweredInvestmentOptimization from './pages/UseCases/BankingAndFinancialServices/AIPoweredInvestmentOptimization';
import AIPoweredComplianceAndAntiMoneyLaundering from './pages/UseCases/BankingAndFinancialServices/AIPoweredComplianceAndAntiMoneyLaundering';
import AIPoweredBankingAutomationAndProcessOptimization from './pages/UseCases/BankingAndFinancialServices/AIPoweredBankingAutomationAndProcessOptimization';
import AIPoweredAlgorithmicTrading from './pages/UseCases/BankingAndFinancialServices/AIPoweredAlgorithmicTrading';
import AIEnhancedCybersecurityforFinancialSecurity from './pages/UseCases/BankingAndFinancialServices/AIEnhancedCybersecurityforFinancialSecurity';



// General
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <ScrollToTop/>
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


          {/* Insurance */}
          <Route path='/ai-powered-pricing-personalized-insurance' element={<AIPoweredPricingPersonalizedInsurance/>}/>
          <Route path='/ai-in-risk-assessment-underwriting' element={<AIinRiskAssessmentUnderwriting/>}/>
          <Route path='/fraud-detection-prevention' element={<FraudDetectionPrevention/>}/>
          <Route path='/predictive-analytics-for-claims-management' element={<PredictiveAnalyticsforClaimsManagement/>}/>
          <Route path='/regulatory-compliance-document-processing' element={<RegulatoryComplianceDocumentProcessing/>}/>
          <Route path='/ai-in-auto-health-property-insurance' element={<AIinAutoHealthPropertyInsurance/>}/>

          {/* HealthcareAndLifeSciences */}
          <Route path='/wearable-health-tech-remote-monitoring' element={<WearableHealthTechRemoteMonitoring/>}/>
          <Route path='/predictive-analytics-for-disease-outbreaks' element={<PredictiveAnalyticsforDiseaseOutbreaks/>}/>
          <Route path='/genomics-and-precision-medicine' element={<GenomicsandPrecisionMedicine/>}/>
          <Route path='/ai-in-drug-discovery-and-development' element={<AIinDrugDiscoveryandDevelopment/>}/>
          <Route path='/ai-in-mental-health' element={<AIinMentalHealth/>}/>
          <Route path='/ai-in-medical-diagnosis-and-imaging-analysis' element={<AIinMedicalDiagnosisandImagingAnalysis/>}/>
          <Route path='/ai-in-hospital-operations-workflow-optimization' element={<AIinHospitalOperationsWorkflowOptimization/>}/>

          {/* Sustainability */}
          <Route path='/social-sentiment-analysis' element={<SocialSentimentAnalysis/>}/>
          <Route path='/resource-efficiency' element={<ResourceEfficiency/>}/>
          <Route path='/fraud-ethics-monitoring' element={<FraudEthicsMonitoring/>}/>
          <Route path='/climate-risk-modelling' element={<ClimateRiskModelling/>}/>
          <Route path='/carbon-emissions-monitoring' element={<CarbonEmissionsMonitoring/>}/>
          <Route path='/workplace-safety-monitoring' element={<WorkplaceSafetyMonitoring/>}/>

          {/* BankingAndFinancialServices */}
          <Route path='/fraud-detection-prevention-with-ai' element={<FraudDetectionPreventionwithAI/>}/>
          <Route path='/ai-powered-risk-assessment' element={<AIPoweredRiskAssessment/>}/>
          <Route path='/ai-powered-loan-approvals' element={<AIPoweredLoanApprovals/>}/>
          <Route path='/ai-powered-investment-optimization' element={<AIPoweredInvestmentOptimization/>}/>
          <Route path='/ai-powered-compliance-and-anti-money-laundering' element={<AIPoweredComplianceAndAntiMoneyLaundering/>}/>
          <Route path='/ai-powered-banking-automation-and-process-optimization' element={<AIPoweredBankingAutomationAndProcessOptimization/>}/>
          <Route path='/ai-powered-algorithmic-trading' element={<AIPoweredAlgorithmicTrading/>}/>
          <Route path='/ai-enhanced-cybersecurity-for-financial-security' element={<AIEnhancedCybersecurityforFinancialSecurity/>}/>

          
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
