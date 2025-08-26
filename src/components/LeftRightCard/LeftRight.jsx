import React from 'react'
import Button from '../Button/Button'
import AdvBg from '../../assets/images/adv_bg.png'
import CdcBg from '../../assets/images/cdc_bg.png'
import DataGovernance from '../../assets/images/DataGovernance.jpg'
import BuildingAIFramework from '../../assets/images/Building-AI-Framework.png'
import './LeftRight.css'

const LeftRight = ({image, heading, description, imageLeft = true }) => {
    const images={
        'adv_bg.png': AdvBg,
        'cdc_bg.png':CdcBg,
        'BuildingAIFramework.png': BuildingAIFramework,
        'DataGovernance.jpg': DataGovernance,
    }
  return (
    <div className="d-flex flex-column flex-md-row align-items-center left-right ps-3">
      <div className={`w-50 d-flex align-items-start ${imageLeft ? "order-md-1" : "order-md-2"}`}>
        <img src={images[image]} alt={heading} className="rounded" />
      </div>
      <div className={`w-50  d-flex flex-column align-items-start ${imageLeft ? "order-md-2" : "order-md-1"}`}>
        <h2 className='text-start fs-2'>{heading}</h2>
        <p className='text-start lh-2 fw-500'>{description}</p>
        <Button
        variant="primary"
        icon={<i className="bi bi-arrow-right text-white" aria-hidden="true"></i>}
        ariaLabel="Learn more">Learn More</Button>
      </div>
    </div>
  )
}

export default LeftRight
