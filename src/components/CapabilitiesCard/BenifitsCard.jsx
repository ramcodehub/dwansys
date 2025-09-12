import React from 'react'
import './BenifitsCard.css'
const BenifitsCard = ({icon,heading,content}) => {
  return (
    <div className='p-3 d-flex flex-column gap-2 rounded-4 mb-3 capabilities-card'>
      <div className='icon py-2 text-center rounded-2'>
        <i className={`${icon} fs-2`} ></i>
      </div>
      <div>
        <h3 className='colored'>{heading}</h3>
        <p style={{color:'#AAAAAA'}}>{content}</p>
      </div>
    </div>
  )
}

export default BenifitsCard
