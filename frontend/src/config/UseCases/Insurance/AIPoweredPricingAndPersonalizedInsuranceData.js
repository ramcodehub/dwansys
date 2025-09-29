import Overview from '../../../assets/images/Usecases-images/Insurance/AI-Powered Pricing & Personalized Insurance2.jpeg';
import Image from '../../../assets/images/UsecasesRealWorld/Ai-powered pricing and personalized insurance.png';

const AIPoweredPricingAndPersonalizedInsuranceData = {
  sections: [
    {
      type: 'hero',
      props: {
        heading: 'AI-Powered Pricing & Personalized Insurance',
        content:
          'Revolutionize insurance with AI-driven dynamic pricing, personalized policies, and real-time risk adjustments.',
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          'AI is transforming the insurance industry by enabling dynamic, customer-centric pricing models that go beyond traditional risk assessments.',
        image: Overview,
      },
    },
    {
      type: 'real-world-example',
      props: {
        content:
          'Root Insurance leverages AI to analyse driving behaviour and provide personalized car insurance rates, making premiums more transparent and equitable.',
        backgroundImage: Image,
      },
    },
    {
      type: 'key-applications',
      props: {
        Applications: [
          {
            icon: 'bi bi-speedometer',
            heading: 'Usage-Based Insurance (UBI)',
            content:
              'Premiums are adjusted in real time based on customer behaviour, such as driving patterns or health data.',
          },
          {
            icon: 'bi bi-person-badge',
            heading: 'Behaviour-Based Pricing',
            content:
              'AI evaluates individual lifestyle habits to offer personalized discounts and incentives.',
          },
          {
            icon: 'bi bi-arrow-repeat',
            heading: 'Real-Time Policy Adjustments',
            content:
              'Coverage adapts instantly as risk factors evolve, ensuring fairness and accuracy.',
          },
        ],
      },
    },
  ],
};

export default AIPoweredPricingAndPersonalizedInsuranceData;
