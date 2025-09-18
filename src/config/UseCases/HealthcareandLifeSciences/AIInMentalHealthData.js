import Overview from '../../../assets/images/Usecases-images/Healthcare and Life Sciences HLS/AI in Mental Health3.jpeg';
import Image from '../../../assets/images/UsecasesRealWorld/q.jpg';

const AIInMentalHealthData = {
  sections: [
    {
      type: 'hero',
      props: {
        heading: 'AI in Mental Health',
        content:
          'AI supports mental health by providing insights, monitoring patterns, and enhancing personalized care.',
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          'Utilize AI to improve mental health services through early detection, personalized treatment recommendations, and continuous monitoring. AI-driven tools analyze behavioral and emotional patterns, helping practitioners offer timely interventions and better support for patients’ mental well-being.',
        image: Overview,
      },
    },
    {
      type: 'real-world-example',
      props: {
        content:
          'Meta (Facebook) uses AI to scan posts for suicidal intent, triggering timely alerts to crisis support teams and preventing potential harm.',
        backgroundImage: Image,
      },
    },
  ],
};

export default AIInMentalHealthData;
