import Overview from '../../../assets/images/Usecases-images/Banking and Financial Services/AI in Investment and Wealth Management.jpeg';
import Image from '../../../assets/images/UsecasesRealWorld/AI-Powered Investment Optimizati.jpg';

const AIPoweredInvestmentOptimizationData = {
  sections: [
    {
      type: 'hero',
      props: {
        heading: 'AI-Powered Investment Optimization',
        content:
          'Transform investment strategies with AI-driven insights, real-time market analysis, and personalized portfolio optimization for smarter, more confident decisions.',
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          'Artificial Intelligence is transforming the very heart of investment, igniting a new era fuelled by boundless potential and unwavering precision. It delves into the vast depths of financial data and captures the pulse of real-time market dynamics with an unstoppable passion, unlocking opportunities that were once beyond reach.',
        image: Overview,
      },
    },
    {
      type: 'real-world-example',
      props: {
        content:
          ' BlackRock’s pioneering AI-driven platform, Aladdin, stands as a testament to innovation—empowering financial institutions to master risk and elevate portfolios, igniting a revolution in intelligent investing that inspires hope and confidence for a brighter financial future.',
        backgroundImage: Image,
      },
    },
    {
      type: 'key-applications',
      props: {
        Applications: [
          {
            icon: 'bi bi-robot',
            heading: 'Robo-Advisors',
            content:
              'Intelligent platforms provide personalized investment management, guiding clients’ portfolios with precision and insight.',
          },
          {
            icon: 'bi bi-diagram-3',
            heading: 'Portfolio Optimization',
            content:
              'AI crafts investment strategies aligned with individual risk profiles, balancing growth, security, and financial goals.',
          },
          {
            icon: 'bi bi-bar-chart-line',
            heading: 'Sentiment Analysis',
            content:
              'AI analyses news, social media, and market trends to predict market movements and inform confident investment decisions.',
          },
        ],
      },
    },
  ],
};

export default AIPoweredInvestmentOptimizationData;
