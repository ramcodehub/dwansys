import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder' 
import WorkplaceSafetyMonitoringData from '../../../config/UseCases/Sustainability/WorkplaceSafetyMonitoringData.js'

const WorkplaceSafetyMonitoring = () => {
  return (
    <div>
      <PageBuilder sections={WorkplaceSafetyMonitoringData.sections}/>
    </div>

  )
}

export default WorkplaceSafetyMonitoring