import BenifitsCard from '../CapabilitiesCard/BenifitsCard';
import KeyApplicationsCard from '../KeyApplicationsCard/KeyApplicationsCard';

const KeyApplications = ({ Applications }) => {
  return (
    <div className="container m-0 p-0 my-5">
      <h1 className="fw-bold my-3">KEY APPLICATIONS :</h1>
      <div className="rounded-4 px-3 pt-3 mt-4">
        <div className="row">
          {Applications.map((keyApplications, i) => (
            <div className="col-md-3 d-flex align-items-stretch" key={i}>
              <KeyApplicationsCard icon={keyApplications.icon}
                                   heading={keyApplications.heading}
                                   content={keyApplications.content}/>
            </div>
           ))} 
        </div>
      </div>
    </div>
  );
};

export default KeyApplications;