import Banner from '../../assets/images/CapabilitiesBanner/DataIngestion.png';
import Overview from '../../assets/images/Capabilities-images/DataIngestion3.jpg';
import CoreComponentImg from '../../assets/images/Capabilities-images/DataIngestionCore.png';

const DataIngestionData = {
  sections: [
    {
      type: "banner",
      props: {
        heading: "Data Ingestion",
        content:
          "Seamlessly collect and integrate data from multiple sources, ensuring real-time access and smooth entry into your systems.",
        backgroundImage: Banner,
      },
    },
    {
      type: "overview",
      props: {
        heading: "Overview",
        content:
          "In this relentless, ever-evolving world driven by data, your organization’s future depends on more than just collecting information, it depends on the power to harness it with heart and purpose. We breathe life into your data, transforming raw streams from every corner—be it SaaS applications, ERPs, databases, or cloud storages—into a mighty force that fuels your most ambitious AI and analytics breakthroughs. With us, you don’t just move data; you ignite innovation, empower decisions, and elevate your business to new heights.",
        image: Overview,
      },
    },
    {
        type: "core-component",
      props: {
        title: "Extracting & Streaming Real-Time Data for Critical Applications",
        description:
          "Some moments demand immediacy—your decisions hinge on real-time data that’s accurate, fresh, and alive. We make that possible, empowering you to:",
        image: CoreComponentImg,
        extraContent: "With our unwavering dedication to flawless data ingestion, you unleash the true potential of your business—faster decisions, sharper insights, and a passionate pursuit of excellence.",
        points: [
          {
            title: "Customer Behavior Insights",
            text: "Capture every click, every sensor reading, every user interaction—transforming raw streams into powerful insights about customer behavior.",
          },
          {
            title: "Real-Time Fraud Detection",
            text: "Monitoring financial transactions live—spot fraud as it happens, protect your assets, and build trust.",
          },
          {
            title: "Ai & ML Data Feeds",
            text: "Feed your AI and ML models with continuous, up-to-the-minute data—accelerating innovation and refining intelligence.",
          },
          {
            title: "Operational Excellence Monitoring",
            text: "Drive operational excellence—keep a close eye on supply chains, system logs, and user activities to stay ahead of every challenge.",
          },
        ],
      },
},
    {
      type: "keyBenefits",
      props: {
        benefits: [
          {
            icon: "bi bi-universal-access text-dark",
            title: "Unified Data Integration",
            description:
              "Embrace the full spectrum of your data universe—from Salesforce and HubSpot to SAP, Oracle, SQL, NoSQL, and cloud storage providers like AWS, Azure, and Google Cloud. We unify it all, seamlessly and effortlessly.",
          },
          {
            icon: "bi bi-clock text-dark",
            title: "Real-time Batch Processing",
            description:
              "Capture the heartbeat of your operations—whether it’s streaming data pulsing in real-time or bulk data waiting to reveal its secrets. We empower your applications to be lightning-fast and perpetually in sync.",
          },
          {
            icon: "bi bi-arrow-repeat text-dark",
            title: "ETL/ELT Processing",
            description:
              "Transform chaos into clarity. Extract, shape, and load your data into the right warehouses like Snowflake, Big Query, or Redshift, so you can unlock insights with passion and precision.",
          },
          {
            icon: "bi bi-shield-check text-dark",
            title: "Schema Evolution & Data Quality Checks",
            description:
              "We guard your data’s integrity at every step—ensuring consistency, validation, and trustworthiness as your data grows and evolves.",
          },
          {
            icon: "bi bi-server text-dark",
            title: "Scalable & Secure Pipelines",
            description:
              "No matter how vast your data horizon, our enterprise-grade pipelines support petabyte-scale journeys with unwavering security and compliance. Your data’s safety and accessibility are our unwavering promise.",
          },
        ],
      },
    },
    {
      type: "applications",
      props: {
        Application: [
          {
            title: "Banking & Financial Services ",
            items: [
              {
                subheading: "Fraud Detection",
                description:
                  "Stream real-time transaction data to detect anomalies instantly.",
              },
              {
                subheading: "Customer 360",
                description:
                  "Ingest data from CRM, credit bureaus, and mobile apps to build unified profiles.",
              },
              {
                subheading: "Regulatory Compliance",
                description:
                  "Collect and validate data for AML, KYC, and Basel reporting.",
              },
            ],
          },
          {
            title: "Healthcare & Life Sciences",
            items: [
              {
                subheading: "Electronic Health Records ",
                description:
                  "Consolidate patient data from hospitals, labs, and IoT devices.",
              },
              {
                subheading: "Clinical Research",
                description:
                  "Aggregate trial data from multiple systems for advanced analysis.",
              },
              {
                subheading: "Wearable Devices",
                description:
                  "Ingest continuous streams from wearables for remote patient monitoring.",
              },
            ],
          },
          {
            title: "Retail & E-Commerce",
            items: [
              {
                subheading: "Omnichannel Data Capture",
                description:
                  "Merge in-store POS, website, and app data for customer insights.",
              },
              {
                subheading: "Real-Time Inventory",
                description:
                  "Ingest warehouse and supplier feeds to optimize stock levels.",
              },
              {
                subheading: "Personalized Marketing",
                description:
                  "Collect clickstream and loyalty program data for AI-driven offers.",
              },
            ],
          },
          {
            title: "Manufacturing & Supply Chain",
            items: [
              {
                subheading: "IoT Sensor Data",
                description:
                  "Ingest real-time machine performance data for predictive maintenance.",
              },
              {
                subheading: "Supply Chain Optimization",
                description:
                  "Combine ERP, logistics, and supplier data to reduce delays.",
              },
              {
                subheading: "Quality Monitoring",
                description:
                  "Stream production line sensor data to detect defects early.",
              },
            ],
          },
          {
            title: "Energy & Utilities",
            items: [
              {
                subheading: "Smart Meter Data",
                description:
                  "Ingest real-time consumption patterns for billing and efficiency.",
              },
              {
                subheading: "Grid Monitoring",
                description:
                  "Collect live sensor data from transformers, substations, and IoT devices.",
              },
              {
                subheading: "ESG & Compliance",
                description:
                  "Stream emissions data into reporting platforms for sustainability.",
              },
            ],
          },
          {
            title: "Government & Public Sector",
            items: [
              {
                subheading: "Citizen Data Platforms",
                description:
                  "Integrate data from social services, taxation, and health for 360° citizen view.",
              },
              {
                subheading: "Smart Cities",
                description:
                  "Ingest traffic, weather, and IoT data for real-time urban planning.",
              },
              {
                subheading: "Defence & Security",
                description:
                  "Aggregate multiple intelligence feeds for situational awareness.",
              },
            ],
          },
          {
            title: "Education & EdTech",
            items: [
              {
                subheading: "Student Analytics",
                description:
                  "Consolidate LMS, attendance, and performance data for insights.",
              },
              {
                subheading: "Adaptive Learning",
                description:
                  "Real-time ingestion of learning behaviour data to personalize education.",
              },
              {
                subheading: "Institutional Planning",
                description:
                  "Aggregate admissions, finance, and research data for decision-making.",
              },
            ],
          },
        ],
      },
    },
  ],
};

export default DataIngestionData;
