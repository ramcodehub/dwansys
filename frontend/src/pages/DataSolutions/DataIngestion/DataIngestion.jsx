import PageBuilder from '../../../components/PageBuilder/PageBuilder';
import DataIngestionData from '../../../config/Capabilities/DataIngestionData.js';

const DataIngestion = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <PageBuilder sections={DataIngestionData.sections} />
    </div>
  );
};

export default DataIngestion;