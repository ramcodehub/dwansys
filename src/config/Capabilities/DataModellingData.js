import Overview from '../../assets/images/Capabilities-images/DataModelling.png';
import CoreComponentImg from '../../assets/images/Capabilities-images/DataModellingCore1.png';
import Banner from '../../assets/images/CapabilitiesBanner/DataModelling.png';

const DataModellingData = {
  sections: [
    {
      type: 'banner',
      props: {
        heading: 'Data Modelling',
        content:
          'Design robust data models and structures that support advanced analytics and empower smarter business decisions.',
        backgroundImage: Banner,
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          'A poorly designed data model is a silent thief, draining efficiency and overwhelming our systems with redundancy and chaos. It hampers progress, creating obstacles that hinder innovation and growth. But when we craft a thoughtfully structured data model, we unlock a world of possibilities — enabling us to scale with confidence, adapt with agility, and achieve peak performance. It’s the heart of building powerful, feature-rich applications that truly transform ideas into reality.',
        image: Overview,
      },
    },
    {
      type: 'core-component',
      props: {
        title: 'Structured for Various Database Systems',
        subtitle: 'Key Data Modelling Techniques',
        description:
          'Our solutions are compatible with a wide range of database systems. They support relational databases like MySQL, PostgreSQL, Oracle, and SQL Server; NoSQL and big data platforms such as MongoDB, Cassandra, Hadoop, and Snowflake; as well as cloud and distributed systems including AWS Redshift, Google BigQuery, and Azure Synapse.',
        extraContent:
          'Imagine harnessing the raw potential of your data with strategic modeling—turning chaos into clarity, uncertainty into insight. Feel the rush as your organization accelerates development, binds data with unwavering consistency, and breathes life into intelligent applications that revolutionize how you serve your world. When you master these powerful tools, you ignite a future where innovation knows no bounds, and your data-driven dreams become unstoppable realities!',
        image: CoreComponentImg,
        points: [
          {
            title: 'Conceptual Modelling',
            text: '– The heartbeat of understanding, where we passionately define the core business rules and intricate relationships that breathe life into our systems.',
          },
          {
            title: 'Logical Modelling',
            text: 'The meticulous craft of shaping detailed entity-relationship diagrams (ERDs), laying the foundation for structure and clarity with unwavering precision.',
          },
          {
            title: 'Physical Modelling',
            text: 'The artful optimization of database structures, painstakingly tuned to deliver blazing speed and efficient storage, unlocking the true potential of our data.',
          },
          {
            title: 'Normalization & Indexing',
            text: 'The relentless pursuit to eliminate redundancy, streamlining processes and igniting query performance to soar beyond limits.',
          },
          {
            title: 'Schema Design for AI & Big Data',
            text: 'The visionary blueprint that empowers real-time analytics and machine learning, driving innovation and transforming possibilities into reality.',
          },
        ],
      },
    },
    {
      type: 'keyBenefits',
      props: {
        benefits: [
          {
            icon: 'bi bi-shuffle text-dark',
            title: 'Enhanced Data Consistency',
            description:
              'Ensures uniform definitions and relationships across systems.',
          },
          {
            icon: 'bi bi-speedometer2 text-dark',
            title: 'Optimized Performance',
            description:
              'Reduces redundancy, accelerates query execution, and streamlines reporting.',
          },
          {
            icon: 'bi bi-lightbulb text-dark',
            title: 'Future-Ready for AI/ML',
            description:
              'Prepares structured, high-quality datasets for advanced analytics and machine learning pipelines.',
          },
          {
            icon: 'bi bi-cash-coin text-dark',
            title: 'Reduced Development Costs',
            description:
              'Prevents rework and accelerates application development with clear data blueprints.',
          },
          {
            icon: 'bi bi-shield-check text-dark',
            title: 'Regulatory Compliance',
            description:
              'Ensures accurate, auditable data structures for industries under strict compliance (GDPR, HIPAA, SOX).',
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
                subheading: 'Patient 360',
                description: 'Integrate EHR, labs, wearables.',
              },
              {
                subheading: 'Clinical Research',
                description: 'Normalize drug trial data models.',
              },
            ],
          },
          {
            title: 'Banking & Finance',
            items: [
              {
                subheading: 'Credit Risk',
                description:
                  'Combine transactions and external data for AI scoring.',
              },
              {
                subheading: 'AML',
                description:
                  'Schema for tracing suspicious multi-source transactions.',
              },
            ],
          },
          {
            title: 'Retail & E-Commerce',
            items: [
              {
                subheading: 'Customer Analytics',
                description: 'Unify purchase, browsing, loyalty data.',
              },
              {
                subheading: 'Inventory & Supply Chain',
                description: 'Schemas for real-time tracking and vendor sync.',
              },
            ],
          },
          {
            title: 'Manufacturing',
            items: [
              {
                subheading: 'IoT Data',
                description: 'Streamline logs for predictive maintenance.',
              },
              {
                subheading: 'Quality Control',
                description: 'Link defects to suppliers and production.',
              },
            ],
          },
          {
            title: 'Telecom',
            items: [
              {
                subheading: 'Call Records',
                description:
                  'Efficient schema for billions of real-time records.',
              },
              {
                subheading: 'Churn Prediction',
                description: 'Connect usage, complaints, demographics.',
              },
            ],
          },
          {
            title: 'ESG & Utilities',
            items: [
              {
                subheading: 'Emissions',
                description: 'Models for IoT, reporting, compliance.',
              },
              {
                subheading: 'Smart Grids',
                description: 'Schemas for real-time energy data.',
              },
            ],
          },
        ],
      },
    },
  ],
};

export default DataModellingData;
