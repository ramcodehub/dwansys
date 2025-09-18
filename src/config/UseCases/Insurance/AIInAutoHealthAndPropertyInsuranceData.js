import Overview from '../../../assets/images/Usecases-images/Insurance/AI in Auto Health and Property Insurance2.jpeg';
import Image from '../../../assets/images/UsecasesRealWorld/q.jpg'

const AIAutoHealthAndPropertyInsuranceData = {
  sections: [
    {
      type: "hero",
      props: {
        heading: "AI in Auto, Health, and Property Insurance",
        content:
          "Artificial Intelligence is reshaping the insurance sector by enabling smarter risk assessment, personalized pricing, and faster claims management across auto, health, and property segments.",
      },
    },
    {
      type: "overview",
      props: {
        heading: "Overview",
        content:
          "AI is revolutionizing insurance by leveraging data-driven insights across auto, health, and property domains. From telematics-based auto policies to personalized health coverage and property risk analytics, insurers can now deliver faster, fairer, and fraud-resistant solutions.",
        image: Overview,
      },
    },
    {
      type: "real-world-example",
      props: {
        content:
          "Oscar Health leverages AI for personalized health insurance plans and preventive care recommendations.Progressive and Root Insurance use AI telematics to offer personalized car insurance premiums.Farmers Insurance applies AI and drone technology for rapid property damage assessments.",
        backgroundImage: Image,
      },
    },
    {
      type: "key-applications",
      props: {
        Applications: [
          {
            icon: "bi bi-car-front",
            heading: "Auto Insurance",
            content:
              "AI evaluates driving behaviour through telematics and IoT devices, enabling usage-based insurance (UBI), automated accident detection, and faster claims settlement.",
          },
          {
            icon: "bi bi-heart-pulse",
            heading: "Health Insurance",
            content:
              "AI analyses electronic health records, wearable device data, and lifestyle patterns to predict risks, customize policies, and improve fraud detection.",
          },
          {
            icon: "bi bi-house-door",
            heading: "Property Insurance",
            content:
              "AI uses satellite imagery, drones, and predictive analytics to assess property risks, automate claims after natural disasters, and prevent fraudulent claims.",
          },
        ],
      },
    },
    {
      type: "business-impact",
      props: {
        points: [
          {
            title: "Faster",
            text: " and more accurate claims processing",
          },
          {
            title: "Personalized",
            text: "insurance pricing models",
          },
          {
            title: "Improved",
            text: "fraud detection and prevention",
          },
          {
            title: "Enhanced",
            text: "customer trust and satisfaction",
          },
        ],
      },
    },
  ],
};

export default AIAutoHealthAndPropertyInsuranceData;
