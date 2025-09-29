import DataStorageImg from '../../../assets/images/Capabilities-images/DataLakes.png';
import PageBuilder from '../../../components/PageBuilder/PageBuilder';
import DataStorageData from '../../../config/Capabilities/DataStorageData.js';
import './DataStorage.css';

const DataStorage = () => {
  return (
    <div className="data-storage d-flex flex-column gap-4">
      <PageBuilder sections={DataStorageData.sections} />
      <div className='d-flex flex-column gap-3 mt-4'>
        <h1 className='fw-bold'>Data Lakes: Unlock the Power of Your Data with Boundless Passion</h1>
        <div className='d-flex gap-3 data-lake'>
          <p>Imagine a vast, limitless reservoir of raw, unfiltered data—ready to ignite innovation, fuel dreams, and transform the impossible into reality. That’s the magic of a Data Lake: a sanctuary where structured, semi-structured, and unstructured data converge in their purest form, waiting to be harnessed for the future of AI, machine learning, and big data breakthroughs. Dive deeper, and you’ll discover the true essence of possibility: lightning-fast experimentation, real-time analytics, and a foundation built to scale as boldly as your vision. Whether you’re a startup chasing disruptive ideas or an enterprise reimagining legacy systems, a Data Lake empowers you to unify your data into a single source of truth accessible, dynamic, and endlessly powerful. It’s not just storage; it’s the canvas where your boldest strategies take shape, and your data stories come alive.</p>
          <img src={DataStorageImg} alt="" width='400' className='rounded-4'/>
        </div>
        <p>Feel the freedom—storing every bit of your universe: text, images, IoT logs, social media sparks, raw databases, videos—nothing is out of reach. Embrace flexibility with Schema-on-Read, empowering you to mold your data into whatever form your vision requires, fueling limitless exploration and discovery. And all of this, within your grasp—cost-effective, scalable, built on the trusted Backbone of Amazon S3, Azure Data Lake, Google Cloud Storage, Hadoop—designed to grow with your ambitions, never holding you back. Seamlessly connected with powerful tools like Apache Spark and Databricks, your data becomes an unstoppable force for innovation.</p>
        <p>With ironclad data governance—metadata tagging, access controls, compliance—you can push forward with confidence, knowing your data stays protected and poised for greatness. This is more than storage; it’s your launchpad. Your playground for AI and ML model training, real-time streaming, IoT analytics, and unstructured data from every corner of your world. Ignite your passion for data—because the future belongs to those who dare to unlock its endless potential.</p>
      </div>
      <div>
        <h1 className='fw-bold'>Data Warehouse vs. Data Lake: Which One Do You Need?</h1>
        <table className='my-4 mx-3'>
          <tr>
            <th>Feature</th>
            <th>Data Warehouse </th>
            <th>Data Lake</th>
          </tr>
          <tr>
            <td>Data Type</td>
            <td>Structured</td>
            <td>Structured, Semi-Structured, Unstructured</td>
          </tr>
          <tr>
            <td>Processing</td>
            <td>Schema-on-Write (pre-defined)</td>
            <td>Schema-on-Read (flexible)</td>
          </tr>
          <tr>
            <td>Query Speed</td>
            <td>Fast SQL-based queries</td>
            <td>Slower (requires processing)</td>
          </tr>
          <tr>
            <td>Use Case</td>
            <td>Business Intelligence, Dashboards, Financial Reports</td>
            <td>AI, ML, Big Data Analytics, IoT, Unstructured Data</td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>Higher (optimized for performance)</td>
            <td>Lower (cheap storage for raw data)</td>
          </tr>
        </table>
      </div>
      <div className=" rounded-2 w-100 p-4 mb-5 d-flex flex-column justify-content-around data-storage-hybrid">
        <div>
          <h1 className='fw-bold'>Hybrid Approach: Best of Both Worlds</h1>
          <p className='fs-3'>Modern enterprises use a combination of Data Warehouses & Data Lakes to maximize efficiency:</p>
        </div>
        <div>
          <ul className='list-unstyled data-storage-list'>
            <li className='fs-3 '><strong>Data Warehouse</strong> - Optimized queries for business intelligence.</li>
            <li className='fs-3 '><strong>Data Lake</strong> - Raw storage for AI, ML, and analytics.</li>
          </ul>
        </div>
        <p className='fs-3'>We help you design, implement, and optimize data storage architecture tailored to your business needs.</p>
      </div>
    </div>
  );
};

export default DataStorage;