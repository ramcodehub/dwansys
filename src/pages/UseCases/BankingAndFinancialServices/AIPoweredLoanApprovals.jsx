import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import AIPoweredLoanApprovalsData from '../../../config/UseCases/BankingAndFinancialServices/AIPoweredLoanApprovalsData'

const AIPoweredLoanApprovals = () => {
  return (
    <div>
      <PageBuilder sections={AIPoweredLoanApprovalsData.sections}/>
    </div>
  )
}

export default AIPoweredLoanApprovals
