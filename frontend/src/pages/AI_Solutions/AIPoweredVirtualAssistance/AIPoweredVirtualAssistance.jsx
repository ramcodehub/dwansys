import PageBuilder from '../../../components/PageBuilder/PageBuilder';
import AIPoweredVirtualAssistanceData from '../../../config/Capabilities/AIPoweredVirtualAssistanceData.js';

const AIPoweredVirtualAssistance = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <PageBuilder sections={AIPoweredVirtualAssistanceData.sections} />
    </div>
  );
};

export default AIPoweredVirtualAssistance;