import React from 'react'
import Subscribe from '../../components/Subscribe/Subscribe'

const Blogs = () => {
  return (
    <div style={{paddingTop:'9rem'}}>
     <div className="" >
      <h1 className="fw-bolder text-center" style={{fontSize:'3.8rem'}}>The blogs will be launching soon...</h1>
      <p className="fs-4 m-0 p-0 text-center" style={{color:'#AAAAAA'}}> Please subscribe with your email to receive notifications.</p>
    </div>
    <div className="bg-photo d-flex flex-column mt-4 full-width">
        <Subscribe />
      </div>
    </div>
  )
}

export default Blogs
