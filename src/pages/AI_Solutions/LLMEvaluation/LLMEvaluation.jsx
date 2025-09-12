import PageBuilder from '../../../components/PageBuilder/PageBuilder';
import LLMEvalutionData from '../../../config/Capabilities/LLMEvaluationData';

const LLMEvaluation = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <PageBuilder sections={LLMEvalutionData.sections} />
    </div>
  );
};

export default LLMEvaluation;
