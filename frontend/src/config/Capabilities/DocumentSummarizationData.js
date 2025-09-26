import Overview from '../../assets/images/Capabilities-images/DocumentSummarization2.jpg';
import Banner from '../../assets/images/CapabilitiesBanner/DocumentSummarization.png';

const DocumentSummarizationData = {
  sections: [
    {
      type: 'banner',
      props: {
        heading: 'Document Summarization',
        content:
          'Transform lengthy and complex documents into concise, easy-to-digest summaries without losing critical information.',
        backgroundImage: Banner,
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          'AI document summarization represents a significant advancement for organizations managing large volumes of unstructured data. It facilitates rapid extraction of key insights, thereby minimizing information overload and supporting more informed decision-making.',
        image: Overview,
      },
    },
    {
      type: 'keyBenefits',
      props: {
        benefits: [
          {
            icon: 'bi bi-file-earmark-text text-dark',
            title: 'Efficient Information Processing',
            description:
              'AI-powered tools distill extensive text into concise, relevant summaries.',
          },
          {
            icon: 'bi bi-graph-up text-dark',
            title: 'Enhanced Decision-Making',
            description:
              'Access to summarized insights enables decision-makers and staff to act quickly based on accurate data.',
          },
          {
            icon: 'bi bi-chat-dots text-dark',
            title: 'Improved Virtual Assistance',
            description:
              'AI-driven chatbots and virtual assistants utilize summarized information to deliver more precise and context-aware responses.',
          },
          {
            icon: 'bi bi-diagram-3 text-dark',
            title: 'Scalability',
            description:
              'AI systems are capable of processing considerable quantities of both structured and unstructured data, making them suitable for sectors such as finance, healthcare, and legal services.',
          },
          {
            icon: 'bi bi-database text-dark',
            title: 'Optimized Data Utilization',
            description:
              'Organizations can leverage AI to extract valuable insights from NoSQL databases, Internet of Things (IoT) data, and other semi-structured sources.',
          },
        ],
      },
    },
    {
      type: 'applications',
      props: {
        Application: [
          {
            title: 'Legal & Compliance',
            items: [
              {
                points: [
                  'Summarize lengthy contracts, agreements, and regulatory updates.',
                  'Highlight key clauses, obligations, and risks for legal teams.',
                  'Reduce time spent on compliance checks and audits.',
                ],
              },
            ],
          },
          {
            title: 'Healthcare & Life Sciences',
            items: [
              {
                points: [
                  'Generate concise summaries of patient medical histories and lab reports.',
                  'Summarize long clinical trial documents and research papers.',
                  'Provide doctors with quick snapshots for faster decision-making.',
                ],
              },
            ],
          },
          {
            title: 'Banking & Financial Services',
            items: [
              {
                points: [
                  'Condense credit reports, investment research, and financial statements.',
                  'Summarize regulatory filings (SEC, RBI, GDPR) for compliance officers.',
                  'Provide clients with digestible insights from long market analysis.',
                ],
              },
            ],
          },
          {
            title: 'Education & Research',
            items: [
              {
                points: [
                  'Summarize academic papers, dissertations, and case studies.',
                  'Provide quick overviews of study material for students.',
                  'Help researchers scan through multiple sources faster.',
                ],
              },
            ],
          },
          {
            title: 'Corporate & Business',
            items: [
              {
                points: [
                  'Summarize meeting transcripts, board minutes, and project updates.',
                  'Generate executive summaries of strategy documents and reports.',
                  'Speed up internal knowledge sharing across departments.',
                ],
              },
            ],
          },
          {
            title: 'Government & Public Sector',
            items: [
              {
                points: [
                  'Condense lengthy policy drafts, whitepapers, and laws.',
                  'Summarize citizen feedback and consultation responses.',
                  'Provide decision-makers with actionable briefs from large datasets.',
                ],
              },
            ],
          },
          {
            title: 'Customer Support & Service',
            items: [
              {
                points: [
                  'Summarize customer complaints and interaction logs.',
                  'Provide support agents with quick context before handling tickets.',
                  'Reduce resolution time with auto-generated issue briefs.',
                ],
              },
            ],
          },
        ],
      },
    },
  ],
};

export default DocumentSummarizationData;
