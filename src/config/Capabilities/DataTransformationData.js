import Banner from "../../assets/images/CapabilitiesBanner/DataTransformation.png";
import Overview from "../../assets/images/data3.jpg";

const DataTransformationData = {
  sections: [
    {
      type: "banner",
      props: {
        heading: "Data Transformation",
        content:
          "Convert raw, inconsistent data into clean and usable formats that are ready for insights and business applications.",
        backgroundImage: Banner,
      },
    },
    {
      type: "overview",
      props: {
        heading: "Overview",
        content:
          "Raw, untouched data hidden away in isolated silos is nothing but wasted potential—silent, stagnant, and without life. But when you breathe transformation into it, you harness a force capable of revolutionizing your insights, igniting innovation, and fuelling your very success. To truly unlock the profound value of your data, it must be cleaned, shaped, and enriched with purpose—ready to invigorate analytics, empower AI, and elevate your business intelligence to new heights.",
        image: Overview,
      },
    },
    {
      type: "keyBenefits",
      props: {
        benefits: [
          {
            icon: "bi bi-diagram-3 text-dark",
            title: "Breaking Barriers",
            description:
              "Dismantle data silos, merging disparate sources into a mighty, unified force that reveals the whole story.",
          },
          {
            icon: "bi bi-check2-square text-dark",
            title: "Elevating Quality",
            description:
              "Transform chaos into clarity—boost accuracy, consistency, and completeness, turning raw data into a trusted foundation.",
          },
          {
            icon: "bi bi-sliders text-dark",
            title: "Achieving Standardization",
            description:
              "Align data across systems like a symphony, harmonized and ready to sing your organization's true potential.",
          },
          {
            icon: "bi bi-lightning-charge text-dark",
            title: "Preparing for the Future",
            description:
              "Equip your data for the unstoppable wave of AI and machine learning—predicting, automating, and transcending yesterday’s limits.",
          },
          {
            icon: "bi bi-arrow-repeat text-dark",
            title: "Flexibility in Action",
            description:
              "Ignite instant insights with real-time processing or delve into the past with batch analysis, unlocking secrets at every turn.",
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
                subheading: "Patient Data Integration",
                description:
                  "Merge electronic health records (EHR) from multiple systems into a unified patient view.",
              },
              {
                subheading: "Medical Imaging Analysis",
                description:
                  "Standardize imaging data formats for AI-powered diagnosis.",
              },
              {
                subheading: "Regulatory Reporting",
                description:
                  "Clean and prepare healthcare data for HIPAA/GDPR compliance reporting.",
              },
            ],
          },
          {
            title: "Banking & Financial Services",
            items: [
              {
                subheading: "Fraud Detection",
                description:
                  "Cleanse and transform transaction data in real time for anomaly detection.",
              },
              {
                subheading: "Customer 360° View",
                description:
                  "Integrate data across retail, corporate, and wealth management for personalized services.",
              },
              {
                subheading: "Regulatory Compliance",
                description:
                  "Automate reporting by standardizing data for Basel III, AML, and KYC compliance.",
              },
            ],
          },
          {
            title: "Retail & E-Commerce",
            items: [
              {
                subheading: "Personalized Recommendations",
                description:
                  "Aggregate customer purchase data, browsing history, and loyalty data for AI models.",
              },
              {
                subheading: "Inventory Optimization",
                description:
                  "Clean and integrate supplier, sales, and logistics data to balance stock levels.",
              },
              {
                subheading: "Customer Insights",
                description:
                  "Unify structured POS data with unstructured feedback (reviews, social media).",
              },
            ],
          },
          {
            title: "Manufacturing",
            items: [
              {
                subheading: "IoT Data Processing",
                description:
                  "Normalize sensor data from machines for predictive maintenance.",
              },
              {
                subheading: "Supply Chain Visibility",
                description:
                  "Integrate ERP, vendor, and logistics data for end-to-end tracking.",
              },
              {
                subheading: "Quality Assurance",
                description:
                  "Aggregate and analyze production line data to identify defects faster.",
              },
            ],
          },
          {
            title: "Energy & Utilities",
            items: [
              {
                subheading: "Smart Grid Monitoring",
                description:
                  "Transform real-time IoT data from meters into actionable dashboards.",
              },
              {
                subheading: "Demand Forecasting",
                description:
                  "Prepare weather and consumption data for AI-based energy predictions.",
              },
              {
                subheading: "Sustainability Reporting",
                description:
                  "Standardize emissions and energy usage data for ESG compliance.",
              },
            ],
          },
          {
            title: "Telecom",
            items: [
              {
                subheading: "Network Optimization",
                description:
                  "Transform call records and IoT data for predictive maintenance of towers.",
              },
              {
                subheading: "Churn Prediction",
                description:
                  "Integrate customer usage data, complaints, and billing info for ML models.",
              },
              {
                subheading: "Revenue Assurance",
                description:
                  "Cleanse and reconcile billing data across multiple systems.",
              },
            ],
          },
        ],
      },
    },
  ],
};

export default DataTransformationData;
