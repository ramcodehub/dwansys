import Banner from '../../assets/images/CapabilitiesBanner/AutomatedReportDelivery.jpg';
import Overview from '../../assets/images/Capabilities-images/AUTOMATEDREPORTDELIVERY3.jpg';

const AutomatedReportDeliveryData = {
  sections: [
    {
      type: "banner",
      props: {
        heading: "Automated Report Delivery",
        content:
          "Simplify reporting with automated, timely, and accurate delivery of insights to the right stakeholders.",
        backgroundImage: Banner,
      },
    },
    {
      type: "overview",
      props: {
        heading: "Overview",
        content:
          "Automated Report Delivery is revolutionizing how organizations share business insights by streamlining reporting processes and ensuring timely updates. The following provides a comprehensive overview of its key advantages and practical applications across various industries.",
        image: Overview,
      },
    },
    {
      type: "keyBenefits",
      props: {
        benefits: [
          {
            icon: "bi bi-clock-history text-dark",
            title: "Time Efficiency and Productivity Enhancement",
            description:
              "Eliminates manual effort by removing the need to extract, format, and distribute reports manually. Allows employees to dedicate more time to analysis and strategic activities rather than repetitive tasks.",
          },
          {
            icon: "bi bi-graph-up-arrow text-dark",
            title: "Real-Time Updates and Data Accuracy",
            description:
              "Ensures that stakeholders receive current data, facilitating prompt decision-making. Reduces errors associated with manual report generation, such as incorrect figures or missing information.",
          },
          {
            icon: "bi bi-sliders text-dark",
            title: "Customization and Personalization",
            description:
              "Enables tailored reports to meet the specific needs of individual departments or recipients. Supports multiple formats including PDF, Excel, PowerPoint, dashboards, and interactive visualizations.",
          },
          {
            icon: "bi bi-lightbulb text-dark",
            title: "Enhanced Decision-Making Capabilities",
            description:
              "Provides real-time insights to support faster, informed business decisions. Includes automated alerts to notify users of critical trends, risks, or opportunities.",
          },
          {
            icon: "bi bi-shield-lock text-dark",
            title: "Security and Regulatory Compliance",
            description:
              "Implements role-based access controls to restrict sensitive reports to authorized users. Maintains automated audit trails to support compliance with regulations such as GDPR, HIPAA, and SOX.",
          },
          {
            icon: "bi bi-cloud-arrow-up text-dark",
            title: "Multi-Channel Distribution",
            description:
              "Facilitates automatic distribution via email, cloud storage platforms, mobile applications, or collaboration tools like Microsoft Teams and Slack.",
          },
        ],
      },
    },
    {
      type: "applications",
      props: {
        Application: [
          {
            title: "Banking & Financial Services (BFSI)",
            items: [
              {
                subheading: "Regulatory Reporting",
                description:
                  "Automates compliance submissions (Basel III, AML, KYC).",
              },
              {
                subheading: "Risk Dashboards",
                description:
                  "Real-time delivery of credit risk, liquidity, and fraud alerts.",
              },
              {
                subheading: "Customer Insights",
                description:
                  "Personalized investment or spending reports sent directly to clients.",
              },
            ],
          },
          {
            title: "Healthcare & Life Sciences",
            items: [
              {
                subheading: "Patient Care Summaries",
                description:
                  "Automated delivery of lab results and patient health records.",
              },
              {
                subheading: "Operational Reports",
                description:
                  "Daily/weekly hospital occupancy and staff utilization reports.",
              },
              {
                subheading: "Compliance",
                description:
                  "HIPAA/GDPR compliance monitoring reports to stakeholders.",
              },
            ],
          },
          {
            title: "Retail & E-Commerce",
            items: [
              {
                subheading: "Sales & Inventory Dashboards",
                description:
                  "Automated daily stock and sales performance reports.",
              },
              {
                subheading: "Customer Behaviour Insights",
                description:
                  "Reports on browsing history, cart abandonment, and loyalty metrics.",
              },
              {
                subheading: "Campaign Performance",
                description:
                  "Real-time marketing ROI delivered to campaign managers.",
              },
            ],
          },
          {
            title: "Manufacturing & Supply Chain",
            items: [
              {
                subheading: "Production Metrics",
                description:
                  "Automated machine uptime, downtime, and yield reports.",
              },
              {
                subheading: "Supply Chain Monitoring",
                description:
                  "Delivery of logistics performance and supplier compliance reports.",
              },
              {
                subheading: "Predictive Maintenance",
                description:
                  "Automated alerts based on equipment performance data.",
              },
            ],
          },
        ],
      },
    },
  ],
};

export default AutomatedReportDeliveryData;
