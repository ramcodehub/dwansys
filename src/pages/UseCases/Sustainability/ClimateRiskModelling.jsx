import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import ClimateRiskModellingData from '../../../config/UseCases/Sustainability/ClimateRiskModellingData'

const ClimateRiskModelling = () => {
  return (
    <div>
      <PageBuilder sections={ClimateRiskModellingData.sections}/>
    </div>
  )
}

export default ClimateRiskModelling
