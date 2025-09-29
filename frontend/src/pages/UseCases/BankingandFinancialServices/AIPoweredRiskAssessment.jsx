import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import AIPoweredRiskAssessmentData from '../../../config/UseCases/BankingandFinancialServices/AIPoweredRiskAssessmentData.js'

const AIPoweredRiskAssessment = () => {
  return (
    <div>
      <PageBuilder sections={AIPoweredRiskAssessmentData.sections}/>
    </div>
  )
}

export default AIPoweredRiskAssessment