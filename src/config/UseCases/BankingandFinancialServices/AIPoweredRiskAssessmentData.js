import Overview from '../../../assets/images/Usecases-images/Banking and Financial Services/Risk Management and Credit Scoring1.jpeg';
import Image from '../../../assets/images/UsecasesRealWorld/AIPoweredRiskAssessment.jpg';

const AIPoweredRiskAssessmentData = {
  sections: [
    {
      type: 'hero',
      props: {
        heading: 'AI-Powered Risk Assessment',
        content:
          'Revolutionize financial risk management with AI-driven insights, predictive analytics, and real-time decision-making for smarter, faster, and fairer outcomes.',
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          'AI is revolutionizing the way financial institutions confront the daunting challenge of risk, igniting a new era of hope, precision, and confidence. By harnessing the immense power of both structured and unstructured data, AI drives lightning-fast, smarter, and profoundly more accurate decisions—fuelling the pursuit of financial security and fairness.',
        image: Overview,
      },
    },
    {
      type: 'real-world-example',
      props: {
        content:
          'Zest Finance embodies this transformative power. By applying AI-driven credit scoring to evaluate individuals with limited or no credit history, they ignite the flames of fairness and opportunity, paving the way toward a more inclusive financial world where everyone’s potential can be realized.',
        backgroundImage: Image,
      },
    },
    {
      type: 'key-applications',
      props: {
        Applications: [
          {
            icon: 'bi bi-credit-card',
            heading: 'AI-Driven Credit Scoring',
            content:
              'Analyses digital footprints, social data, and online transactions to uncover a true picture of creditworthiness, promoting financial inclusion.',
          },
          {
            icon: 'bi bi-graph-up-arrow',
            heading: 'Market Risk Prediction',
            content:
              'Employs AI models to forecast stock trends, interest rate shifts, and economic fluctuations, enabling proactive risk mitigation.',
          },
          {
            icon: 'bi bi-shield-check',
            heading: 'Loan Default Prediction',
            content:
              'Analyses borrower histories, spending patterns, and behavioural cues to predict potential defaults, reducing bad debts and improving financial stability.',
          },
        ],
      },
    },
  ],
};

export default AIPoweredRiskAssessmentData;
