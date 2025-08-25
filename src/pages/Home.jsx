import Banner from '../components/Banner/Banner';
import MediaLogos from '../components/MediaLogos/MediaLogos.jsx';
import Video from '../components/Video/Video.jsx';
import LeftRight from '../components/LeftRightCard/LeftRight.jsx';
import './Home.css'

const Home = () => {
  return (
    <div className="d-flex flex-column text-center gap-3 align-items-center home">
      <Banner/>
      <Video/>
      <MediaLogos/>
      <h1 className='m-0 p-0 lh-1'>There is still so much left for further 
        digital transformation.</h1>
      <h1 className='colored m-0 p-0 lh-1'>Our team is committed and focused 
        on delivering sustainable solutions!</h1>
      <LeftRight image='adv_bg.png'
                heading="Comprehensive Data Collection"
                description="Effortlessly collect data from a variety of sources, including CRM systems,user feedback, website analytics, streaming data, historical data and others.Our  generic model integrates smoothly with your existing tools to deliver a comprehensive overview of your business"/>
      <LeftRight image='cdc_bg.png'
                heading="Advanced Data Visualization"
                description="Easily interpret your data with our intuitive visualization tools. From interactive dashboards to detailed reports, our visualizations help you quickly identify trends, patterns, and opportunities."
                imageLeft={false}/>
      <LeftRight image='BuildingAIFramework.png'
                heading="AI Strategy Frameworks:Establishing Trust and Achieving Success"
                description="We will analyse four prominent frameworks that assist organizations in implementing artificial intelligence in a responsible, effective, and strategic manner"/>

      <div className='d-flex align-items-center justify-content-center container my-2'>
        <div className='col-lg-3 text-start'>
          <h1 className='fs-3'>Global Artificial Intelligence (AI) Market Dynamics by 2032:</h1>
          <p className='fs-6' style={{color:'#AAAAAA'}}>AI market is slated to expand from $371.71 billion in 2025 to $ 2407.02 billion by 2032, at a CAGR of 30.6% during the forecast period</p>
        </div>
        <div className='col-lg-9 d-flex justify-content-evenly ms-3 py-5 market-section'>
          <div className='pe-5' style={{borderRight:'2px solid #181818'}}>
            <h1> $1494 B</h1>
            <h3>AI Market: <b>US</b></h3>
          </div>
          <div className='pe-5' style={{borderRight:'2px solid #181818'}}>
            <h1 className='text-start'> $306 B</h1>
            <h3>AI Market: <b>EMEA</b></h3>
          </div>
          <div>
            <h1 className='text-start'> $607 B</h1>
            <h3>AI Market: <b>APAC</b></h3>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
