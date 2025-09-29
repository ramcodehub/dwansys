import PageBuilder from '../../../components/PageBuilder/PageBuilder';
import DataTransformationData from '../../../config/Capabilities/DataTransformationData';

const DataTransformation = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <PageBuilder sections={DataTransformationData.sections} />
    </div>
  );
};

export default DataTransformation;
