import Applications from '../Application/Applications';
import CapabilitiesBanner from '../CapabilitiesBanner/CapabilitiesBanner';
import KeyBenefits from '../KeyBenefits/KeyBenefits';
import Overview from '../Overview/Overview';

const PageBuilder = ({sections}) => {
    const COMPONENT_MAP = {
        'banner': CapabilitiesBanner,
        'overview': Overview,
        'keyBenefits': KeyBenefits,
        'applications': Applications,
    };
  return (
    <>
       {sections.map((section, idx) => {
        const SectionComponent = COMPONENT_MAP[section.type];
        if (!SectionComponent) return null; 

        return <SectionComponent key={idx} {...section.props}/>;
      })}
    </>
  )
}

export default PageBuilder
