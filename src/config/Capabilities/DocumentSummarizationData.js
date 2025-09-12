import Banner from "../../assets/images/data2.png";
import Overview from "../../assets/images/data3.jpg";

const DocumentSummarizationData = {
  sections: [
    {
      type: "banner",
      props: {
        heading: "Document Summarization",
        content:
          "Transform lengthy and complex documents into concise, easy-to-digest summaries without losing critical information.",
        backgroundImage: Banner,
      },
    },
    {
      type: "overview",
      props: {
        heading: "Overview",
        content:
          "AI document summarization represents a significant advancement for organizations managing large volumes of unstructured data. It facilitates rapid extraction of key insights, thereby minimizing information overload and supporting more informed decision-making.",
        image: Overview,
      },
    },
    {
      type: "keyBenefits",
      props: {
        benefits: [
          {
            icon: "bi bi-file-earmark-text text-dark",
            title: "Efficient Information Processing",
            description:
              "AI-powered tools distill extensive text into concise, relevant summaries.",
          },
          {
            icon: "bi bi-graph-up text-dark",
            title: "Enhanced Decision-Making",
            description:
              "Access to summarized insights enables decision-makers and staff to act quickly based on accurate data.",
          },
          {
            icon: "bi bi-chat-dots text-dark",
            title: "Improved Virtual Assistance",
            description:
              "AI-driven chatbots and virtual assistants utilize summarized information to deliver more precise and context-aware responses.",
          },
          {
            icon: "bi bi-diagram-3 text-dark",
            title: "Scalability",
            description:
              "AI systems are capable of processing considerable quantities of both structured and unstructured data, making them suitable for sectors such as finance, healthcare, and legal services.",
          },
          {
            icon: "bi bi-database text-dark",
            title: "Optimized Data Utilization",
            description:
              "Organizations can leverage AI to extract valuable insights from NoSQL databases, Internet of Things (IoT) data, and other semi-structured sources.",
          },
        ],
      },
    },
    {
  type: "applications",
  props: {
    Application: [
      {
        title: "Healthcare",
        items: [
          {
            points: [
              "Condensing medical records and research publications for quicker reference."
            ],
          },
        ],
      },
      {
        title: "Finance",
        items: [
          {
            points: [
              "Deriving key insights from financial reports and market analyses."
            ],
          },
        ],
      },
      {
        title: "Customer Support",
        items: [
          {
            points: [
              "Enhancing virtual support tools with summarized information to provide clear and efficient responses to customer inquiries."
            ],
          },
        ],
      },
    ],
  },
}
  ],
};

export default DocumentSummarizationData;
