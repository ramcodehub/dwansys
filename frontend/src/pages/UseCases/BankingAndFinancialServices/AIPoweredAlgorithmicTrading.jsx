import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import AIPoweredAlgorithmicTradingData from '../../../config/UseCases/BankingAndFinancialServices/AIPoweredAlgorithmicTradingData'

const AIPoweredAlgorithmicTrading = () => {
  return (
    <div>
      <PageBuilder sections={AIPoweredAlgorithmicTradingData.sections}/>
    </div>
  )
}

export default AIPoweredAlgorithmicTrading
