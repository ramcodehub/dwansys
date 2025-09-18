import Overview from '../../../assets/images/Usecases-images/Sustainability/Resource Efficiency1.jpeg';
import Image from '../../../assets/images/UsecasesRealWorld/Fraud Detection & Prevention wit.jpg';
const ResourceEfficiencyData = {
  sections: [
    {
      type: 'hero',
      props: {
        heading: 'Resource Efficiency',
        content:
          'Maximize output, minimize waste. Drive efficiency through smarter resource management and sustainable solutions.Our Resource Efficiency solution integrates IoT sensors, AI analytics, and smart automation to optimize the use of energy, water, and raw materials across operations.',
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          'In today’s sustainability-driven landscape, businesses are under pressure to do more with less. Traditional resource management often leads to waste, inefficiencies, and higher operational costs, making it difficult to achieve both profitability and ESG compliance.',
        image: Overview,
      },
    },
    {
      type: 'real-world-example',
      props: {
        content:
          'A global textile company adopted our solution, leading to a 25% reduction in water consumption and a 20% decrease in energy costs, while boosting ESG ratings and investor confidence.',
        backgroundImage: Image,
      },
    },
    {
      type: 'key-applications',
      props: {
        Applications: [
          {
            icon: 'bi bi-lightning-charge',
            heading: 'Smart Energy Management',
            content: 'AI monitors and reduces energy consumption in real time.',
          },
          {
            icon: 'bi bi-droplet',
            heading: 'Water Optimization',
            content:
              'IoT-enabled flow sensors detect leakages and optimize usage.',
          },
          {
            icon: 'bi bi-recycle',
            heading: 'Waste Minimization',
            content:
              'Predictive analytics identifies process inefficiencies to cut waste.',
          },
          {
            icon: 'bi bi-speedometer2',
            heading: 'Sustainable Dashboards',
            content:
              'Unified reporting aligned with ESG frameworks for transparency.',
          },
        ],
      },
    },
    {
      type: 'business-impact',
      props: {
        points: [
          {
            title: 'Lower operational costs',
            text: ' through optimized energy and resource usage',
          },
          {
            title: 'Improved ESG performance scores ',
            text: 'with accurate data-driven reporting',
          },
          {
            title: 'Reduced environmental footprint',
            text: ', advancing corporate sustainability goals',
          },
          {
            title: 'Enhanced resilience',
            text: 'by adopting circular economy practices',
          },
        ],
      },
    },
  ],
};

export default ResourceEfficiencyData;
