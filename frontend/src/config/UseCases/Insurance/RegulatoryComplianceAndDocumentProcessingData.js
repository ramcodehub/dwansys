import Overview from '../../../assets/images/Usecases-images/Insurance/Regulatory Compliance & Document Processing2.jpeg';
import Image from '../../../assets/images/UsecasesRealWorld/regulatory compliance and docume.jpg';

const RegulatoryComplianceAndDocumentProcessingData = {
  sections: [
    {
      type: 'hero',
      props: {
        heading: 'Regulatory Compliance & Document Processing',
        content:
          'Simplify compliance and document workflows. Automate regulatory checks, manage documents efficiently, and reduce risk with intelligent solutions.',
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          'Ensure seamless adherence to regulations with automated compliance monitoring and efficient document processing. Streamline the management of regulatory documents, reduce manual effort, and mitigate compliance risks through intelligent automation and advanced analytics.',
        image: Overview,
      },
    },
    {
      type: 'real-world-example',
      props: {
        content:
          'AIG leverages AI-driven compliance systems to detect risks early, prevent fraudulent submissions, and automate regulatory reporting.',
        backgroundImage: Image,
      },
    },
    {
      type: 'key-applications',
      props: {
        Applications: [
          {
            icon: 'bi bi-journal-text',
            heading: 'Automated Policy Review',
            content:
              'AI scans and interprets complex legal and policy documents, ensuring adherence to evolving regulations.',
          },
          {
            icon: 'bi bi-file-earmark-x',
            heading: 'Fraud Detection with AI',
            content:
              'Advanced AI models identify forged signatures, altered applications, and suspicious documents.',
          },
          {
            icon: 'bi bi-eye',
            heading: 'Regulatory Monitoring',
            content:
              'AI continuously tracks industry regulations and policy changes, minimizing compliance risks and reporting delays.',
          },
        ],
      },
    },
  ],
};

export default RegulatoryComplianceAndDocumentProcessingData;
