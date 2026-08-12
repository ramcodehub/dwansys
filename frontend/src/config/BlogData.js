import CloudComputing from '../assets/images/blog-images/cloud-computing.webp';
import ReactRouting from '../assets/images/blog-images/react-routing.png';
import WorkLifeBalance from '../assets/images/blog-images/work-life-balance.jpg';
import FutureOfAI from '../assets/images/blog-images/future-of-ai.avif';
import FastapivsExpress from '../assets/images/blog-images/fastapi-vs-express.png';
import DigitalMarketing from '../assets/images/blog-images/digital-marketing.jpg';
import AIHLS from '../assets/images/blog-images/blog-ai-hls.png';

const blogs = [
  {
    id: 'ai-life-sciences-chatgpt',
    title: 'AI Meets Life Sciences',
    excerpt:
      'Explore how Generative AI is accelerating pharmaceutical research, clinical trials, and enterprise innovation.',
    image: AIHLS,
    date: '02-07-2026',
    externalUrl: 'https://intuitionlabs.ai/articles/astrazeneca-chatgpt-case-study',
    openInNewTab: true,
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing Explained',
    excerpt: 'A beginner-friendly guide to cloud computing concepts.',
    image: CloudComputing,
    date: '12-12-2025',
    content: `
      Cloud computing refers to the delivery of computing resources such as servers, storage, databases, networking, and software through the internet instead of relying on local hardware. This approach allows businesses and individuals to access powerful infrastructure without investing in physical systems, making technology more accessible and cost-effective.

One of the biggest advantages of cloud computing is its flexibility and scalability. Organizations can increase or decrease resources based on demand, ensuring optimal performance while paying only for what they use. This makes cloud platforms ideal for startups, enterprises, and rapidly growing applications.

Cloud computing also improves collaboration and reliability. Data and applications can be accessed from anywhere, enabling remote work and global operations. With built-in backup systems, security measures, and disaster recovery, cloud providers help ensure data availability and business continuity in an increasingly digital world.
    `,
  },
  {
    id: 'react-routing',
    title: 'Understanding React Routing',
    excerpt: 'Learn how routing works in React applications.',
    image: ReactRouting,
    date: '12-12-2025',
    content: `
      React routing is a fundamental concept used to build modern single-page applications where navigation happens without refreshing the browser. Instead of loading new pages from the server, React dynamically renders components based on the URL, resulting in a faster and smoother user experience.

React Router is the most commonly used library for handling routing in React applications. It enables developers to define routes that map URLs to components, allowing users to navigate naturally using browser history, bookmarks, and direct links. This approach makes applications feel more responsive and intuitive.

As applications grow, routing plays a critical role in organizing layouts, managing nested views, and handling dynamic paths. Proper routing improves application structure, enhances performance, and ensures scalability as the project evolves.
    `,
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Fundamentals',
    excerpt: 'An overview of modern digital marketing strategies.',
    image: DigitalMarketing,
    date: '12-12-2025',
    content: `
      Digital marketing focuses on promoting products and services through online channels such as websites, search engines, social media platforms, and email. Unlike traditional marketing, digital marketing allows businesses to reach targeted audiences with measurable and data-driven strategies.

With digital marketing, organizations can track user behavior, analyze engagement, and optimize campaigns in real time. This enables better decision-making and improved return on investment. Personalized messaging and automation also help build stronger relationships with customers.

In today’s competitive landscape, digital marketing has become essential for brand visibility and growth. Businesses that effectively leverage digital platforms can expand their reach, strengthen customer trust, and adapt quickly to changing market trends.
    `,
  },
  {
    id: 'fastapi-vs-express',
    title: 'FastAPI vs Express',
    excerpt: 'A comparison between FastAPI and Express.js.',
    image: FastapivsExpress,
    date: '12-12-2025',
    content: `
      FastAPI and Express are popular frameworks for building backend applications and APIs, but they are designed for different ecosystems and development styles. FastAPI is a modern Python framework focused on performance, type safety, and automatic documentation, making it especially suitable for data-intensive and AI-driven applications.

Express is a lightweight and flexible framework built on Node.js that gives developers full control over request handling and middleware. Its simplicity and large ecosystem make it a common choice for JavaScript-based applications and full-stack development.

The choice between FastAPI and Express depends on factors such as programming language preference, application requirements, and team expertise. Both frameworks are powerful, scalable, and widely adopted in production environments.
    `,
  },
  {
    id: 'future-of-ai',
    title: 'The Future of Artificial Intelligence',
    excerpt: 'How AI will shape industries and daily life.',
    image: FutureOfAI,
    date: '12-12-2025',
    content: `
      Artificial Intelligence is rapidly evolving and transforming industries by automating tasks, improving efficiency, and enabling intelligent decision-making. From healthcare and finance to education and entertainment, AI is becoming deeply integrated into everyday life.

Future advancements in AI will focus on systems that can learn, reason, and interact more naturally with humans. Technologies such as generative AI and intelligent agents are expected to reshape how content is created, how businesses operate, and how users interact with digital products.

While AI presents enormous opportunities, it also raises important ethical and societal questions. Responsible development, transparency, and fairness will play a crucial role in ensuring that AI benefits society while minimizing risks and unintended consequences.
    `,
  },
  {
    id: 'work-life-balance',
    title: 'Work–Life Balance in the Digital Era',
    excerpt: 'Maintaining balance in a connected world.',
    image: WorkLifeBalance,
    date: '12-12-2025',
    content: `
      Work–life balance refers to maintaining a healthy relationship between professional responsibilities and personal well-being. With the rise of remote work and digital tools, the boundaries between work and life have become increasingly blurred. 
Constant connectivity can lead to stress, burnout, and reduced productivity if not managed properly. Establishing boundaries, managing time effectively, and prioritizing mental health are essential for sustaining long-term performance and satisfaction.
Organizations that promote work–life balance create healthier work environments and more engaged teams. When individuals feel supported and balanced, they are more motivated, creative, and capable of delivering meaningful results.
    `,
  },
];

export default blogs;