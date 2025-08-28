import CarbonEmissionsMonitoring from '../assets/images/Usecases-images/Sustainability/Carbon Emissions Monitoring1.jpeg'
import ClimateRiskModelling from '../assets/images/Usecases-images/Sustainability/Climate Risk Modelling1.jpeg'
import SocialSentimentAnalysis from '../assets/images/Usecases-images/Sustainability/Social Sentiment Analysis.jpeg'
import FraudEthicsMonitoring from '../assets/images/Usecases-images/Sustainability/Fraud & Ethics Monitoring.jpeg'
import ResourceEfficiency from '../assets/images/Usecases-images/Sustainability/Resource Efficiency2.jpeg'
import WorkplaceSafetyMonitoring from '../assets/images/Usecases-images/Sustainability/Workplace Safety Monitoring2.jpeg'
import AIHospitalOperationsWorkflowOptimization from '../assets/images/Usecases-images/Healthcare and Life Sciences HLS/AI in Hospital Operations & Workflow Optimization2.jpeg'
import AIMedicalDiagnosisImagingAnalysis from '../assets/images/Usecases-images/Healthcare and Life Sciences HLS/AI in Medical Diagnosis and Imaging Analysis2.jpeg'
import AIMentalHealth from '../assets/images/Usecases-images/Healthcare and Life Sciences HLS/AI in Mental   Health1.jpeg'
import DrugDiscoveryDevelopment from '../assets/images/Usecases-images/Healthcare and Life Sciences HLS/Drug Discovery and Development1.jpeg'
import GenomicsPrecisionMedicine from '../assets/images/Usecases-images/Healthcare and Life Sciences HLS/Genomics and Precision Medicine1.jpeg'
import PredictiveAnalyticsforDiseaseOutbreaks from '../assets/images/Usecases-images/Healthcare and Life Sciences HLS/Predictive Analytics for Disease Outbreaks2.jpeg'
import WearableHealthTechRemoteMonitoring from '../assets/images/Usecases-images/Healthcare and Life Sciences HLS/Wearable Health Tech & Remote Monitoring3.jpeg'
import AIAutoHealthPropertyInsurance from '../assets/images/Usecases-images/Insurance/AI in Auto Health and Property Insurance.jpeg'
import AIRiskAssessmentUnderwriting from '../assets/images/Usecases-images/Insurance/AI in Risk Assessment & Underwriting2.jpeg'
import AIPoweredPricingPersonalizedInsurance from '../assets/images/Usecases-images/Insurance/AI-Powered Pricing & Personalized Insurance.jpeg'
import FraudDetectionPrevention from '../assets/images/Usecases-images/Insurance/Fraud Detection & Prevention0.jpeg'
import PredictiveAnalyticsforClaimsManagement from '../assets/images/Usecases-images/Insurance/Predictive Analytics for Claims Management2.jpeg'
import RegulatoryComplianceDocumentProcessing from '../assets/images/Usecases-images/Insurance/Regulatory Compliance & Document Processing.jpeg'
import AIInvestmentWealthManagement from '../assets/images/Usecases-images/Banking and Financial Services/AI in Investment and Wealth Management2.jpeg'
import AIEnhancedCybersecurityforFinancialSecurity from '../assets/images/Usecases-images/Banking and Financial Services/AI-Enhanced Cybersecurity for Financial Security2.jpeg'
import AIPoweredAlgorithmicTrading from '../assets/images/Usecases-images/Banking and Financial Services/AI-Powered Algorithmic Trading2.jpeg'
import RiskManagementCreditScoring from '../assets/images/Usecases-images/Banking and Financial Services/Risk Management and Credit Scoring2.jpeg'
import FraudDetectionUsecase from '../assets/images/Usecases-images/Banking and Financial Services/Fraud Detection Usecase2.jpeg'
import AIPoweredLoanApprovals from '../assets/images/Usecases-images/Banking and Financial Services/AI-Powered Loan Approvals2.jpeg'
import AIPoweredComplianceAntiMoneyLaundering from '../assets/images/Usecases-images/Banking and Financial Services/AI-Powered Compliance & Anti-Money Laundering (AML)2.jpeg'
import AIPoweredBankingAutomationProcessOptimization from '../assets/images/Usecases-images/Banking and Financial Services/AI-Powered Banking Automation & Process Optimization2.jpeg'



