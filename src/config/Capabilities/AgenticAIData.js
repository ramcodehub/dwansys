import Banner from '../../assets/images/data2.png';
import Overview from '../../assets/images/data3.jpg';
const AgenticAIData = {
  sections: [
    {
      type: 'banner',
      props: {
        heading: 'Agentic AI',
        content:
          'Deploy advanced AI agents capable of reasoning, planning, and executing tasks autonomously to support business growth.',
        backgroundImage: Banner,
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          'In the next evolution of artificial intelligence, Agentic AI is transforming how organizations operate. Unlike traditional AI systems that wait for prompts, Agentic AI consists of autonomous agents capable of reasoning, planning, and taking actions across digital ecosystems.',
        image: Overview,
      },
    },
    {
      type: 'keyBenefits',
      props: {
        benefits: [
          {
            icon: 'bi bi-gear-wide-connected text-dark',
            title: 'Efficiency at Scale',
            description: 'Automate complex, end-to-end processes.',
          },
          {
            icon: 'bi bi-diagram-3 text-dark',
            title: 'Cost Reduction',
            description: 'Minimize repetitive manual work.',
          },
          {
            icon: 'bi bi-check2-circle text-dark',
            title: 'Enhanced Decision-Making',
            description: 'Access AI-driven recommendations in real time.',
          },
          {
            icon: 'bi bi-funnel text-dark',
            title: 'Faster Innovation',
            description:
              'Deploy agents for R&D, customer service, operations, and more.',
          },
          {
            icon: 'bi bi-bar-chart-line text-dark',
            title: 'Competitive Advantage',
            description:
              'Stay ahead with adaptive, self-improving AI ecosystems.',
          },
        ],
      },
    },
    {
      type: 'applications',
      props: {
        Application: [
          {
            title: 'Banking',
            items: [
              {
                points: ['Fraud detection + automated compliance checks.'],
              },
            ],
          },
          {
            title: 'Retail',
            items: [
              {
                points: [
                  'Intelligent supply chain optimization and dynamic pricing.',
                ],
              },
            ],
          },
          {
            title: 'Healthcare',
            items: [
              {
                points: [
                  'Personalized treatment planning and automated patient support.',
                ],
              },
            ],
          },
          {
            title: 'Enterprise IT',
            items: [
              {
                points: [
                  'Self-healing systems, predictive maintenance, smart helpdesks.',
                ],
              },
            ],
          },
        ],
      },
    },
  ],
};

export default AgenticAIData;
