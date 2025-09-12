import React from 'react'
import './BenifitsCard.css'
const BenifitsCard = ({icon,heading,content}) => {
  return (
    <div className='p-3 d-flex flex-column gap-2 rounded-4 capabilities-card'>
      <div className='icon py-2 text-center rounded-2'>
        <i className={`${icon} fs-2`} ></i>
      </div>
      <div>
        <h2 className='colored'>{heading}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default BenifitsCard
