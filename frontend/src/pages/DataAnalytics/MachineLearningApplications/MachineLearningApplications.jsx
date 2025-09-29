import PageBuilder from '../../../components/PageBuilder/PageBuilder';
import MachineLearningApplicationsData from '../../../config/Capabilities/MachineLearningApplicationsData';

const MachineLearningApplications = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <PageBuilder sections={MachineLearningApplicationsData.sections} />
    </div>
  );
};

export default MachineLearningApplications;
