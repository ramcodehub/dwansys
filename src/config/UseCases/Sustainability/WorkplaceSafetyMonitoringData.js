import Overview from '../../../assets/images/Usecases-images/Sustainability/Workplace Safety Monitoring1.jpeg';
import Image from '../../../assets/images/UsecasesRealWorld/q.jpg';

const WorkplaceSafetyMonitoringData = {
  sections: [
    {
      type: 'hero',
      props: {
        heading: 'Workplace Safety Monitoring',
        content:
          'AI and IoT-powered workplace safety monitoring that protects employees, prevents risks, and ensures compliance in real time.',
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          'Workplace safety monitoring powered by AI and IoT ensures organizations protect their employees while aligning with ESG goals. By leveraging smart sensors, predictive analytics, and real-time alerts, businesses can create safer, more sustainable work environments.',
        image: Overview,
      },
    },
    {
      type: 'real-world-example',
      props: {
        content:
          'Honeywell uses AI-driven workplace safety platforms with IoT wearables to monitor employee health and environmental conditions, reducing accidents and improving compliance.',
        backgroundImage: Image,
      },
    },
    {
      type: 'key-applications',
      props: {
        Applications: [
          {
            icon: 'bi bi-smartwatch',
            heading: 'Smart Sensors & Wearables',
            content:
              'Monitor air quality, noise levels, and worker vitals to detect unsafe conditions.',
          },
          {
            icon: 'bi bi-bell-fill',
            heading: 'Real-Time Alerts',
            content:
              'Instant notifications for hazards such as gas leaks, overheating machinery, or restricted area breaches.',
          },
          {
            icon: 'bi bi-graph-up-arrow',
            heading: 'Predictive Analytics',
            content:
              'AI models predict potential workplace accidents or risks before they occur.',
          },
          {
            icon: 'bi bi-shield-check',
            heading: 'Regulatory Compliance',
            content:
              'Ensures adherence to OSHA, ISO 45001, and ESG reporting frameworks.',
          },
        ],
      },
    },
  ],
};

export default WorkplaceSafetyMonitoringData;
