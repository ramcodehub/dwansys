import PageBuilder from '../../../components/PageBuilder/PageBuilder';
import ToolAugmentedChatbotsData from '../../../config/Capabilities/ToolAugmentedChatbotsData';

const ToolAugmentedChatbots = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <PageBuilder sections={ToolAugmentedChatbotsData.sections} />
    </div>
  );
};

export default ToolAugmentedChatbots;
