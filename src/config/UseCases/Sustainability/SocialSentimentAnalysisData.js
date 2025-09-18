import Overview from '../../../assets/images/Usecases-images/Sustainability/Social Sentiment Analysis1.jpeg';
import Image from '../../../assets/images/UsecasesRealWorld/q.jpg'

const SocialSentimentAnalysisData = {
  sections: [
    {
      type: "hero",
      props: {
        heading: "Social Sentiment Analysis",
        content:
          "Unlock insights from social conversations. Measure sentiment, track trends, and understand what your audience feels in real time.",
      },
    },
    {
      type: "overview",
      props: {
        heading: "Overview",
        content:
          "Social sentiment analysis empowers organizations to understand public perception and stakeholder expectations around their ESG performance. By analysing conversations across social media, news, and online communities, businesses can proactively address concerns, build trust, and strengthen their ESG reputation.",
        image: Overview,
      },
    },
    {
      type: "real-world-example",
      props: {
        content:
          "Unilever leverages AI-powered sentiment analysis tools to track consumer opinions on sustainability efforts, ensuring their ESG strategies resonate with global audiences.",
        backgroundImage: Image,
      },
    },
    {
      type: "key-applications",
      props: {
        Applications: [
          {
            icon: "bi bi-emoji-smile",
            heading: "Brand & ESG Monitoring",
            content:
              "Track public sentiment on sustainability initiatives, diversity programs, and community impact.",
          },
          {
            icon: "bi bi-people",
            heading: "Stakeholder Engagement",
            content:
              "Identify community concerns and respond with transparency.",
          },
          {
            icon: "bi bi-exclamation-triangle",
            heading: "Risk Mitigation",
            content:
              "Detect early warning signals of negative publicity or ESG-related controversies.",
          },
          {
            icon: "bi bi-bar-chart-line",
            heading: "Data-Driven Reporting",
            content:
              "Use insights to enhance ESG disclosures and align with stakeholder priorities.",
          },
        ],
      },
    },
  ],
};

export default SocialSentimentAnalysisData;
