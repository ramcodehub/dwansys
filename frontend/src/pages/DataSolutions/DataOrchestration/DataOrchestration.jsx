import PageBuilder from '../../../components/PageBuilder/PageBuilder';
import DataOrchestrationData from '../../../config/Capabilities/DataOrchestrationData.js';

const DataOrchestration = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <PageBuilder sections={DataOrchestrationData.sections} />
    </div>
  );
};

export default DataOrchestration;