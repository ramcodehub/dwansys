import PageBuilder from '../../../components/PageBuilder/PageBuilder';
import AutomatedReportDeliveryData from '../../../config/Capabilities/AutomatedReportDeliveryData.js';

const AutomatedReportDelivery = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <PageBuilder sections={AutomatedReportDeliveryData.sections} />
    </div>
  );
};

export default AutomatedReportDelivery;