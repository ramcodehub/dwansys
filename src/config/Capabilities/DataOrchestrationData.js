import Banner from '../../assets/images/data2.png';
import Overview from '../../assets/images/data3.jpg';

const DataOrchestrationData = {
  sections: [
    {
      type: 'banner',
      props: {
        heading: 'Data Orchestration',
        content:
          'Effortlessly transfer data between platforms and systems while maintaining security, accuracy, and reliability.',
        backgroundImage: Banner,
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          'As organizations expand globally and manage countless data sources, the challenge of harmonizing information across systems can feel daunting. Data Orchestration transforms this complexity into opportunity — uniting fragmented data streams into a seamless, automated flow. By integrating, transforming, and delivering data in real time, orchestration empowers organizations to unlock insights faster, make smarter decisions, and accelerate innovation with confidence.',
        image: Overview,
      },
    },
    {
      type: 'keyBenefits',
      props: {
        benefits: [
          {
            icon: 'bi bi-gear-wide-connected text-dark',
            title: 'Automated Data Pipelines',
            description:
              'Eliminate repetitive ETL processes, freeing teams to focus on innovation.',
          },
          {
            icon: 'bi bi-diagram-3 text-dark',
            title: 'Unified Data Integration',
            description:
              'Connects databases, APIs, SaaS platforms, and cloud services into a single ecosystem.',
          },
          {
            icon: 'bi bi-check2-circle text-dark',
            title: 'Enhanced Data Quality',
            description:
              'Standardizes, cleanses, and validates data for trustworthy insights.',
          },
          {
            icon: 'bi bi-funnel text-dark',
            title: 'Workflow Optimization',
            description:
              'Streamlines complex data movement and transformation, boosting efficiency.',
          },
          {
            icon: 'bi bi-bar-chart-line text-dark',
            title: 'Real-Time Analytics',
            description:
              'Provides immediate access to actionable insights for faster decision-making.',
          },
        ],
      },
    },
    {
      type: 'applications',
      props: {
        Application: [
          {
            title: 'Healthcare',
            items: [
              {
                points: [
                  'Orchestrating patient data from EHRs, wearables, and labs into real-time dashboards.',
                  'Supporting AI-powered diagnostics with continuous, high-quality data streams.',
                ],
              },
            ],
          },
          {
            title: 'Financial Services',
            items: [
              {
                subheading: 'Fraud Detection',
                description:
                  'Unifying customer, transaction, and compliance data for fraud detection.',
              },
              {
                subheading: 'Risk Management',
                description:
                  'Automating pipelines to feed real-time risk and credit scoring models.',
              },
            ],
          },
          {
            title: 'Retail & E-Commerce',
            items: [
              {
                subheading: 'Customer Insights',
                description:
                  'Consolidating sales, customer, and inventory data from multiple channels.',
              },
              {
                subheading: 'Personalization',
                description:
                  'Powering personalized marketing campaigns with orchestrated, real-time insights.',
              },
            ],
          },
        
        ],
      },
    },
  ],
};

export default DataOrchestrationData;
