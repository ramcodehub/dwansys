import { useState } from 'react';
import UseCasesData from '../../config/UseCasesData';
import Card from '../Card/Card';
import './UseCases.css';

const UseCases = () => {
  const [activeTab, setActiveTab] = useState('tab-1');
  const activeUseCase = UseCasesData.find(
    (UseCase) => UseCase.tab === activeTab
  );
  return (
    <div className="data-management d-flex flex-column align-items-center justify-content-center ">
      <div className="pt-5 pb-4">
        <h1 className="lh-1 m-0 p-0" style={{ maxWidth: '34ch' }}>
          Societal Value Creation with sustainability : The Future is Industry
          5.0 and beyond{' '}
        </h1>
        <h1 className="colored">
          Human-machine collaboration & sustainability
        </h1>
      </div>
      <div>
        {UseCasesData.map((UseCase, index) => (
          <button
            key={index}
            className={`data-pillar-tab bg-transparent  fw-500 px-4 ${activeTab === UseCase.tab ? 'active' : ''}`}
            onClick={() => setActiveTab(UseCase.tab)}
          >
            {UseCase.name}
          </button>
        ))}
      </div>
      <div className="row gy-3" style={{ paddingTop: '2.4rem' }}>
        {activeUseCase &&
          activeUseCase.cardData.map((carddata, index) => (
            <div className="col-md-4 d-flex" key={index}>
              <Card
                heading={carddata.name}
                description={carddata.description}
                image={carddata.image}
                link={carddata.link}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default UseCases;