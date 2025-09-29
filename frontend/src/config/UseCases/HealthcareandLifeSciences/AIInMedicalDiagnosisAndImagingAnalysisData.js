import Overview from '../../../assets/images/Usecases-images/Healthcare and Life Sciences HLS/AI in Medical Diagnosis and Imaging Analysis1.jpeg';
import Image from '../../../assets/images/UsecasesRealWorld/Ai in medical diagnosis and imag.png';

const AIInMedicalDiagnosisAndImagingAnalysisData = {
  sections: [
    {
      type: 'hero',
      props: {
        heading: 'AI in Medical Diagnosis and Imaging Analysis',
        content:
          'AI enhances medical diagnosis by analyzing imaging data with precision, speed, and accuracy.',
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          'Leverage AI for advanced medical diagnosis and imaging analysis. AI algorithms process medical images to detect anomalies, assist in early disease detection, and support physicians in delivering accurate and timely patient care, ultimately improving healthcare outcomes.',
        image: Overview,
      },
    },
    {
      type: 'real-world-example',
      props: {
        content:
          'Google’s DeepMind developed an AI model that outperformed human experts in diagnosing more than 50 eye diseases using retinal scans.',
        backgroundImage: Image,
      },
    },
  ],
};

export default AIInMedicalDiagnosisAndImagingAnalysisData;
