import CoreComponentImg from '../../assets/images/Capabilities-images/RAG Application1.png';
import Overview from '../../assets/images/Capabilities-images/RAGApplication1.jpg';
import Banner from '../../assets/images/CapabilitiesBanner/RAGApplication.png';

const RAGApplicationData = {
  sections: [
    {
      type: 'banner',
      props: {
        heading: 'RAG Application',
        content:
          'Enhance AI responses with Retrieval-Augmented Generation, combining knowledge retrieval with intelligent generation.',
        backgroundImage: Banner,
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          'Enhancing AI Capabilities through Retrieval-Augmented Generation (RAG). Retrieval-Augmented Generation (RAG) applications combine the strengths of large language models (LLMs) with real-time data retrieval, resulting in more accurate, current, and contextually relevant AI responses.',
        image: Overview,
      },
    },
    {
      type: 'core-component',
      props: {
        title: 'Key Features for Building and Managing AI Applications',
        description:
          'Our platform provides essential tools and capabilities to simplify AI application development, ensuring scalability, reliability, and ease of use.',
        image: CoreComponentImg,

        points: [
          {
            title: 'User-Friendly Interface',
            text: 'Facilitate the design and deployment of RAG applications with minimal programming requirements.',
          },
          {
            title: 'API Integration ',
            text: 'Enable smooth integration of LLMs with external knowledge sources.',
          },
          {
            title: 'Monitoring and Analytics',
            text: 'Maintain performance oversight, optimize models, and ensure system transparency.',
          },
          {
            title: 'Efficient Deployment',
            text: 'Accelerate testing and deployment of AI solutions in practical environments.',
          },
        ],
      },
    },
    {
      type: 'keyBenefits',
      props: {
        benefits: [
          {
            icon: 'bi bi-check2-circle text-dark',
            title: 'Improved Accuracy',
            description:
              'Enhance response dependability by supplementing with external data sources.',
          },
          {
            icon: 'bi bi-clock-history text-dark',
            title: 'Real-Time Content Updates',
            description:
              'Access current information beyond pre-trained datasets.',
          },
          {
            icon: 'bi bi-eye text-dark',
            title: 'Increased Transparency',
            description:
              'Provide sources and justifications for generated responses.',
          },
          {
            icon: 'bi bi-shield-exclamation text-dark',
            title: 'Reduced Misinformation',
            description:
              'Minimize AI hallucinations by validating content with real-time data.',
          },
        ],
      },
    },
    {
      type: 'applications',
      props: {
        Application: [
          {
            title: 'Knowledge Assistants',
            items: [
              {
                subheading: 'Challenge',
                description:
                  'Employees often waste time searching across multiple systems (documents, CRMs, wikis) to find accurate answers.',
              },
              {
                subheading: 'RAG Application',
                description:
                  'A knowledge assistant powered by RAG retrieves the latest, most relevant organizational data and generates concise, context-aware answers.',
              },
              {
                subheading: 'Impact',
                description:
                  'Saves hours of manual search, ensures decisions are based on up-to-date, verified knowledge.',
              },
              {
                subheading: 'Example',
                description:
                  'Internal enterprise assistants that answer HR, IT, or policy-related queries using real-time company data.',
              },
            ],
          },
          {
            title: 'Customer Service',
            items: [
              {
                subheading: 'Challenge',
                description:
                  'Customers demand instant, accurate responses across chat, email, and voice channels. Traditional AI may hallucinate or provide outdated info.',
              },
              {
                subheading: 'RAG Application',
                description:
                  'RAG-enabled chatbots fetch real-time data from product manuals, FAQs, and CRM systems before generating a response.',
              },
              {
                subheading: 'Impact',
                description:
                  'Improves first-call resolution, reduces support costs, enhances customer satisfaction.',
              },
              {
                subheading: 'Example',
                description:
                  'Banks deploying AI chatbots that pull the latest policy updates, account details, or loan criteria directly into customer interactions.',
              },
            ],
          },
          {
            title: 'Regulatory Compliance & Auditing',
            items: [
              {
                subheading: 'Challenge',
                description:
                  'Compliance teams must constantly monitor regulations and internal policies, but rules change rapidly across geographies.',
              },
              {
                subheading: 'RAG Application',
                description:
                  'AI compliance copilots use RAG to retrieve real-time regulatory updates and company policy documents, then generate compliance reports or risk alerts.',
              },
              {
                subheading: 'Impact',
                description:
                  'Reduces legal risk, ensures adherence to industry standards, and saves compliance teams from manual review of massive documents.',
              },
              {
                subheading: 'Example',
                description:
                  'Financial institutions using RAG systems to auto-check transactions and reporting against AML/KYC policies.',
              },
            ],
          },
        ],
      },
    },
  ],
};

export default RAGApplicationData;
