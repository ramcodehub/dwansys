import CoreComponentImg from '../../assets/images/Capabilities-images/Business Intelligence2.png';
import Overview from '../../assets/images/Capabilities-images/BusinessIntelligence2.jpg';
import Banner from '../../assets/images/CapabilitiesBanner/BusinessIntelligence.png';

const BusinessIntelligenceData = {
  sections: [
    {
      type: 'banner',
      props: {
        heading: 'Business Intelligence',
        content:
          'Turn raw data into valuable insights through interactive dashboards, visualizations, and real-time reporting tools.',
        backgroundImage: Banner,
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          "To remain competitive in today's dynamic business environment, organizations must extract valuable insights from transactional data to inform strategic decisions and operational processes. Implementing a Business Intelligence (BI) platform provides analysts with advanced features such as drill-down, drill-through, and drill-up, facilitating comprehensive data exploration at multiple levels. In a fast-paced marketplace, leveraging data effectively is essential for maintaining a competitive edge. BI plays a vital role in transforming raw transactional data into actionable insights that support strategic planning and operational efficiency.",
        image: Overview,
      },
    },
    {
      type: 'core-component',
      props: {
        title:
          'Modern BI solutions offer powerful capabilities for business analysts, including',
        description:
          'Modern Business Intelligence (BI) solutions empower analysts with advanced tools for deeper insights, interactive reporting, and multi-dimensional data exploration. These capabilities enable businesses to move from raw data to actionable strategies efficiently.',
        image: CoreComponentImg,
        extraContent:
          'Implementing a BI platform is a strategic necessity for organizations seeking growth and resilience in a data-driven world. By leveraging BI tools, companies can generate meaningful insights, enhance operational efficiency, and support sustained success.',
        points: [
          {
            title: 'Drill-Down ',
            text: 'Allows users to examine detailed data layers, such as drilling from total sales to sales by region or store.',
          },
          {
            title: 'Drill-Through ',
            text: 'Facilitates navigation across multiple reports or datasets for comprehensive analysis, such as linking sales dashboards with customer feedback reports.',
          },
          {
            title: 'Drill-Up',
            text: 'Aggregates data to provide high-level overview, such as summarizing monthly sales into annual performance metrics.',
          },
        ],
      },
    },
    {
      type: 'keyBenefits',
      props: {
        benefits: [
          {
            icon: 'bi bi-lightbulb text-dark',
            title: 'Decision-Making',
            description:
              'BI ensures that organizations can make better decisions by leveraging accurate, timely, and meaningful insights.',
          },
          {
            icon: 'bi bi-database-check text-dark',
            title: 'Analyze Transactional Data',
            description:
              'Process and interpret large volumes of both structured and unstructured data.',
          },
          {
            icon: 'bi bi-graph-up-arrow text-dark',
            title: 'Identify Trends & Patterns',
            description:
              'Recognize significant business trends, customer behaviors, and market opportunities.',
          },
          {
            icon: 'bi bi-gear text-dark',
            title: 'Enhance Operational Efficiency',
            description:
              'Streamline workflows and optimize resource allocation.',
          },
          {
            icon: 'bi bi-bar-chart text-dark',
            title: 'Support Data-Driven Decisions',
            description:
              'Provide stakeholders with real-time, accurate insights.',
          },
        ],
      },
    },
    {
      type: 'applications',
      props: {
        Application: [
          {
            title: 'Banking & Financial Services (BFSI)',
            items: [
              {
                subheading: 'Use Case',
                description:
                  'Fraud detection, customer segmentation, loan risk analysis.',
              },
              {
                subheading: 'How BI Helps',
                description:
                  'Real-time dashboards track suspicious activity, customer analytics identify high-value segments, and predictive models reduce loan defaults.',
              },
              {
                subheading: 'Impact',
                description:
                  'Improved compliance, risk management, and profitability.',
              },
            ],
          },
          {
            title: 'Retail & E-Commerce',
            items: [
              {
                subheading: 'Use Case',
                description:
                  'Customer behaviour analysis, demand forecasting, personalized promotions.',
              },
              {
                subheading: 'How BI Helps',
                description:
                  'BI tools analyse purchase history, web traffic, and loyalty program data to optimize pricing, promotions, and stock levels.',
              },
              {
                subheading: 'Impact',
                description:
                  'Boosts sales, improves customer experience, reduces stockouts and overstocks.',
              },
            ],
          },
          {
            title: 'Healthcare & Life Sciences',
            items: [
              {
                subheading: 'Use Case',
                description:
                  'Patient care optimization, hospital performance tracking, drug effectiveness analysis.',
              },
              {
                subheading: 'How BI Helps',
                description:
                  'BI platforms integrate EHRs, lab data, and treatment histories to identify patient trends, reduce wait times, and measure care outcomes.',
              },
              {
                subheading: 'Impact',
                description:
                  'Enhances patient outcomes, ensures resource efficiency, and lowers operational costs.',
              },
            ],
          },
          {
            title: 'Manufacturing & Supply Chain',
            items: [
              {
                subheading: 'Use Case',
                description:
                  'Production monitoring, supply chain visibility, predictive maintenance.',
              },
              {
                subheading: 'How BI Helps',
                description:
                  'Dashboards track machine performance, inventory levels, and logistics data in real time, highlighting inefficiencies and risks.',
              },
              {
                subheading: 'Impact',
                description:
                  'Increases productivity, reduces downtime, and optimizes inventory management.',
              },
            ],
          },
        ],
      },
    },
  ],
};

export default BusinessIntelligenceData;
