import Overview from '../../assets/images/Capabilities-images/DataTransformation3.jpg';
import CoreComponentImg from '../../assets/images/Capabilities-images/DataTransformationCore.png';
import Banner from '../../assets/images/CapabilitiesBanner/DataTransformation.png';

const DataTransformationData = {
  sections: [
    {
      type: 'banner',
      props: {
        heading: 'Data Transformation',
        content:
          'Convert raw, inconsistent data into clean and usable formats that are ready for insights and business applications.',
        backgroundImage: Banner,
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          'Raw, untouched data hidden away in isolated silos is nothing but wasted potential—silent, stagnant, and without life. But when you breathe transformation into it, you harness a force capable of revolutionizing your insights, igniting innovation, and fuelling your very success. To truly unlock the profound value of your data, it must be cleaned, shaped, and enriched with purpose—ready to invigorate analytics, empower AI, and elevate your business intelligence to new heights.',
        image: Overview,
      },
    },
    {
      type: 'core-component',
      props: {
        title:
          'Igniting the Power of Data for AI, Analytics & Business Intelligence',
        subtitle: 'Core Processes in Data Transformation',
        description:
          'With cutting-edge ETL (Extract, Transform, Load) pipelines, we breathe life into your data—making it pure, trustworthy, and bursting with potential. We empower you to transform raw information into compelling stories through real-time dashboards and reports that captivate and inform.Let your data be the foundation for groundbreaking AI & ML models that reshape your future. Harness the unstoppable force of predictive analytics and forecasting to anticipate the unseen and seize new opportunities.We bring automation to decision-making, turning complex choices into seamless, confident actions.By elevating your data to its highest quality, we fuel your journey toward unstoppable insights, unrivalled efficiency, and relentless innovation. Together, we unlock the true spirit of data’s potential to inspire, transform, and propel your business forward with passion and purpose.',
        image: CoreComponentImg,
        points: [
          {
            title: 'Data Cleaning ',
            text: 'Remove duplicates, correct errors, and resolve inconsistencies.',
          },
          {
            title: 'Data Integration ',
            text: 'Merge datasets from databases, APIs, and cloud platforms for unified visibility.',
          },
          {
            title: 'Normalization & Aggregation',
            text: 'Standardize formats and consolidate information for deeper analysis.',
          },
          {
            title: 'Data Enrichment ',
            text: 'Enhance internal data with external sources, giving more depth and context.',
          },
          {
            title: 'Data Masking & Security',
            text: 'Protect sensitive information while maintaining usability.',
          },
        ],
      },
    },
    {
      type: 'keyBenefits',
      props: {
        benefits: [
          {
            icon: 'bi bi-diagram-3 text-dark',
            title: 'Breaking Barriers',
            description:
              'Dismantle data silos, merging disparate sources into a mighty, unified force that reveals the whole story.',
          },
          {
            icon: 'bi bi-check2-square text-dark',
            title: 'Elevating Quality',
            description:
              'Transform chaos into clarity—boost accuracy, consistency, and completeness, turning raw data into a trusted foundation.',
          },
          {
            icon: 'bi bi-sliders text-dark',
            title: 'Achieving Standardization',
            description:
              "Align data across systems like a symphony, harmonized and ready to sing your organization's true potential.",
          },
          {
            icon: 'bi bi-lightning-charge text-dark',
            title: 'Preparing for the Future',
            description:
              'Equip your data for the unstoppable wave of AI and machine learning—predicting, automating, and transcending yesterday’s limits.',
          },
          {
            icon: 'bi bi-arrow-repeat text-dark',
            title: 'Flexibility in Action',
            description:
              'Ignite instant insights with real-time processing or delve into the past with batch analysis, unlocking secrets at every turn.',
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
                subheading: 'Patient Data Integration',
                description:
                  'Merge electronic health records (EHR) from multiple systems into a unified patient view.',
              },
              {
                subheading: 'Medical Imaging Analysis',
                description:
                  'Standardize imaging data formats for AI-powered diagnosis.',
              },
              {
                subheading: 'Regulatory Reporting',
                description:
                  'Clean and prepare healthcare data for HIPAA/GDPR compliance reporting.',
              },
            ],
          },
          {
            title: 'Banking & Financial Services',
            items: [
              {
                subheading: 'Fraud Detection',
                description:
                  'Cleanse and transform transaction data in real time for anomaly detection.',
              },
              {
                subheading: 'Customer 360° View',
                description:
                  'Integrate data across retail, corporate, and wealth management for personalized services.',
              },
              {
                subheading: 'Regulatory Compliance',
                description:
                  'Automate reporting by standardizing data for Basel III, AML, and KYC compliance.',
              },
            ],
          },
          {
            title: 'Retail & E-Commerce',
            items: [
              {
                subheading: 'Personalized Recommendations',
                description:
                  'Aggregate customer purchase data, browsing history, and loyalty data for AI models.',
              },
              {
                subheading: 'Inventory Optimization',
                description:
                  'Clean and integrate supplier, sales, and logistics data to balance stock levels.',
              },
              {
                subheading: 'Customer Insights',
                description:
                  'Unify structured POS data with unstructured feedback (reviews, social media).',
              },
            ],
          },
          {
            title: 'Manufacturing',
            items: [
              {
                subheading: 'IoT Data Processing',
                description:
                  'Normalize sensor data from machines for predictive maintenance.',
              },
              {
                subheading: 'Supply Chain Visibility',
                description:
                  'Integrate ERP, vendor, and logistics data for end-to-end tracking.',
              },
              {
                subheading: 'Quality Assurance',
                description:
                  'Aggregate and analyze production line data to identify defects faster.',
              },
            ],
          },
          {
            title: 'Energy & Utilities',
            items: [
              {
                subheading: 'Smart Grid Monitoring',
                description:
                  'Transform real-time IoT data from meters into actionable dashboards.',
              },
              {
                subheading: 'Demand Forecasting',
                description:
                  'Prepare weather and consumption data for AI-based energy predictions.',
              },
              {
                subheading: 'Sustainability Reporting',
                description:
                  'Standardize emissions and energy usage data for ESG compliance.',
              },
            ],
          },
          {
            title: 'Telecom',
            items: [
              {
                subheading: 'Network Optimization',
                description:
                  'Transform call records and IoT data for predictive maintenance of towers.',
              },
              {
                subheading: 'Churn Prediction',
                description:
                  'Integrate customer usage data, complaints, and billing info for ML models.',
              },
              {
                subheading: 'Revenue Assurance',
                description:
                  'Cleanse and reconcile billing data across multiple systems.',
              },
            ],
          },
        ],
      },
    },
  ],
};

export default DataTransformationData;
