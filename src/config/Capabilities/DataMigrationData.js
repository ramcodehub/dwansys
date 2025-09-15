import Overview from '../../assets/images/Capabilities-images/DataMigration1.jpg';
import Banner from '../../assets/images/CapabilitiesBanner/DataMigration.jpeg';

const DataMigrationData = {
  sections: [
    {
      type: 'banner',
      props: {
        heading: 'Data Migration Services',
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
          'In today’s digital-first world, outdated on-premises systems drain resources and limit innovation. Migrating to the cloud isn’t just a technical upgrade — it’s a bold leap toward scalability, agility, and future-ready intelligence. At dwansys, we help organizations seamlessly transition data to cloud platforms, ensuring zero downtime, fortified security, and unmatched performance. Whether AWS, Azure, Google Cloud, or Snowflake, we empower your business to embrace limitless possibilities with confidence.',
        image: Overview,
      },
    },
    {
      type: 'keyBenefits',
      props: {
        benefits: [
          {
            icon: 'bi bi-arrow-right-circle text-dark',
            title: 'Seamless Transformation',
            description:
              'Smooth, zero-downtime migration with minimal disruption.',
          },
          {
            icon: 'bi bi-cash-coin text-dark',
            title: 'Cost Optimization',
            description:
              'Eliminate high infrastructure costs and reduce operational overhead.',
          },
          {
            icon: 'bi bi-arrows-fullscreen text-dark',
            title: 'Scalability & Agility',
            description:
              'Scale on demand with hybrid and multi-cloud flexibility.',
          },
          {
            icon: 'bi bi-lightbulb text-dark',
            title: 'Future-Ready Innovation',
            description:
              'Unlock AI, ML, and analytics capabilities with cloud-native environments.',
          },
          {
            icon: 'bi bi-shield-check text-dark',
            title: 'Data Integrity & Security',
            description:
              'Ensure governance, compliance, and reliability throughout migration.',
          },
          {
            icon: 'bi bi-speedometer2 text-dark',
            title: 'Performance Boost',
            description:
              'Leverage high-speed cloud databases and real-time processing.',
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
                  'Migrating patient records and EHRs securely to cloud for 24/7 availability.',
                  'Enabling AI-driven diagnostics and predictive analytics with cloud-stored data.',
                ],
              },
            ],
          },
          {
            title: 'Banking & Finance',
            items: [
              {
                points: [
                  'Migrating core banking and transaction data to hybrid cloud for resilience.',
                  'Powering fraud detection and compliance with scalable, cloud-native data lakes.',
                ],
              },
            ],
          },
          {
            title: 'Retail & E-Commerce',
            items: [
              {
                points: [
                  'Moving POS, customer, and inventory data into cloud warehouses for real-time insights.',
                  'Supporting omnichannel personalization and demand forecasting.',
                ],
              },
            ],
          },
          {
            title: 'Manufacturing',
            items: [
              {
                points: [
                  'Migrating IoT sensor data streams to cloud for predictive maintenance.',
                  'Supporting smart factory initiatives with hybrid cloud ecosystems.',
                ],
              },
            ],
          },
          {
            title: 'Telecom & Media',
            items: [
              {
                points: [
                  'Transitioning CDRs and customer analytics to cloud platforms for faster service rollout.',
                  'Supporting OTT/video streaming with scalable cloud storage.',
                ],
              },
            ],
          },
          {
            title: 'Energy & ESG',
            items: [
              {
                points: [
                  'Migrating sustainability metrics and compliance reporting to cloud dashboards.',
                  'Leveraging multi-cloud for carbon footprint monitoring and smart energy distribution.',
                ],
              },
            ],
          },
        ],
      },
    },
  ],
};

export default DataMigrationData;
