import React from "react";
import './CoreComponent.css'

const CoreComponents = ({
  title,
  subtitle,
  description,
  image,
  points = [],
  extraContent, 
}) => {
  return (
    <div className="container m-0 p-0 pb-5 mt-3 bg-black" style={{border: '2px solid #181818'}}>
      <div className="row gx-0 core-component">

        {(title || subtitle) && (
          <div
            className="col-lg-12 d-flex flex-column justify-content-center p-4"
          >
            <div className="section-title">
              {title && <h1 className="fw-bold" style={{color:'#5653ff'}}>{title}</h1>}
            </div>
            {description && (
              <div className="content">
                <p style={{color:'#AAAAAA',fontSize: '1.25rem'}}>{description}</p>
              </div>
            )}
          </div>
        )}

        {image && (
          <div
            className="col-lg-12 d-flex flex-column align-items-center"
          >
            <img src={image} className="img-fluid about-imgg" alt="" />    
          </div>
        )}

         {subtitle && <h2 className="px-4 pt-4 fw-bold" style={{color:'#5653ff'}}>{subtitle}</h2>}
        {points.length > 0 && (
          <div
            className="col-lg-12 d-flex flex-column justify-content-center px-4 pt-3"
          >
            <div className="content">
              {points.map((point, index) => (
                <div key={index} className="mb-3">
                  
                  <p style={{color:'#AAAAAA',fontSize: '1.25rem'}}>
                    <strong className="fs-5" style={{color:'#ffffff'}}>{point.title}:</strong> {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        {extraContent && (
              <div className="content text-start px-4" style={{color:'#AAAAAA',fontSize: '1.25rem'}}>{extraContent}</div>
            )}
      </div>
    </div>
  );
};

export default CoreComponents;
