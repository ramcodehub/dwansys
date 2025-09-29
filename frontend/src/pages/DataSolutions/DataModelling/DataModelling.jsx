import PageBuilder from '../../../components/PageBuilder/PageBuilder';
import DataModellingData from '../../../config/Capabilities/DataModellingData.js';

const DataModelling = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <PageBuilder sections={DataModellingData.sections} />
    </div>
  );
};

export default DataModelling;