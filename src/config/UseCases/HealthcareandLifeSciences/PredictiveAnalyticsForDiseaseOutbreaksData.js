import Overview from '../../../assets/images/Usecases-images/Healthcare and Life Sciences HLS/Predictive Analytics for Disease Outbreaks1.jpeg';
import Image from '../../../assets/images/UsecasesRealWorld/q.jpg'

const PredictiveAnalyticsForDiseaseOutbreaksData = {
  sections: [
    {
      type: "hero",
      props: {
        heading: "Predictive Analytics for Disease Outbreaks",
        content:
          "AI is transforming public health by predicting and managing disease outbreaks through advanced data analysis.",
      },
    },
    {
      type: "overview",
      props: {
        heading: "Overview",
        content:
          "AI enables early detection and proactive management of disease outbreaks by analyzing diverse data sources. From epidemic prediction to pandemic response and healthcare demand forecasting, AI helps public health authorities act swiftly and efficiently.",
        image: Overview,
      },
    },
    {
      type: "real-world-example",
      props: {
        content:
          " BlueDot, an AI-powered system, identified the COVID-19 outbreak before the World Health Organization issued its first warnings—demonstrating AI’s critical role in safeguarding global health.",
        backgroundImage: Image,
      },
    },
    {
      type: "key-applications",
      props: {
        Applications: [
          {
            icon: "bi bi-graph-up",
            heading: "Epidemic Prediction",
            content:
              "AI models analyse data from social media, medical reports, and travel patterns to detect early warning signs of outbreaks.",
          },
          {
            icon: "bi bi-virus",
            heading: "Pandemic Response",
            content:
              "During COVID-19, AI played a key role in tracking virus spread, supporting vaccine development, and guiding public health strategies.",
          },
          {
            icon: "bi bi-hospital",
            heading: "Healthcare Demand Forecasting",
            content:
              "AI forecasts hospital needs, such as ICU beds, ventilators, and staff allocation, ensuring timely preparedness and response.",
          },
        ],
      },
    },
  ],
};

export default PredictiveAnalyticsForDiseaseOutbreaksData;
