import Overview from '../../../assets/images/Usecases-images/Healthcare and Life Sciences HLS/Wearable Health Tech & Remote Monitoring2.jpeg';
import Image from '../../../assets/images/UsecasesRealWorld/Variable Health tech and remote .jpg';

const WearableHealthTechAndRemoteMonitoringData = {
  sections: [
    {
      type: 'hero',
      props: {
        heading: 'Wearable Health Tech & Remote Monitoring',
        content:
          'AI-powered wearable devices and IoT sensors are transforming healthcare by enabling continuous, real-time monitoring of patient health.',
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          'Wearable technology combined with AI and IoT enables continuous health tracking, empowering both patients and healthcare providers with real-time insights. From heart rate monitoring to glucose tracking and remote patient management, these solutions enhance preventive care and improve medical outcomes.',
        image: Overview,
      },
    },
    {
      type: 'real-world-example',
      props: {
        content:
          'Apple Watch’s ECG feature detects atrial fibrillation (AFib), helping prevent potential strokes and heart attacks through early alerts.',
        backgroundImage: Image,
      },
    },
    {
      type: 'key-applications',
      props: {
        Applications: [
          {
            icon: 'bi bi-heart-pulse',
            heading: 'Heart Rate & ECG Monitoring',
            content:
              'Smartwatches and wearables detect irregular heart rhythms, alerting users and doctors about potential cardiac issues before they become critical.',
          },
          {
            icon: 'bi bi-droplet-half',
            heading: 'Blood Sugar Monitoring',
            content:
              'AI-enabled biosensors allow diabetes patients to track glucose levels seamlessly, improving daily management and reducing risks.',
          },
          {
            icon: 'bi bi-hospital',
            heading: 'Remote Patient Monitoring',
            content:
              'AI analyses streams of health data from wearable devices to identify early warning signs of health deterioration, enabling timely intervention.',
          },
        ],
      },
    },
  ],
};

export default WearableHealthTechAndRemoteMonitoringData;
