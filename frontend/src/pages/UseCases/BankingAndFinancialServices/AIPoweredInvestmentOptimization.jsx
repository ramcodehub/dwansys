import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import AIPoweredInvestmentOptimizationData from '../../../config/UseCases/BankingAndFinancialServices/AIPoweredInvestmentOptimizationData'

const AIPoweredInvestmentOptimization = () => {
  return (
    <div>
      <PageBuilder sections={AIPoweredInvestmentOptimizationData.sections}/>
    </div>
  )
}

export default AIPoweredInvestmentOptimization
