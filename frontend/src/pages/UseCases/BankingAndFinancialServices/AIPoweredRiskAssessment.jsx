import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import AIPoweredRiskAssessmentData from '../../../config/UseCases/BankingAndFinancialServices/AIPoweredRiskAssessmentData'

const AIPoweredRiskAssessment = () => {
  return (
    <div>
      <PageBuilder sections={AIPoweredRiskAssessmentData.sections}/>
    </div>
  )
}

export default AIPoweredRiskAssessment