const UseCasesData=[
    {
        tab : 'tab-1',
        name : 'Sustainability',
        cardData : [{
            name: 'Workplace Safety Monitoring',
            description : "Workplace safety monitoring powered by AI and IoT ensures organizations protect their employees while aligning with ESG goals.",
            image : WorkplaceSafetyMonitoring
        },
        {
            name: 'Social Sentiment Analysis',
            description : "Social sentiment analysis empowers organizations to understand public perception and stakeholder expectations around their ESG performance.",
            image : SocialSentimentAnalysis
        },
        {
            name: 'Resource Efficiency',
            description : "In today's sustainability-driven landscape, businesses are under pressure to do more with less.",
            image : ResourceEfficiency
        },
        {
            name: 'Fraud & Ethics Monitoring',
            description : "Fraud and unethical practices not only damage reputation but also pose significant risks to ESG compliance.",
            image : FraudEthicsMonitoring
        },
        {
            name: 'Climate Risk Modelling',
            description : "AI-driven climate risk modelling empowers organizations to anticipate and mitigate the impact of environmental changes on their business operations and assets.",
            image : ClimateRiskModelling
        },
        {
            name: 'Carbon Emissions Monitoring',
            description : "Organizations today face increasing pressure to comply with ESG standards and reduce their carbon footprint.",
            image : CarbonEmissionsMonitoring
        }
        ]
    },
    {
        tab : 'tab-2',
        name : 'Healthcare & Life Sciences',
        cardData : [{
            name: 'Wearable Health Tech & Remote Monitoring',
            description : "AI-powered wearable devices and IoT sensors are transforming healthcare by enabling continuous, real-time monitoring of patient health.",
            image : WearableHealthTechRemoteMonitoring
        },
        {
            name: 'Predictive Analytics for Disease Outbreaks',
            description : "AI is transforming public health by predicting and managing disease outbreaks through advanced data analysis.",
            image : PredictiveAnalyticsforDiseaseOutbreaks
        },
        {
            name: 'Genomics and Precision Medicine',
            description : "AI is transforming healthcare by enabling highly personalized treatment plans that account for genetic, clinical, and lifestyle data.",
            image : GenomicsPrecisionMedicine
        },
        {
            name: 'AI in Drug Discovery and Development',
            description : "Artificial Intelligence is transforming the pharmaceutical industry by significantly reducing the time and cost required to discover and develop new drugs.",
            image : DrugDiscoveryDevelopment
        },
        {
            name: 'AI in Mental Health',
            description : "AI is revolutionizing mental health care, igniting a beacon of hope for countless lives.",
            image : AIMentalHealth
        },
        {
            name: 'AI in Medical Diagnosis and Imaging Analysis',
            description : "Artificial Intelligence is revolutionizing healthcare diagnostics, igniting a profound hope for millions by making disease detection faster and astonishingly more accurate through cutting-edge medical imaging.",
            image : AIMedicalDiagnosisImagingAnalysis
        },
        {
            name: 'AI in Hospital Operations & Workflow Optimization',
            description : "AI is revolutionizing the very soul of our hospitals, igniting a profound change that touches the lives of patients and healthcare workers alike.",
            image : AIHospitalOperationsWorkflowOptimization
        }
        ]
    },
    {
        tab : 'tab-3',
        name : 'Insurance',
        cardData : [{
            name: 'Regulatory Compliance & Document Processing',
            description : "AI streamlines compliance management and document handling, ensuring accuracy and reducing risks for insurers.",
            image : PredictiveAnalyticsforClaimsManagement
        },
        {
            name: 'Predictive Analytics for Claims Management',
            description : "AI transforms claim processing by enabling faster, smarter, and more accurate settlements.",
            image : RegulatoryComplianceDocumentProcessing
        },
        {
            name: 'Fraud Detection & Prevention',
            description : "AI is transforming insurance fraud detection by uncovering hidden anomalies and verifying claims with precision.",
            image : FraudDetectionPrevention
        },
        {
            name: 'AI-Powered Pricing & Personalized Insurance',
            description : "AI is transforming the insurance industry by enabling dynamic, customer-centric pricing models that go beyond traditional risk assessments.",
            image : AIPoweredPricingPersonalizedInsurance
        },
        {
            name: 'AI in Risk Assessment & Underwriting',
            description : "AI is transforming risk assessment and underwriting by automating processes and improving accuracy.",
            image : AIRiskAssessmentUnderwriting
        },
        {
            name: 'AI in Auto, Health, and Property Insurance',
            description : "Artificial Intelligence is reshaping the insurance sector by enabling smarter risk assessment, personalized pricing, and faster claims management across auto, health, and property segments.",
            image : AIAutoHealthPropertyInsurance
        }
        ]
    },
    {
        tab : 'tab-4',
        name : 'Banking & Financial Services',
        cardData : [{
            name: 'Fraud Detection & Prevention with AI',
            description : "Safeguard your business and truly protect the people who place their trust in you with the unstoppable force of AI-driven fraud prevention.",
            image : FraudDetectionUsecase
        },
        {
            name: 'AI-Powered Risk Assessment',
            description : "AI is revolutionizing the way financial institutions confront the daunting challenge of risk, igniting a new era of hope, precision, and confidence.",
            image : RiskManagementCreditScoring
        },
        {
            name: 'AI-Powered Loan Approvals',
            description : "Artificial Intelligence is revolutionizing the very essence of lending, igniting a wave of hope, opportunity, and inclusivity.",
            image : AIPoweredLoanApprovals
        },
        {
            name: 'AI-Powered Investment Optimization',
            description : "Artificial Intelligence is transforming the very heart of investment, igniting a new era fuelled by boundless potential and unwavering precision.",
            image : AIInvestmentWealthManagement
        },
        {
            name: 'AI-Powered Compliance & Anti-Money Laundering (AML)',
            description : "Artificial Intelligence is revolutionizing the very heart of regulatory compliance, igniting a powerful wave of transformation that safeguards our financial world.",
            image : AIPoweredComplianceAntiMoneyLaundering
        },
        {
            name: 'AI-Powered Banking Automation & Process Optimization',
            description : "Artificial Intelligence is revolutionizing the world of banking, infusing it with a new level of innovation, efficiency, and promise.",
            image : AIPoweredBankingAutomationProcessOptimization
        },
        {
            name: 'AI-Powered Algorithmic Trading',
            description : "AI is revolutionizing capital markets, igniting a passionate wave of innovation that propels us into a future brighter than ever before.",
            image : AIPoweredAlgorithmicTrading
        },
        {
            name: 'AI-Enhanced Cybersecurity for Financial Security',
            description : "AI is revolutionizing the very essence of our financial security, igniting a fierce battle against cyber threats with unwavering determination.",
            image : AIEnhancedCybersecurityforFinancialSecurity
        }
        ]
    }
];
export default UseCasesData