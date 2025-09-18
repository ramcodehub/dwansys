import Overview from '../../../assets/images/Usecases-images/Sustainability/Climate Risk Modelling2.jpeg';
import Image from '../../../assets/images/UsecasesRealWorld/q.jpg'

const ClimateRiskModellingData = {
  sections: [
    {
      type: "hero",
      props: {
        heading: "Climate Risk Modelling",
        content:
          "Quantify climate risks and future impacts. Model scenarios to safeguard assets, ensure sustainability, and support strategic planning.",
      },
    },
    {
      type: "overview",
      props: {
        heading: "Overview",
        content:
          "AI-driven climate risk modelling empowers organizations to anticipate and mitigate the impact of environmental changes on their business operations and assets. By combining historical climate data with predictive analytics, companies can make smarter, more resilient decisions.",
        image: Overview,
      },
    },
    {
      type: "real-world-example",
      props: {
        content:
          "BlackRock uses AI-powered climate models to assess portfolio exposure to climate risks, helping investors make sustainable and resilient decisions.",
        backgroundImage: Image,
      },
    },
    {
      type: "key-applications",
      props: {
        Applications: [
          {
            icon: "bi bi-cloud-drizzle",
            heading: "Extreme Weather Prediction",
            content:
              "AI forecasts floods, storms, heatwaves, and droughts that may disrupt supply chains or assets.",
          },
          {
            icon: "bi bi-houses",
            heading: "Asset Vulnerability Analysis",
            content:
              "Machine learning models evaluate how factories, warehouses, or real estate are exposed to climate risks.",
          },
          {
            icon: "bi bi-bar-chart-steps",
            heading: "Scenario Planning",
            content:
              "Businesses simulate multiple climate scenarios (2°C, 4°C rise, etc.) to design future-proof strategies.",
          },
          {
            icon: "bi bi-journal-check",
            heading: "Regulatory Compliance",
            content:
              "Supports TCFD (Task Force on Climate-Related Financial Disclosures) and ESG compliance reporting.",
          },
        ],
      },
    },
  ],
};

export default ClimateRiskModellingData;
