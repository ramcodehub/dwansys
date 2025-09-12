import PageBuilder from '../../../components/PageBuilder/PageBuilder';
import DataMigrationData from '../../../config/Capabilities/DataMigrationData';

const DataMigration = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <PageBuilder sections={DataMigrationData.sections} />
    </div>
  );
};

export default DataMigration;

