import CoreComponentImg from '../../assets/images/Capabilities-images/Tool Augmented Chatbots1.png';
import Overview from '../../assets/images/Capabilities-images/ToolAugmentedChatbot.jpg';
import Banner from '../../assets/images/CapabilitiesBanner/ToolAugumentedChatBots.png';

const ToolAugmentedChatbotsData = {
  sections: [
    {
      type: 'banner',
      props: {
        heading: 'Tool Augmented Chatbots',
        content:
          'Empower chatbots with external tools, enabling them to handle complex tasks with higher accuracy and efficiency.',
        backgroundImage: Banner,
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          'In today’s fast-paced digital world, customers expect more than just answers — they expect solutions in real time. A Tool Augmented Chatbot goes beyond traditional chatbots by not only conversing intelligently but also taking actions using integrated tools and systems.',
        image: Overview,
      },
    },
    {
      type: 'capabilities-content',
      props: {
        heading: 'What is a Tool Augmented Chatbot?',
        content:
          'Unlike conventional bots that provide static responses, a Tool Augmented Chatbot is powered by AI + API integrations. It understands queries, analyzes context, and directly executes tasks — from booking appointments to fetching real-time data, running workflows, or even generating reports.',
      },
    },
    {
      type: 'capabilities-content',
      props: {
        heading: 'Why Choose Our Chatbot?',
        content:
          'Our Tool Augmented Chatbot is built with advanced AI, secure integrations, and enterprise-grade scalability. It’s not just a chatbot — it’s your always-on digital co-worker that ensures your business stays ahead.',
      },
    },
    {
      type: 'core-component',
      props: {
        title: 'Think of it as a virtual assistant with superpowers',
        subtitle: 'High-Level features of Tool Augmented Chatbot',
        description:
          'Understanding natural language like a human. Connects with enterprise tools (CRM, ERP, HRMS, analytics, etc.). Acts instantly to deliver results, not just responses.',
        image: CoreComponentImg,
        points: [
          {
            title: 'Context-Aware Conversations',
            text: 'Personalized interactions based on history and preferences.',
          },
          {
            title: 'Seamless Integrations',
            text: 'Connects with databases, SaaS tools, and enterprise systems.',
          },
          {
            title: 'Normalization & Aggregation',
            text: 'Standardize formats and consolidate information for deeper analysis.',
          },
          {
            title: 'Action-Oriented AI',
            text: 'Executes commands like creating tickets, generating invoices, or pulling analytics.',
          },
          {
            title: 'Omnichannel Support ',
            text: 'Available across web, mobile apps, WhatsApp, and social channels.',
          },
          {
            title: 'Continuous Learning',
            text: 'Improves with every interaction.',
          },
        ],
      },
    },
    {
      type: 'keyBenefits',
      props: {
        benefits: [
          {
            icon: 'bi bi-lightning-charge text-dark',
            title: 'Faster Service',
            description: 'Resolve queries in seconds with task automation.',
          },
          {
            icon: 'bi bi-cash-coin text-dark',
            title: 'Reduced Costs',
            description:
              'Lower dependency on human agents for repetitive work.',
          },
          {
            icon: 'bi bi-people text-dark',
            title: 'Better CX',
            description: 'Deliver frictionless, personalized experiences 24/7.',
          },
          {
            icon: 'bi bi-bar-chart-line text-dark',
            title: 'Data-Driven Insights',
            description: 'Track customer needs and predict trends.',
          },
          {
            icon: 'bi bi-arrows-expand text-dark',
            title: 'Scalable',
            description: 'Handles thousands of conversations simultaneously.',
          },
        ],
      },
    },
    {
      type: 'applications',
      props: {
        Application: [
          {
            title: 'Customer Support & Service',
            items: [
              {
                subheading: 'Order Tracking & Returns',
                description:
                  'Chatbot fetches live order status from ERP, initiates return and generates shipping labels.',
              },
              {
                subheading: 'Account Management',
                description:
                  'Agents reset passwords, update contact details, and issue billing statements by connecting to CRM/ERP.',
              },
              {
                subheading: 'Proactive Assistance',
                description:
                  'When a customer reports an issue, the bot checks system logs, suggests fixes, or creates a support ticket automatically.',
              },
            ],
          },
          {
            title: 'Banking & Financial Services',
            items: [
              {
                subheading: 'Balance & Transactions',
                description:
                  'Fetches account balances, recent statements, and loan details directly from core banking systems.',
              },
              {
                subheading: 'Payments & Transfers',
                description:
                  'Executes fund transfers, bill payments, and credit card settlements securely.',
              },
              {
                subheading: 'Fraud Alerts',
                description:
                  'Flags unusual transactions and initiates fraud-prevention workflows.',
              },
            ],
          },
          {
            title: 'Healthcare',
            items: [
              {
                subheading: 'Appointment Scheduling',
                description:
                  'Connects with hospital scheduling systems to book or reschedule appointments.',
              },
              {
                subheading: 'Prescription Refills',
                description:
                  'Reorders medicines through integrated pharmacy systems.',
              },
              {
                subheading: 'Health Record Access',
                description:
                  'Retrieves test results, vaccination history, or care plans securely.',
              },
            ],
          },
          {
            title: 'E-Commerce & Retail',
            items: [
              {
                subheading: 'Product Discovery',
                description:
                  'Searches live inventory, recommends products, and applies discounts.',
              },
              {
                subheading: 'Cart & Checkout',
                description:
                  'Adds products to cart, calculates shipping costs, and processes payments.',
              },
              {
                subheading: 'Post-Purchase Engagement',
                description:
                  'Initiates warranty claims, loyalty point updates, or personalized upselling.',
              },
            ],
          },
          {
            title: 'Human Resources & Employee Services',
            items: [
              {
                subheading: 'Leave & Attendance',
                description:
                  'Submits leave requests and fetches balances from HRMS.',
              },
              {
                subheading: 'Payroll & Benefits',
                description:
                  'Shares payslips, tax forms, and benefits eligibility.',
              },
              {
                subheading: 'Onboarding',
                description:
                  'Guides new employees through document submission, IT setup, and training.',
              },
            ],
          },
          {
            title: 'IT Helpdesk & Operations',
            items: [
              {
                subheading: 'Incident Management',
                description:
                  'Creates, updates, and closes tickets in ServiceNow, JIRA, or Fresh service.',
              },
              {
                subheading: 'System Diagnostics',
                description:
                  'Runs health checks on servers or applications, restarts services, or triggers alerts.',
              },
              {
                subheading: 'Knowledge Retrieval',
                description:
                  'Searches Confluence or SharePoint for troubleshooting guides.',
              },
            ],
          },
          {
            title: 'Travel & Hospitality',
            items: [
              {
                subheading: 'Booking Management',
                description:
                  'Reserves flights, hotels, or taxis through integration with travel platforms.',
              },
              {
                subheading: 'Itinerary Updates',
                description:
                  'Pushes flight changes, delays, or hotel check-in reminders.',
              },
              {
                subheading: 'Loyalty Programs',
                description: 'Checks points balance and redeems rewards.',
              },
            ],
          },
        ],
      },
    },
  ],
};

export default ToolAugmentedChatbotsData;
