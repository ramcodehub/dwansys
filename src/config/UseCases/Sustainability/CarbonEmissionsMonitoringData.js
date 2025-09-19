import Overview from '../../../assets/images/Usecases-images/Sustainability/Carbon Emissions Monitoring2.jpeg';
import Image from '../../../assets/images/UsecasesRealWorld/Carbon emission Monitoring1.jpg';

const CarbonEmissionsMonitoringData = {
  sections: [
    {
      type: 'hero',
      props: {
        heading: 'Carbon Emissions Monitoring',
        content:
          'Monitor carbon emissions effortlessly. Drive sustainability and stay compliant with real-time data and smart analytics.',
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          'Organizations today face increasing pressure to comply with ESG standards and reduce their carbon footprint. Manual tracking methods often lack accuracy, timeliness, and transparency—leaving companies vulnerable to compliance risks and reputational challenges.Our ESG Carbon Emissions Monitoring solution leverages IoT sensors, cloud platforms, and AI analytics to measure and track emissions across facilities in real time.',
        image: Overview,
      },
    },
    {
      type: 'real-world-example',
      props: {
        content:
          'A leading manufacturing firm deployed our solution, achieving a 30% improvement in compliance reporting speed and a 15% reduction in carbon emissions within the first year.',
        backgroundImage: Image,
      },
    },
    {
      type: 'ai-solution',
      props: {
        heading: 'AI-Powered Solution',
        content:
          'Our ESG Carbon Emissions Monitoring solution leverages IoT sensors, cloud platforms, and AI analytics to measure and track emissions across facilities in real time.',
      },
    },
    {
      type: 'key-applications',
      props: {
        Applications: [
          {
            icon: 'bi bi-broadcast',
            heading: 'IoT-Enabled Monitoring',
            content:
              'Smart sensors track CO₂, NOx, and particulate emissions continuously.',
          },
          {
            icon: 'bi bi-cpu',
            heading: 'AI Analytics',
            content:
              'Real-time dashboards detect anomalies, forecast future emissions, and ensure compliance.',
          },
          {
            icon: 'bi bi-file-earmark-text',
            heading: 'Automated ESG Reporting',
            content:
              'Streamlined reports aligned with CPCB, SPCB, GHG Protocol, and global ESG frameworks.',
          },
          {
            icon: 'bi bi-blockquote-right',
            heading: 'Transparency & Accountability',
            content:
              'Immutable records via blockchain for audits and stakeholder trust.',
          },
        ],
      },
    },
    {
      type: 'business-impact',
      props: {
        points: [
          {
            title: 'Reduced penalties & compliance risks',
            text: 'through proactive monitoring',
          },
          {
            title: 'Enhanced brand trust ',
            text: 'with transparent ESG disclosures',
          },
          {
            title: 'Improved operational efficiency',
            text: 'by identifying emission hotspots',
          },
          {
            title: 'Scalable foundation',
            text: 'to meet future Net Zero goals',
          },
        ],
      },
    },
  ],
};

export default CarbonEmissionsMonitoringData;
