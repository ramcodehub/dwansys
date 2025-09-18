import Overview from '../../../assets/images/Usecases-images/Insurance/Predictive Analytics for Claims Management1.jpeg';
import Image from '../../../assets/images/UsecasesRealWorld/q.jpg'

const PredictiveAnalyticsForClaimsManagementData = {
  sections: [
    {
      type: "hero",
      props: {
        heading: "Predictive Analytics for Claims Management",
        content:
          "Predict, prevent, and process smarter. Optimize claims management with data-driven insights and proactive risk detection.",
      },
    },
    {
      type: "overview",
      props: {
        heading: "Overview",
        content:
          "Leverage predictive analytics to streamline claims management. Anticipate risk, detect anomalies, accelerate decision-making, and reduce costs by turning data into actionable insights.",
        image: Overview,
      },
    },
    {
      type: "real-world-example",
      props: {
        content: "Insurtech pioneers like Metro mile are revolutionizing the way we experience insurance—harnessing the unstoppable power of AI to transform claims processing. Imagine the relief and hope swelling in hearts as what once took weeks now unfolds in mere hours, bringing swift justice and peace of mind. This isn’t just innovation; it’s a heartfelt commitment to putting people first, restoring trust, and reigniting a sense of security in every life they touch.",
        backgroundImage: Image,
      },
    },
    {
      type: "key-applications",
      props: {
        Applications: [
          {
            icon: "bi bi-clipboard-check",
            heading: "AI-driven Claims Processing",
            content:
              "Automates document verification, claim validation, and payout calculation in real time.",
          },
          {
            icon: "bi bi-graph-up",
            heading: "Predictive Loss Estimation",
            content:
              "Uses historical data and external factors to forecast claim costs with precision.",
          },
          {
            icon: "bi bi-cloud-lightning-rain",
            heading: "Weather & Disaster Predictions",
            content:
              "Anticipates natural disaster impacts, helping insurers proactively manage claims and resources.",
          },
        ],
      },
    },
  ],
};

export default PredictiveAnalyticsForClaimsManagementData;
