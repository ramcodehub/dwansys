import Banner from "../../assets/images/CapabilitiesBanner/LLMEvaluation.png";
import Overview from "../../assets/images/data3.jpg";

const LLMEvaluationData = {
  sections: [
    {
      type: "banner",
      props: {
        heading: "LLM Evaluation",
        content:
          "Ensure performance, reliability, and safety by evaluating large language models against real-world scenarios and needs.",
        backgroundImage: Banner,
      },
    },
    {
      type: "overview",
      props: {
        heading: "Overview",
        content:
          "Ensuring Quality and Accuracy in AI Models: The evaluation of Large Language Models (LLMs) is vital for maintaining the quality, reliability, and accuracy of AI-generated outputs. Ongoing assessment facilitates the continuous improvement of LLM performance, ensuring alignment with user expectations and industry standards.",
        image: Overview,
      },
    },
    {
      type: "keyBenefits",
      props: {
        benefits: [
          {
            icon: "bi bi-shield-check text-dark",
            title: "Enhances Reliability",
            description: "Minimizes hallucinations and factual inaccuracies.",
          },
          {
            icon: "bi bi-emoji-smile text-dark",
            title: "Improve User Experience",
            description: "Ensures responses effectively address user needs.",
          },
          {
            icon: "bi bi-clipboard-check text-dark",
            title: "Supports Compliance",
            description:
              "Assists organizations in adhering to ethical guidelines and regulatory requirements.",
          },
          {
            icon: "bi bi-speedometer2 text-dark",
            title: "Optimizes Model Performance",
            description: "Employs regular feedback loops to refine AI outputs.",
          },
        ],
      },
    },
    {
      type: "applications",
      props: {
        Application: [
          {
            title: "Customer Support Automation",
            items: [
              {
                subheading: "Challenge",
                description:
                  "Ensuring AI chatbots give accurate, compliant, and unbiased responses.",
              },
              {
                subheading: "LLM Evaluation Role",
                description:
                  "Evaluates correctness, tone, bias, and hallucinations in chatbot answers before deployment.",
              },
              {
                subheading: "Impact",
                description:
                  "Improves customer trust, reduces escalation rates.",
              },
            ],
          },
          {
            title: "Financial & Legal Compliance",
            items: [
              {
                subheading: "Challenge",
                description:
                  "Generative AI outputs may miss regulatory standards or introduce legal risk.",
              },
              {
                subheading: "LLM Evaluation Role",
                description:
                  "Tests model responses against compliance frameworks (GDPR, SOX, HIPAA).",
              },
              {
                subheading: "Impact",
                description:
                  "Prevents reputational and financial risks from non-compliant AI outputs.",
              },
            ],
          },
          {
            title: "Healthcare Applications",
            items: [
              {
                subheading: "Challenge",
                description:
                  "Accuracy is critical for AI systems recommending medical insights.",
              },
              {
                subheading: "LLM Evaluation Role",
                description:
                  "Validates LLM-generated content against clinical knowledge bases.",
              },
              {
                subheading: "Impact",
                description:
                  "Reduces risks in patient-facing AI tools, ensures medical reliability.",
              },
            ],
          },
          {
            title: "Enterprise Knowledge Management",
            items: [
              {
                subheading: "Challenge",
                description: "LLMs may provide outdated or irrelevant answers.",
              },
              {
                subheading: "LLM Evaluation Role",
                description:
                  "Benchmarks accuracy and relevance when retrieving from enterprise knowledge bases.",
              },
              {
                subheading: "Impact",
                description:
                  "Enhances employee productivity, improves decision-making.",
              },
            ],
          },
          {
            title: "Education & E-Learning",
            items: [
              {
                subheading: "Challenge",
                description:
                  "LLMs used as tutors may give incorrect explanations or biased content.",
              },
              {
                subheading: "LLM Evaluation Role",
                description:
                  "Monitors and scores accuracy, pedagogy, and adaptability of AI tutors.",
              },
              {
                subheading: "Impact",
                description:
                  "Ensures learning content remains correct, fair, and effective.",
              },
            ],
          },
          {
            title: "Multilingual & Cross-Cultural Applications",
            items: [
              {
                subheading: "Challenge",
                description:
                  "LLMs may struggle with translation accuracy, tone, or cultural sensitivity.",
              },
              {
                subheading: "LLM Evaluation Role",
                description:
                  "Evaluates language accuracy, cultural context alignment, and inclusivity.",
              },
              {
                subheading: "Impact",
                description:
                  "Enables global companies to safely deploy AI across geographies.",
              },
            ],
          },
          {
            title: "Productivity Tools (Summarization, Search, RAG)",
            items: [
              {
                subheading: "Challenge",
                description:
                  "Hallucinations or irrelevant outputs in summaries and retrievals.",
              },
              {
                subheading: "LLM Evaluation Role",
                description:
                  "Measures factual accuracy, completeness, and readability.",
              },
              {
                subheading: "Impact",
                description: "Builds trust in AI-powered workplace automation.",
              },
            ],
          },
        ],
      },
    },
  ],
};

export default LLMEvaluationData;
