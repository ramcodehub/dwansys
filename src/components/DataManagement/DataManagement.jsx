import { useState } from 'react';
import DataPillars from '../../config/DataPillars.js';
import LeftRight from '../LeftRightCard/LeftRight.jsx';
import './DataManagement.css';

const DataManagement = () => {
  const [activeTab, setActiveTab] = useState('tab-1');
  const activeDataPillar = DataPillars.find(
    (dataPillar) => dataPillar.tab === activeTab
  );
  return (
    <div className="data-management d-flex flex-column align-items-center justify-content-center ">
      <h1 className="">Enterprise Data Management with our 4 main pillars: </h1>
      <div>
        {DataPillars.map((dataPillar, index) => (
          <button
            key={index}
            className={`data-pillar-tab bg-transparent mt-2 fw-500 px-4 ${activeTab === dataPillar.tab ? 'active' : ''}`}
            onClick={() => setActiveTab(dataPillar.tab)}
          >
            {dataPillar.name}
          </button>
        ))}
      </div>

      {activeDataPillar && (
        <div
          className="data-pillar my-5 py-5 ps-5 rounded-4"
          id={activeDataPillar.id}
        >
          <LeftRight
            heading={activeDataPillar.name}
            description={activeDataPillar.description}
            image={activeDataPillar.imageName}
          />
        </div>
      )}
    </div>
  );
};

export default DataManagement;
