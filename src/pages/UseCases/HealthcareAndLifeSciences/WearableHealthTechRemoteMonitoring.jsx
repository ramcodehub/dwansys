import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import WearableHealthTechAndRemoteMonitoringData from '../../../config/UseCases/HealthcareandLifeSciences/WearableHealthTechAndRemoteMonitoringData'

const WearableHealthTechRemoteMonitoring = () => {
  return (
    <div>
      <PageBuilder sections={WearableHealthTechAndRemoteMonitoringData.sections}/>
    </div>
  )
}

export default WearableHealthTechRemoteMonitoring
