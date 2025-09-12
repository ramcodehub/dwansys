import React from "react";
import './ApplicationCard.css'

const ApplicationCard = ({ title, items }) => {
  return (
    <div className="application-card rounded-4 p-3">
      <h2 className="m-0 p-0 fw-bold colored-logo">{title}</h2>
      <div className="d-flex flex-column py-4">
        {items.map((item, index) => (
          <div key={index}>
            {item.subheading ? (
              <>
                <h3 className="">{item.subheading}</h3>
                <p className="" style={{color:'#AAAAAA'}}>{item.description}</p>
              </>
            ) : (
              <div className="">
                {item.points?.map((point, i) => (
                  <p key={i} className=""  style={{color:'#AAAAAA'}}>
                    {point}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationCard;

