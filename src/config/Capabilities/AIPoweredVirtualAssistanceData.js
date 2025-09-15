import Overview from '../../assets/images/Capabilities-images/AIPoweredVirtualAssistance2.jpg';
import Banner from '../../assets/images/CapabilitiesBanner/AIPoweredVirtualAssistance.jpg';

const AIPoweredVirtualAssistanceData = {
  sections: [
    {
      type: 'banner',
      props: {
        heading: 'AI-Powered Virtual Assistance',
        content:
          'Boost productivity with AI-driven assistants that can understand context, answer queries, and streamline daily tasks.',
        backgroundImage: Banner,
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          'AI-powered virtual assistance is revolutionizing the way businesses connect with their customers, igniting a deeper sense of engagement and trust. It’s more than just automation; it’s a powerful force that relieves burdens and unlocks limitless potential. Every interaction becomes meaningful, every task streamlined, and every operation elevated to new heights of excellence. Witness how AI virtual assistants truly reshape our future, fueling innovation with passion and purpose.',
        image: Overview,
      },
    },
    {
      type: 'keyBenefits',
      props: {
        benefits: [
          {
            icon: 'bi bi-headset text-dark',
            title: '24/7 Instant Customer Support',
            description:
              'Imagine never leaving your customers stranded in long waits; our AI chatbots and virtual agents are tirelessly at your service 24/7, providing instant, compassionate responses that make every customer feel valued and heard.',
          },
          {
            icon: 'bi bi-chat-heart text-dark',
            title: 'Personalized & Empathetic Interactions',
            description:
              'Feel the warmth of personalized interactions that truly understand and anticipate individual needs, creating connections that foster loyalty and trust.',
          },
          {
            icon: 'bi bi-robot text-dark',
            title: 'Boosted Productivity Through Automation',
            description:
              'Watch as AI takes over the monotonous, freeing your human team to channel their creativity and passion into meaningful, high-impact work. Experience a surge in productivity as burdensome tasks like scheduling and email management vanish before your eyes, giving your team the space to innovate and excel.',
          },
          {
            icon: 'bi bi-arrows-expand text-dark',
            title: 'Seamless Scalability for Peak Demand',
            description:
              'And no matter how busy the hours become, our scalable AI solutions stand strong—handling countless conversations simultaneously to ensure your service remains flawless, seamless, and heartfelt, always ready to meet your customers’ needs with unwavering dedication.',
          },
        ],
      },
    },
    {
      type: 'applications',
      props: {
        Application: [
          {
            title: 'Banking & Financial Services',
            items: [
              {
                points: [
                  '24/7 customer support for account queries, transactions, and loan status.',
                  'Personalized financial advice, budget tracking, and fraud alerts.',
                  'AI assistants like Erica (Bank of America) help users with payments and savings goals.',
                ],
              },
            ],
          },
          {
            title: 'Healthcare',
            items: [
              {
                points: [
                  'Virtual health assistants guide patients through symptoms, appointments, and prescriptions.',
                  'Post-care support: medication reminders and lifestyle coaching.',
                  'AI triage bots help reduce hospital load by directing patients to the right care.',
                ],
              },
            ],
          },
          {
            title: 'Retail & E-Commerce',
            items: [
              {
                points: [
                  'Product recommendations based on browsing and purchase history.',
                  'Conversational shopping assistants helping with product discovery and order tracking.',
                  'Virtual try-on guidance (fashion, cosmetics, eyewear).',
                ],
              },
            ],
          },
          {
            title: 'Travel & Hospitality',
            items: [
              {
                points: [
                  'AI concierges for booking flights, hotels, and personalized itineraries.',
                  'Multilingual chatbots for international travellers.',
                  'Real-time updates on flight delays, weather, and rebooking options.',
                ],
              },
            ],
          },
          {
            title: 'Enterprise Productivity',
            items: [
              {
                points: [
                  'Virtual assistants schedule meetings, manage calendars, and take meeting notes.',
                  'Automate employee onboarding with step-by-step guidance.',
                  'Integrated assistants provide quick access to company knowledge bases.',
                ],
              },
            ],
          },
          {
            title: 'Education & Learning',
            items: [
              {
                points: [
                  'Personalized tutors guiding students with interactive Q&A.',
                  'AI assistants recommend courses based on learning pace and career goals.',
                  'Support for international students with visa, admission, and career guidance.',
                ],
              },
            ],
          },
          {
            title: 'Customer Support & Engagement',
            items: [
              {
                points: [
                  'Automate FAQs, technical troubleshooting, and ticket routing.',
                  'Sentiment-aware assistants adapt tone and response style.',
                  'Reduce call centre workload with first-level resolution.',
                ],
              },
            ],
          },
          {
            title: 'Smart Homes & IoT',
            items: [
              {
                points: [
                  'Voice assistants like Alexa, Google Assistant, or Siri manage appliances.',
                  'AI-powered security assistants monitor and alert in real time.',
                  'Personalized home automation (lights, temperature, entertainment).',
                ],
              },
            ],
          },
        ],
      },
    },
  ],
};

export default AIPoweredVirtualAssistanceData;
