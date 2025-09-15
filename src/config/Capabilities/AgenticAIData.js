import CoreComponentImg from '../../assets/images/Capabilities-images/AgenticAI.png';
import Overview from '../../assets/images/Capabilities-images/AgenticAI1.jpg';
import Banner from '../../assets/images/CapabilitiesBanner/ai.png';

const AgenticAIData = {
  sections: [
    {
      type: 'banner',
      props: {
        heading: 'Agentic AI',
        content:
          'Deploy advanced AI agents capable of reasoning, planning, and executing tasks autonomously to support business growth.',
        backgroundImage: Banner,
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          'In the next evolution of artificial intelligence, Agentic AI is transforming how organizations operate. Unlike traditional AI systems that wait for prompts, Agentic AI consists of autonomous agents capable of reasoning, planning, and taking actions across digital ecosystems.',
        image: Overview,
      },
    },
    {
      type: 'capabilities-content',
      props: {
        heading: 'What is Agentic AI?',
        content:
          'Agentic AI is an AI model designed to function as a decision-making agent. It doesn’t just respond — it analyzes goals, chooses strategies, interacts with tools, and adapts dynamically to achieve outcomes.',
      },
    },
    {
      type: 'core-component',
      props: {
        title: 'Think of it as having a digital workforce of AI agents',
        subtitle: 'Capabilities of Agentic AI',
        description:
          'These AI agents can reason by breaking down complex problems into actionable steps, plan by mapping out workflows to achieve business goals, act by executing tasks across integrated applications and tools, and adapt by learning from results to continuously improve.',
        image: CoreComponentImg,
        points: [
          {
            title: 'Multi-Step Problem Solving ',
            text: 'Handles tasks that require multiple layers of reasoning.',
          },
          {
            title: 'Autonomous Workflows',
            text: 'Completes processes without constant human intervention.',
          },
          {
            title: 'Tool Augmentation',
            text: 'Connects seamlessly with CRMs, ERPs, APIs, and cloud apps.',
          },
          {
            title: 'Collaboration',
            text: 'Works alongside humans and other AI agents.',
          },
          {
            title: 'Learning & Optimization ',
            text: 'Continuously refines its approach to improve efficiency.',
          },
        ],
      },
    },
    {
      type: 'keyBenefits',
      props: {
        benefits: [
          {
            icon: 'bi bi-gear-wide-connected text-dark',
            title: 'Efficiency at Scale',
            description: 'Automate complex, end-to-end processes.',
          },
          {
            icon: 'bi bi-diagram-3 text-dark',
            title: 'Cost Reduction',
            description: 'Minimize repetitive manual work.',
          },
          {
            icon: 'bi bi-check2-circle text-dark',
            title: 'Enhanced Decision-Making',
            description: 'Access AI-driven recommendations in real time.',
          },
          {
            icon: 'bi bi-funnel text-dark',
            title: 'Faster Innovation',
            description:
              'Deploy agents for R&D, customer service, operations, and more.',
          },
          {
            icon: 'bi bi-bar-chart-line text-dark',
            title: 'Competitive Advantage',
            description:
              'Stay ahead with adaptive, self-improving AI ecosystems.',
          },
        ],
      },
    },
    {
      type: 'applications',
      props: {
        Application: [
          {
            title: 'Customer Service & Experience',
            items: [
              {
                subheading: 'Autonomous Issue Resolution',
                description:
                  'AI agents handle customer complaints by not only responding but also initiating refunds, scheduling service calls, or updating records.',
              },
              {
                subheading: 'Proactive Support',
                description:
                  'Agents detect usage anomalies (e.g., unusually high mobile data use) and suggest plans or remedial actions before the customer even complains.',
              },
            ],
          },
          {
            title: 'Healthcare',
            items: [
              {
                subheading: 'Personalized Health Coaches',
                description:
                  'AI agents monitor wearable/IoT health data and autonomously schedule doctor appointments, suggest lifestyle changes, or reorder prescriptions.',
              },
              {
                subheading: 'Clinical Trial Management',
                description:
                  'Agents manage participant onboarding, consent verification, and trial monitoring with compliance automation.',
              },
            ],
          },
          {
            title: 'Finance & Banking',
            items: [
              {
                subheading: 'Autonomous Wealth Management',
                description:
                  'AI agents rebalance portfolios, execute trades, and optimize tax strategies without waiting for human triggers.',
              },
              {
                subheading: 'Fraud Prevention',
                description:
                  'Agents detect suspicious transactions and proactively freeze accounts or alert compliance officers.',
              },
            ],
          },
          {
            title: 'Enterprise Operations',
            items: [
              {
                subheading: 'Workflow Automation',
                description:
                  'Autonomous AI coordinates across HR, finance, and IT systems to onboard new employees without manual handoffs.',
              },
              {
                subheading: 'Procurement & Supply Chain',
                description:
                  'Agents negotiate with suppliers, manage purchase orders, and adjust inventory levels based on forecasts.',
              },
            ],
          },
          {
            title: 'Sales & Marketing',
            items: [
              {
                subheading: 'Intelligent Outreach',
                description:
                  'Agents identify high-value leads, draft personalized emails, and schedule meetings autonomously.',
              },
              {
                subheading: 'Dynamic Campaign Optimization',
                description:
                  'AI monitors campaign KPIs and reallocates ad spend across channels in real-time.',
              },
            ],
          },
          {
            title: 'Software Development & IT',
            items: [
              {
                subheading: 'Self-Healing IT Systems',
                description:
                  'AI agents detect outages, apply fixes, and even provision backup infrastructure autonomously.',
              },
              {
                subheading: 'Autonomous Code Assistant',
                description:
                  'Beyond generating code, agents run tests, debug, and deploy patches proactively.',
              },
            ],
          },
          {
            title: 'Government & Smart Cities',
            items: [
              {
                subheading: 'Citizen Services',
                description:
                  'AI agents process permits, tax filings, or license renewals with minimal human intervention.',
              },
              {
                subheading: 'Urban Infrastructure',
                description:
                  'Agents manage energy distribution, optimize traffic lights, or monitor environmental compliance.',
              },
            ],
          },
        ],
      },
    },
  ],
};

export default AgenticAIData;
