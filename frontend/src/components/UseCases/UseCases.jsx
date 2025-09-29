import UseCasesData from '../../config/UseCasesData.js';

const UseCases = () => {
  return (
    <div className="use-cases">
      {UseCasesData.map((tab, tabIndex) => (
        <div key={tabIndex} className="use-case-tab">
          <h2>{tab.name}</h2>
          <div className="use-case-cards">
            {tab.cardData.map((card, cardIndex) => (
              <div key={cardIndex} className="use-case-card">
                <h3>{card.name}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UseCases;