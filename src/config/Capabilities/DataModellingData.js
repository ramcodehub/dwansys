import Banner from "../../assets/images/CapabilitiesBanner/DataModelling.png";
import Overview from "../../assets/images/data3.jpg";

const DataModellingData = {
  sections: [
    {
      type: "banner",
      props: {
        heading: "Data Modelling",
        content:
          "Design robust data models and structures that support advanced analytics and empower smarter business decisions.",
        backgroundImage: Banner,
      },
    },
    {
      type: "overview",
      props: {
        heading: "Overview",
        content:
          "A poorly designed data model is a silent thief, draining efficiency and overwhelming our systems with redundancy and chaos. It hampers progress, creating obstacles that hinder innovation and growth. But when we craft a thoughtfully structured data model, we unlock a world of possibilities — enabling us to scale with confidence, adapt with agility, and achieve peak performance. It’s the heart of building powerful, feature-rich applications that truly transform ideas into reality.",
        image: Overview,
      },
    },
    {
      type: "keyBenefits",
      props: {
        benefits: [
          {
            icon: "bi bi-shuffle text-dark",
            title: "Enhanced Data Consistency",
            description:
              "Ensures uniform definitions and relationships across systems.",
          },
          {
            icon: "bi bi-speedometer2 text-dark",
            title: "Optimized Performance",
            description:
              "Reduces redundancy, accelerates query execution, and streamlines reporting.",
          },
          {
            icon: "bi bi-lightbulb text-dark",
            title: "Future-Ready for AI/ML",
            description:
              "Prepares structured, high-quality datasets for advanced analytics and machine learning pipelines.",
          },
          {
            icon: "bi bi-cash-coin text-dark",
            title: "Reduced Development Costs",
            description:
              "Prevents rework and accelerates application development with clear data blueprints.",
          },
          {
            icon: "bi bi-shield-check text-dark",
            title: "Regulatory Compliance",
            description:
              "Ensures accurate, auditable data structures for industries under strict compliance (GDPR, HIPAA, SOX).",
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
                subheading: "Patient 360",
                description: "Integrate EHR, labs, wearables.",
              },
              {
                subheading: "Clinical Research",
                description: "Normalize drug trial data models.",
              },
            ],
          },
          {
            title: "Banking & Finance",
            items: [
              {
                subheading: "Credit Risk",
                description:
                  "Combine transactions and external data for AI scoring.",
              },
              {
                subheading: "AML",
                description:
                  "Schema for tracing suspicious multi-source transactions.",
              },
            ],
          },
          {
            title: "Retail & E-Commerce",
            items: [
              {
                subheading: "Customer Analytics",
                description: "Unify purchase, browsing, loyalty data.",
              },
              {
                subheading: "Inventory & Supply Chain",
                description: "Schemas for real-time tracking and vendor sync.",
              },
            ],
          },
          {
            title: "Manufacturing",
            items: [
              {
                subheading: "IoT Data",
                description: "Streamline logs for predictive maintenance.",
              },
              {
                subheading: "Quality Control",
                description: "Link defects to suppliers and production.",
              },
            ],
          },
          {
            title: "Telecom",
            items: [
              {
                subheading: "Call Records",
                description:
                  "Efficient schema for billions of real-time records.",
              },
              {
                subheading: "Churn Prediction",
                description: "Connect usage, complaints, demographics.",
              },
            ],
          },
          {
            title: "ESG & Utilities",
            items: [
              {
                subheading: "Emissions",
                description: "Models for IoT, reporting, compliance.",
              },
              {
                subheading: "Smart Grids",
                description: "Schemas for real-time energy data.",
              },
            ],
          },
        ],
      },
    },
  ],
};

export default DataModellingData;
