import Overview from '../../../assets/images/Usecases-images/Insurance/AI in Risk Assessment & Underwriting1.jpeg';
import Image from '../../../assets/images/UsecasesRealWorld/Ai in risk assessment and underwriting.webp';

const AIRiskAssessmentAndUnderwritingData = {
  sections: [
    {
      type: 'hero',
      props: {
        heading: 'AI in Risk Assessment & Underwriting',
        content:
          'Enhance accuracy and efficiency in risk assessment and underwriting with AI-driven insights and automation.',
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          'AI is transforming risk assessment and underwriting by automating processes and improving accuracy. By analysing vast amounts of structured and unstructured data, AI enables insurers and financial institutions to evaluate risks more precisely and deliver faster, fairer outcomes.',
        image: Overview,
      },
    },
    {
      type: 'real-world-example',
      props: {
        content:
          'Lemonade Insurance leverages AI-driven underwriting to approve policies in seconds, enhancing customer experience while reducing operational costs.',
        backgroundImage: Image,
      },
    },
    {
      type: 'key-applications',
      props: {
        Applications: [
          {
            icon: 'bi bi-clipboard-data',
            heading: 'Automated Risk Analysis',
            content:
              'AI evaluates historical claims, financial records, lifestyle patterns, and external risk factors to provide a comprehensive risk profile.',
          },
          {
            icon: 'bi bi-cash-coin',
            heading: 'Dynamic Pricing Models',
            content:
              'Premiums and policy pricing are dynamically adjusted based on individual behaviour, transaction history, and real-time risk indicators.',
          },
          {
            icon: 'bi bi-journal-check',
            heading: 'Automated Underwriting',
            content:
              'AI accelerates the underwriting process by analysing credit scores, medical history, and supporting documents—significantly reducing manual intervention.',
          },
        ],
      },
    },
  ],
};

export default AIRiskAssessmentAndUnderwritingData;
