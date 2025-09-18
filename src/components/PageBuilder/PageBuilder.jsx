import Applications from '../Application/Applications';
import CapabilitiesBanner from '../CapabilitiesBanner/CapabilitiesBanner';
import CapabilitiesContent from '../CapabilitiesContent/CapabilitiesContent';
import CoreComponents from '../CoreComponents/CoreComponents';
import KeyBenefits from '../KeyBenefits/KeyBenefits';
import Overview from '../Overview/Overview';
import KeyApplications from '../KeyApplications/KeyApplications';
import Hero from '../Hero/Hero';
import BusinessImpact from '../BusinessImpact/BusinessImpact';
import RealWorld from '../RealWorld/RealWorld';
import DescriptionCard from '../DescriptionCard/DescriptionCard';

const PageBuilder = ({ sections }) => {
  const COMPONENT_MAP = {
    'banner': CapabilitiesBanner,
    'hero': Hero,
    'overview': Overview,
    'keyBenefits': KeyBenefits,
    'applications': Applications,
    'capabilities-content': CapabilitiesContent,
    'core-component': CoreComponents,
    'key-applications': KeyApplications,
    'business-impact': BusinessImpact,
    'real-world-example': RealWorld,
    'description-card': DescriptionCard,
  };
  return (
    <>
      {sections.map((section, idx) => {
        const SectionComponent = COMPONENT_MAP[section.type];
        if (!SectionComponent) return null;

        return <SectionComponent key={idx} {...section.props} />;
      })}
    </>
  );
};

export default PageBuilder;