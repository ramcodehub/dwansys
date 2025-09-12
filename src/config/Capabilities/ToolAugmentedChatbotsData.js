import Banner from "../../assets/images/data2.png";
import Overview from "../../assets/images/data3.jpg";

const ToolAugmentedChatbotsData = {
  sections: [
    {
      type: "banner",
      props: {
        heading: "Tool Augmented Chatbots",
        content:
          "Empower chatbots with external tools, enabling them to handle complex tasks with higher accuracy and efficiency.",
        backgroundImage: Banner,
      },
    },
    {
      type: "overview",
      props: {
        heading: "Overview",
        content:
          "In today’s fast-paced digital world, customers expect more than just answers — they expect solutions in real time. A Tool Augmented Chatbot goes beyond traditional chatbots by not only conversing intelligently but also taking actions using integrated tools and systems.",
        image: Overview,
      },
    },
    {
      type: "keyBenefits",
      props: {
        benefits: [
          {
            icon: "bi bi-lightning-charge text-dark",
            title: "Faster Service",
            description: "Resolve queries in seconds with task automation.",
          },
          {
            icon: "bi bi-cash-coin text-dark",
            title: "Reduced Costs",
            description:
              "Lower dependency on human agents for repetitive work.",
          },
          {
            icon: "bi bi-people text-dark",
            title: "Better CX",
            description: "Deliver frictionless, personalized experiences 24/7.",
          },
          {
            icon: "bi bi-bar-chart-line text-dark",
            title: "Data-Driven Insights",
            description: "Track customer needs and predict trends.",
          },
          {
            icon: "bi bi-arrows-expand text-dark",
            title: "Scalable",
            description: "Handles thousands of conversations simultaneously.",
          },
        ],
      },
    },
    {
  type: "applications",
  props: {
    Application: [
      {
        title: "Banking & FinTech",
        items: [
          {
            points: [
              "Balance checks, loan eligibility, KYC automation."
            ],
          },
        ],
      },
      {
        title: "Retail & E-commerce",
        items: [
          {
            points: [
              "Order tracking, product recommendations, returns processing."
            ],
          },
        ],
      },
      {
        title: "Healthcare",
        items: [
          {
            points: [
              "Appointment booking, symptom checker, prescription reminders."
            ],
          },
        ],
      },
      {
        title: "Enterprise Operations",
        items: [
          {
            points: [
              "HR queries, IT support, knowledge management."
            ],
          },
        ],
      },
    ],
  },
}
  ],
};

export default ToolAugmentedChatbotsData;
