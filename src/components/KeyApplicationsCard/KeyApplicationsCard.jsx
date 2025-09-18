import React from 'react'
import './KeyApplicationsCard.css'

const KeyApplicationsCard = ({icon,heading,content}) => {
  return (
    <div className='w-100 p-4 d-flex flex-column gap-2 bg-black key-application-card align-items-center' style={{border:'2px solid #181818'}}>
        <i className={`${icon} colored-logo`}></i>
        <h2 className='fw-MEDIUM text-center'>{heading}</h2>
        <p className='fw-medium text-center'>{content}</p>
    </div>
  )
}

export default KeyApplicationsCard
