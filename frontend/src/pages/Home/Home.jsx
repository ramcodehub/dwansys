import DWANArchitecture from '../../assets/images/Dwan Architecture.png';
import MCP from '../../assets/images/MCP.png';
import Banner from '../../components/Banner/Banner.jsx';
import Clients from '../../components/Clients/Clients.jsx';
import DataManagement from '../../components/DataManagement/DataManagement.jsx';
import LeftRight from '../../components/LeftRightCard/LeftRight.jsx';
import Subscribe from '../../components/Subscribe/Subscribe.jsx';
import UseCases from '../../components/UseCases/UseCases.jsx';
import Video from '../../components/Video/Video.jsx';
import './Home.css';

const Home = () => {
  return (
    <div className="text-center  home">
      <Banner />
      <div className="full-width">
        <Video />
      </div>
      <div className='p-4'></div>
      {/* <Clients /> */}
      <div className="d-flex flex-column  align-items-center justify-content-center description">
        <h1 className="m-0 p-0 lh-1">
          There is still so much left for further digital transformation.
        </h1>
        <h1 className="colored m-0 p-0 lh-1">
          Our team is committed and focused on delivering sustainable solutions!
        </h1>
      </div>
      <div className="d-flex flex-column align-items-center mx-2 twopartcomponent">
        <LeftRight
          image="adv_bg.png"
          heading="Comprehensive Data Collection"
          description="Effortlessly collect data from a variety of sources, including CRM systems,user feedback, website analytics, streaming data, historical data and others.Our  generic model integrates smoothly with your existing tools to deliver a comprehensive overview of your business"
        />
        <LeftRight
          image="cdc_bg.png"
          heading="Advanced Data Visualization"
          description="Easily interpret your data with our intuitive visualization tools. From interactive dashboards to detailed reports, our visualizations help you quickly identify trends, patterns, and opportunities."
          imageLeft={false}
        />
        <LeftRight
          image="BuildingAIFramework.png"
          heading="AI Strategy Frameworks:Establishing Trust and Achieving Success"
          description="We will analyse four prominent frameworks that assist organizations in implementing artificial intelligence in a responsible, effective, and strategic manner"
        />
      </div>
      <div className="m-0 p-0 d-flex align-items-center justify-content-between container my-2 market-sectionn">
        <div className="col-lg-3 text-start">
          <h1 className="market-section-heading">
            Global Artificial Intelligence (AI) Market Dynamics by 2032:
          </h1>
          <p className="fs-6" style={{ color: '#AAAAAA' }}>
            AI market is slated to expand from $371.71 billion in 2025 to $
            2407.02 billion by 2032, at a CAGR of 30.6% during the forecast
            period
          </p>
        </div>
        <div className="col-lg-9 d-flex justify-content-evenly ms-3 py-5 market-section">
          <div className="pe-5 market-section-money" style={{ borderRight: '2px solid #181818' }}>
            <h1> $1494 B</h1>
            <h3>
              AI Market: <b>US</b>
            </h3>
          </div>
          <div className="pe-5 market-section-money" style={{ borderRight: '2px solid #181818' }}>
            <h1 className="text-start"> $306 B</h1>
            <h3>
              AI Market: <b>EMEA</b>
            </h3>
          </div>
          <div>
            <h1 className="text-start"> $607 B</h1>
            <h3>
              AI Market: <b>APAC</b>
            </h3>
          </div>
        </div>
      </div>
      <div className="dwan-architecture">
        <div className="d-flex row pb-5">
          <div className="text-start col-12 col-lg-8">
            <h1 className="fs-1">DWAN Generic Architecture:</h1>
            <h1 className="colored fs-1" style={{ maxWidth: '40ch' }}>
              Data Wisdom Architecture for Next-Gen
            </h1>
          </div>
          <p className="col-12 col-lg-4 text-start fs-5" style={{ color: '#aaaaaa' }}>
            Next-Gen data eco system driven by Artificial Intelligence and human
            expertise
          </p>
        </div>
        <img
          src={DWANArchitecture}
          className="w-100 p-4 rounded-4"
          alt="DWANArchitecture"
        />
      </div>
      <DataManagement />
      <div className="d-flex align-items-center justify-content-around my-5 w-100 mcp">
        <div className="col-lg-5 d-flex flex-column align-items-start">
          <h1 className="m-0 p-0 lh-0">Easy to Integrate:</h1>
          <h2 className="m-0 p-0 colored lh-0 text-start fs-3">
            Seamlessly integrates with your favourite third-party apps — powered
            by a robust model context protocol (MCP) for intelligent
            interoperability
          </h2>
        </div>
        <img
          src={MCP}
          alt="MCP"
          className="col-lg-4 rounded-4 px-5 py-3"
          style={{ border: '2px solid #181818' }}
        />
      </div>
      <div className="full-width bg">
        <UseCases />
      </div>
      <div className="bg-photo d-flex flex-column full-width">
        <Subscribe />
      </div>
    </div>
  );
};

export default Home;
