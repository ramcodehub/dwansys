import Banner from "../../assets/images/data2.png";
import Overview from "../../assets/images/data3.jpg";

const AIPoweredVirtualAssistanceData = {
  sections: [
    {
      type: "banner",
      props: {
        heading: "AI-Powered Virtual Assistance",
        content:
          "Boost productivity with AI-driven assistants that can understand context, answer queries, and streamline daily tasks.",
        backgroundImage: Banner,
      },
    },
    {
      type: "overview",
      props: {
        heading: "Overview",
        content:
          "AI-powered virtual assistance is revolutionizing the way businesses connect with their customers, igniting a deeper sense of engagement and trust. It’s more than just automation; it’s a powerful force that relieves burdens and unlocks limitless potential. Every interaction becomes meaningful, every task streamlined, and every operation elevated to new heights of excellence. Witness how AI virtual assistants truly reshape our future, fueling innovation with passion and purpose.",
        image: Overview,
      },
    },
    {
      type: "keyBenefits",
      props: {
        benefits: [
          {
            icon: "bi bi-headset text-dark",
            title: "24/7 Instant Customer Support",
            description:
              "Imagine never leaving your customers stranded in long waits; our AI chatbots and virtual agents are tirelessly at your service 24/7, providing instant, compassionate responses that make every customer feel valued and heard.",
          },
          {
            icon: "bi bi-chat-heart text-dark",
            title: "Personalized & Empathetic Interactions",
            description:
              "Feel the warmth of personalized interactions that truly understand and anticipate individual needs, creating connections that foster loyalty and trust.",
          },
          {
            icon: "bi bi-robot text-dark",
            title: "Boosted Productivity Through Automation",
            description:
              "Watch as AI takes over the monotonous, freeing your human team to channel their creativity and passion into meaningful, high-impact work. Experience a surge in productivity as burdensome tasks like scheduling and email management vanish before your eyes, giving your team the space to innovate and excel.",
          },
          {
            icon: "bi bi-arrows-expand text-dark",
            title: "Seamless Scalability for Peak Demand",
            description:
              "And no matter how busy the hours become, our scalable AI solutions stand strong—handling countless conversations simultaneously to ensure your service remains flawless, seamless, and heartfelt, always ready to meet your customers’ needs with unwavering dedication.",
          },
        ],
      },
    },
    {
  type: "applications",
  props: {
    Application: [
      {
        title: "Banking",
        items: [
          {
            points: [
              "Fraud detection + automated compliance checks."
            ],
          },
        ],
      },
      {
        title: "Retail",
        items: [
          {
            points: [
              "Intelligent supply chain optimization and dynamic pricing."
            ],
          },
        ],
      },
      {
        title: "Healthcare",
        items: [
          {
            points: [
              "Personalized treatment planning and automated patient support."
            ],
          },
        ],
      },
      {
        title: "Enterprise IT",
        items: [
          {
            points: [
              "Self-healing systems, predictive maintenance, smart helpdesks."
            ],
          },
        ],
      },
    ],
  },
}
  ],
};

export default AIPoweredVirtualAssistanceData;
