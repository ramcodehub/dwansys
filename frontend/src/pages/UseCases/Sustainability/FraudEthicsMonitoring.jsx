import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import FraudEthicsMonitoringData from '../../../config/UseCases/Sustainability/FraudEthicsMonitoringData'

const FraudEthicsMonitoring = () => {
  return (
    <div>
      <PageBuilder sections={FraudEthicsMonitoringData.sections}/>
    </div>
  )
}

export default FraudEthicsMonitoring
