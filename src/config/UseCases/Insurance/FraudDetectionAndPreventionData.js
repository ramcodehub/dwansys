import Overview from '../../../assets/images/Usecases-images/Insurance/Fraud Detection & Prevention2.jpeg';
import Image from '../../../assets/images/UsecasesRealWorld/q.jpg'

const FraudDetectionAndPreventionData = {
  sections: [
    {
      type: "hero",
      props: {
        heading: "Fraud Detection And Prevention",
        content:
          "Leverage AI-powered intelligence to detect, prevent, and mitigate fraud with real-time insights and advanced analytics.",
      },
    },
    {
      type: "overview",
      props: {
        heading: "Overview",
        content:
          "AI is transforming insurance fraud detection by uncovering hidden anomalies and verifying claims with precision. By analysing customer behaviour, transaction patterns, and claim submissions in real time, insurers can minimize risks and prevent financial losses.",
        image: Overview,
      },
    },
    {
      type: "real-world-example",
      props: {
        content:
          "Zurich Insurance leverages AI-driven fraud detection to uncover fraudulent claims, reducing losses and strengthening customer trust.",
        backgroundImage: Image,
      },
    },
    {
      type: "key-applications",
      props: {
        Applications: [
          {
            icon: "bi bi-search",
            heading: "Anomaly Detection",
            content:
              "Identifies suspicious claims by benchmarking against historical data.",
          },
          {
            icon: "bi bi-camera-video",
            heading: "Image & Video Analysis",
            content:
              "Uses deep learning to validate accident photos and detect inconsistencies.",
          },
          {
            icon: "bi bi-person-lines-fill",
            heading: "Behavioural Biometrics",
            content:
              "Analyses speech and text patterns during interactions to flag potential fraud.",
          },
        ],
      },
    },
  ],
};

export default FraudDetectionAndPreventionData;
