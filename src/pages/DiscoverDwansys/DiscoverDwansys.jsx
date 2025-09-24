import Commitment from '../../assets/images/Commitment.jpeg';
import L from '../../assets/images/l.jpg';
import Philosophy from '../../assets/images/Philosophy1.jpeg';
import LeftRight from '../../components/LeftRightCard/LeftRight';
import './DiscoverDwansys.css';

const DiscoverDwansys = () => {
  return (
    <div className="discover-dwansys">
      <div className="full-width">
        <section className="heroo-section">
          <div className="heroo-content d-flex flex-column align-items-start">
            <h1 className="fw-bolder m-0 p-0">Data to Wisdom!</h1>
            <p className="fs-4 m-0 p-0 ms-1 fw-medium lh-1  text-start">
              Next Gen data eco system driven by Artificial Intelligence and
              human expertise
            </p>
          </div>

          {/* Wave divider */}
          <div className="wave-divider">
            <svg
              viewBox="0 0 1440 200"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <mask id="waveMask">
                  <path
                    d="M0,50 C360,150 1080,-10 1440,50 L1440,300 L0,300 Z"
                    fill="white"
                  />
                </mask>
              </defs>
              <image
                href={L}
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
                mask="url(#waveMask)"
              />
            </svg>
          </div>
        </section>
      </div>
      <div className="my-5">
        <div className='d-flex mt-5 mb-3 overview gap-5'>
          <div className="d-flex flex-column align-items-start gap-3">
          <h1 className="fw-500">The Philosophy of dwansys</h1>
          <p className="text-start fs-5">
            At dwansys, we believe AI is increasingly proficient at performing various tasks traditionally carried out by humans, such as diagnosing medical conditions, translating languages, and providing customer service. Its rapid advancement is prompting understandable concerns about the potential for AI to displace human workers across industries. However, this is not an inevitable or even the most probable outcome. Digital tools have historically evolved to enhance collaboration between humans and technology, and this trend is continuing.
          </p>
        </div>
        <img src={Philosophy} className="rounded-4" />
        </div>
        <p className='fs-5' style={{color:'#AAAAAA'}}>While AI will significantly change the way work is conducted and the roles of workers, its broader impact is likely to be in supporting and augmenting human capabilities rather than replacing them.  Our mission is to empower people and organizations by uniting high-quality data, artificial intelligence, and human expertise to solve complex challenges and foster sustainable global growth.</p>
      </div>

      <div className="my-4">
        <h1 className=" fw-bold">Why We Built dwansys</h1>
        <p className="fs-5 " style={{ color: '#AAAAAA' }}>
          The world is shifting rapidly. Over the past two decades, digital transformation has redefined industries, and as we move into Industry 5.0 and beyond, organizations now operate in vast, interconnected ecosystems.
        </p>
        <p className="fs-5 p-0 m-0 fs-5" style={{ color: '#AAAAAA' }}>
          We built dwansys to help organizations thrive in this new landscape—where opportunity and risk go hand in hand. We assist organizations in facilitating human-machine collaboration and engaging with employees and customers through innovative and more efficient approaches.
        </p>
      </div>

      <div className='my-5'>
        <h1 className='fw-bold'>Shaping the Future with Intelligent Innovation</h1>
        <p className="fs-5" style={{ color: '#AAAAAA' }}>In a world where technology and human ingenuity converge, we help organizations unlock new possibilities. Our focus is on building intelligent, secure, and future-ready ecosystems that empower people, businesses, and industries to thrive.</p>
      <div className='d-flex flex-column gap-5 mt-5 ms-4'>
        <LeftRight heading="Cybersecurity by Design"
                    description="Resilience isn’t an afterthought—it’s the foundation. We embed cybersecurity into every layer of our solutions, from strategy to execution. By taking a proactive approach, we safeguard data, protect trust, and ensure business continuity in an increasingly connected world."
                    button={false}
                    image='CybersecuritybyDesign.jpg'/>
        <LeftRight heading="Augmented Intelligence"
                    description="Unlock growth with intelligent automation while keeping people at the centre. By combining human creativity with AI-driven precision, we enable organizations to streamline operations, boost productivity, and reimagine customer experiences. Humans and AI are not replacing each other—they are joining forces."
                    button={false}
                    image='AugmentedIntelligence.jpg'
                    imageLeft={false}/>
        <LeftRight heading="Industry Transformation"
                    description="Every sector is being reshaped by innovation. We drive meaningful change across ESG, healthcare, life sciences, and BFSI, helping organizations adopt emerging technologies, modernize operations, and stay ahead of disruption."
                    button={false}
                    image='IndustryTransformation.jpeg'/>
        <LeftRight heading="Future-Readiness"
                    description="The future belongs to those who adapt with agility. We build data-driven, agile ecosystems that empower organizations to navigate uncertainty with confidence, make informed decisions, and scale innovation sustainably."
                    button={false}
                    image='FutureReadiness.jpg'
                    imageLeft={false}/>                        
      </div>
      </div>


      
      <div>
      <div className="d-flex my-5 pt-5 overview gap-5">
        <div className="d-flex flex-column align-items-start gap-3">
          <h1 className="fw-500">Our Commitment</h1>
          <p className="text-start fs-5">
            We recognized early that the future belongs to those who adapt with
            agility, strategic insight, and resilience. This understanding is
            the foundation of d w a n s y s commitment to innovation and
            excellence.
          </p>
          <p className='fs-5'>
            Across various industries, the evolution of the modern workplace is increasingly driven by effective collaboration between humans and artificial intelligence. This partnership is transforming organizational operations by making processes more intelligent, efficient, and adaptable. Central to this transformation are five key drivers of performance:
          </p>
        </div>
        <img src={Commitment} className="rounded-4" />
      </div>
      <div>
          <div className="row mb-4 mt-4 ">
            <div
              className="col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="box">
                <h3 className="fs-2 fw-bold" style={{ color: '#0e80b6' }}>
                  Flexibility
                </h3>
                <p className="fs-5" >
                  AI-enabled systems allow organizations to respond rapidly to dynamic market conditions, shifting customer expectations, and operational challenges. The integration of human insights with AI agility ensures organizations remain resilient and adaptable.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 mt-4 mt-lg-0 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="box">
                <h3 className="fs-2 fw-bold" style={{ color: '#0e80b6' }}>
                  Speed
                </h3>
                <p className="fs-5" >
                  Automation and intelligent workflows help reduce processing times, eliminate inefficiencies, and accelerate results. From customer service to supply chain management, AI enhances operational speed while maintaining quality standards.
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-4 mt-4 ">
            <div
              className="col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="box">
                <h3 className="fs-2 fw-bold" style={{ color: '#0e80b6' }}>
                  Scale
                </h3>
                <p className="fs-5" >
                  AI facilitates seamless expansion of operations , whether <br/> serving large customer bases, analysing extensive datasets, or broadening innovation across multiple regions-all while effectively managing costs.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 mt-4 mt-lg-0 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="box">
                <h3 className="fs-2 fw-bold" style={{ color: '#0e80b6' }}>
                  Decision Making
                </h3>
                <p className="fs-5" >
                  Data-driven insights support leaders and teams in making informed and confident decisions. By combining human judgment with AI analytics, organizations can develop more precise strategies and achieve better business outcomes.
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-4  mt-4 d-flex justify-content-center">
            <div
              className="col-lg-6 mt-4 mt-lg-0 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="box">
                <h3 className="fs-2 fw-bold" style={{ color: '#0e80b6' }}>
                  Personalization
                </h3>
                <p className="fs-5" >
                  AI enables the delivery of tailored experiences—such as customized product recommendations, personalized healthcare plans, or adapted services for individual customers. Human empathy complements AI's precision to create meaningful interactions.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverDwansys;
