import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import CarbonEmissionsMonitoringData from '../../../config/UseCases/Sustainability/CarbonEmissionsMonitoringData'

const CarbonEmissionsMonitoring = () => {
  return (
    <div>
      <PageBuilder sections={CarbonEmissionsMonitoringData.sections}/>
    </div>
  )
}

export default CarbonEmissionsMonitoring
