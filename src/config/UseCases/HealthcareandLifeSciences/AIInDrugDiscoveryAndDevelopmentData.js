import Overview from '../../../assets/images/Usecases-images/Healthcare and Life Sciences HLS/Drug Discovery and Development2.jpeg';
import Image from '../../../assets/images/UsecasesRealWorld/q.jpg';

const AIInDrugDiscoveryAndDevelopmentData = {
  sections: [
    {
      type: 'hero',
      props: {
        heading: 'AI in Drug Discovery and Development',
        content:
          'Artificial Intelligence is transforming the pharmaceutical industry by significantly reducing the time and cost required to discover and develop new drugs.',
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          'AI accelerates drug discovery by analyzing complex biological data, predicting molecular structures, and optimizing clinical trials. These advancements reduce R&D costs, shorten timelines, and increase the success rates of new therapies reaching patients.',
        image: Overview,
      },
    },
    {
      type: 'real-world-example',
      props: {
        content:
          'Insilco Medicine leveraged AI to develop a potential drug for fibrosis in just 46 days — a task that traditionally takes years.',
        backgroundImage: Image,
      },
    },
    {
      type: 'key-applications',
      props: {
        Applications: [
          {
            icon: 'bi bi-search-heart',
            heading: 'Drug Target Identification',
            content:
              'AI analyses complex biological datasets to uncover potential drug targets for various diseases.',
          },
          {
            icon: 'bi bi-diagram-3',
            heading: 'Molecular Structure Prediction',
            content:
              'Advanced AI models, such as DeepMind’s AlphaFold, predict protein structures with high accuracy, enabling more effective drug design.',
          },
          {
            icon: 'bi bi-clipboard2-pulse',
            heading: 'Clinical Trial Optimization',
            content:
              'AI streamlines patient selection, trial design, and data analysis, accelerating trial processes and improving success rates.',
          },
        ],
      },
    },
  ],
};

export default AIInDrugDiscoveryAndDevelopmentData;
