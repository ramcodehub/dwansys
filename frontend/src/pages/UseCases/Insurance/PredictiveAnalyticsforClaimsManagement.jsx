import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import PredictiveAnalyticsforClaimsManagementData from '../../../config/UseCases/Insurance/PredictiveAnalyticsForClaimsManagementData.js'

const PredictiveAnalyticsforClaimsManagement = () => {
  return (
    <div>
      <PageBuilder sections={PredictiveAnalyticsforClaimsManagementData.sections}/>
    </div>
  )
}

export default PredictiveAnalyticsforClaimsManagement