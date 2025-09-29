import PageBuilder from '../../../components/PageBuilder/PageBuilder';
import DocumentSummarizationData from '../../../config/Capabilities/DocumentSummarizationData.js';

const DocumentSummarization = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <PageBuilder sections={DocumentSummarizationData.sections} />
    </div>
  );
};

export default DocumentSummarization;