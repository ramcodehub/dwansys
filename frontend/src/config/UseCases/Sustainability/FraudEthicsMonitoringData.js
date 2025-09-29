import Overview from '../../../assets/images/Usecases-images/Sustainability/Fraud & Ethics Monitoring2.jpeg';
import Image from '../../../assets/images/UsecasesRealWorld/Fraud detection and prevention1.jpg';

const FraudEthicsMonitoringData = {
  sections: [
    {
      type: 'hero',
      props: {
        heading: 'Fraud and Ethics Monitoring',
        content:
          'Stay secure and compliant. Monitor fraud risks and ethical practices to safeguard your business and reputation.',
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          'Fraud and unethical practices not only damage reputation but also pose significant risks to ESG compliance. AI-powered monitoring systems help organizations detect, prevent, and address fraud or unethical behaviour in real-time, ensuring integrity and accountability across operations.',
        image: Overview,
      },
    },
    {
      type: 'real-world-example',
      props: {
        content:
          'Siemens leverages AI-driven fraud detection tools to monitor financial transactions and third-party engagements, ensuring ethical practices and compliance with global ESG standards.',
        backgroundImage: Image,
      },
    },
    {
      type: 'key-applications',
      props: {
        Applications: [
          {
            icon: 'bi bi-shield-lock',
            heading: 'Fraud Detection',
            content:
              'Monitor transactions and vendor activities for suspicious or irregular patterns.',
          },
          {
            icon: 'bi bi-check2-circle',
            heading: 'Ethics Compliance',
            content:
              'Track employee behaviour against codes of conduct and governance frameworks.',
          },
          {
            icon: 'bi bi-diagram-3',
            heading: 'Supply Chain Integrity',
            content:
              'Identify unethical practices like corruption, bribery, or forced labour.',
          },
          {
            icon: 'bi bi-bank',
            heading: 'Regulatory Alignment',
            content:
              'Automate compliance with anti-fraud, anti-bribery, and corporate governance regulations.',
          },
        ],
      },
    },
  ],
};

export default FraudEthicsMonitoringData;
