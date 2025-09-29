import PageBuilder from '../../../components/PageBuilder/PageBuilder';
import AgenticAIData from '../../../config/Capabilities/AgenticAIData';

const AgenticAI = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <PageBuilder sections={AgenticAIData.sections} />
    </div>
  );
};

export default AgenticAI;
