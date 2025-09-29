import PageBuilder from '../../../components/PageBuilder/PageBuilder';
import RAGApplicationData from '../../../config/Capabilities/RAGApplicationsData.js';

const RAGApplication = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <PageBuilder sections={RAGApplicationData.sections} />
    </div>
  );
};

export default RAGApplication;