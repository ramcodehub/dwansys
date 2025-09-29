import PageBuilder from '../../../components/PageBuilder/PageBuilder';
import BusinessIntelligenceData from '../../../config/Capabilities/BusinessIntelligenceData';

const BusinessIntelligence = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <PageBuilder sections={BusinessIntelligenceData.sections} />
    </div>
  );
};

export default BusinessIntelligence;
