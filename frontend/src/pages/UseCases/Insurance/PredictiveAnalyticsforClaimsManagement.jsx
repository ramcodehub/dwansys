import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import PredictiveAnalyticsforClaimsManagementData from '../../../config/UseCases/Insurance/PredictiveAnalyticsforClaimsManagementData'

const PredictiveAnalyticsforClaimsManagement = () => {
  return (
    <div>
      <PageBuilder sections={PredictiveAnalyticsforClaimsManagementData.sections}/>
    </div>
  )
}

export default PredictiveAnalyticsforClaimsManagement
