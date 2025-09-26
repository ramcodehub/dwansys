import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import AIPoweredComplianceAndAntiMoneyLaunderingData from '../../../config/UseCases/BankingAndFinancialServices/AIPoweredComplianceAndAntiMoneyLaunderingData'

const AIPoweredComplianceAndAntiMoneyLaundering = () => {
  return (
    <div>
      <PageBuilder sections={AIPoweredComplianceAndAntiMoneyLaunderingData.sections}/>
    </div>
  )
}

export default AIPoweredComplianceAndAntiMoneyLaundering
