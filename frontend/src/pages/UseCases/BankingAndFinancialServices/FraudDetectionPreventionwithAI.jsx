import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import FraudDetectionPreventionwithAIData from '../../../config/UseCases/BankingandFinancialServices/FraudDetectionPreventionwithAIData'

const FraudDetectionPreventionwithAI = () => {
  return (
    <div>
      <PageBuilder sections={FraudDetectionPreventionwithAIData.sections}/>
    </div>
  )
}

export default FraudDetectionPreventionwithAI
