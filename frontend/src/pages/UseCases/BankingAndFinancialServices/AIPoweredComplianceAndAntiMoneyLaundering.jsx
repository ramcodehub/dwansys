import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import AIPoweredComplianceAndAntiMoneyLaunderingData from '../../../config/UseCases/BankingandFinancialServices/AIPoweredComplianceAndAntiMoneyLaunderingData'

const AIPoweredComplianceAndAntiMoneyLaundering = () => {
  return (
    <div>
      <PageBuilder sections={AIPoweredComplianceAndAntiMoneyLaunderingData.sections}/>
    </div>
  )
}

export default AIPoweredComplianceAndAntiMoneyLaundering