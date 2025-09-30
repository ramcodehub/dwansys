import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import FraudDetectionAndPreventionData from '../../../config/UseCases/Insurance/FraudDetectionAndPreventionData.js'

const FraudDetectionPrevention = () => {
  return (
    <div>
      <PageBuilder sections={FraudDetectionAndPreventionData.sections}/>
    </div>
  )
}

export default FraudDetectionPrevention