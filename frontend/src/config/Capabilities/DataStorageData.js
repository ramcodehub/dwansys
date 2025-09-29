import Banner from "../../assets/images/CapabilitiesBanner/DataStorage.png";
import Overview from "../../assets/images/Capabilities-images/DataStorage1.jpg";
import Image from "../../assets/images/Capabilities-images/DataStorage1.png";

const DataStorageData = {
  sections: [
    {
      type: "banner",
      props: {
        heading: "Data Storage",
        content:
          "Secure, scalable, and intelligent data storage that transforms information into a powerful driver of growth and innovation.",
        backgroundImage: Banner,
      },
    },
    {
      type: "overview",
      props: {
        heading: "Overview",
        content:
          "Data Storage is the backbone of every modern digital ecosystem, ensuring that valuable information is securely captured, organized, and easily accessible. By leveraging scalable architectures, cloud integration, and advanced security protocols, businesses can manage vast amounts of data efficiently while maintaining reliability and compliance. Effective data storage solutions not only safeguard critical assets but also empower organizations to analyze, share, and utilize information for innovation and growth.",
        image: Overview,
      },
    },
    {
      type: "capabilities-content",
      props: {
        heading:
          "Ignite the Power of Analytics & AI with Limitless Possibilities",
        content:
          "Today, organizations stand at the crossroads of a data revolution—an overwhelming surge of information that demands not just storage, but passionate mastery. Every byte holds the potential to transform, inspire, and propel your vision forward. Whether you crave a lightning-fast Data Warehouse to fuel real-time, heart-pounding dashboards or a cost-effective Data Lake to capture the vast ocean of data, we are here to empower your journey.",
      },
    },
    {
      type: "core-component",
      props: {
        title: "Data Warehousing: Unleashing the Heartbeat of Your Business",
        subtitle: "Unleashing the Full Power of Data Storage & Analytics",
        description:
          "A robust Data Warehouse isn't just a tool—it's the beating heart of your enterprise’s intelligence. It unifies your vital data streams, supporting real-time analytics, vivid BI dashboards, and insightful reports that stir action. This is where clarity meets innovation.",
        extraContent:
          "Perfect for transforming financial reports, energizing sales strategies, elevating operational intelligence, and igniting AI-driven decisions that revolutionize your business.Let us partner with you to turn data into your most passionate advocate. Together, we’ll unlock the true potential of your information—fueling innovation with every insight.",
        image: Image,
        points: [
          {
            title: "Lightning-Fast Queries ",
            text: "Engineered for blazing, immediate insights that keep you one step ahead.",
          },
          {
            title: "Effortless Integration ",
            text: "Seamlessly connect with tools like Power BI, Tableau, Looker, bringing your data to life.",
          },
          {
            title: "Structured Data with Purpose ",
            text: "Schema-on-Write ensures every piece is trustworthy, governed, and ready to inspire confidence.",
          },
          {
            title: "Cloud-Powered & Limitless ",
            text: "Harness the power of Snowflake, Google Big Query, Amazon Redshift, Azure Synapse-scaling with your ambition.",
          },
          {
            title: "Future-Forward Analytics ",
            text: "Dive into historical insights, harness AI-driven forecasting, and uncover trends that shape tomorrow.",
          },
        ],
      },
    },
  ],
};

export default DataStorageData;