import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import AIPoweredLoanApprovalsData from '../../../config/UseCases/BankingandFinancialServices/AIPoweredLoanApprovalsData'

const AIPoweredLoanApprovals = () => {
  return (
    <div>
      <PageBuilder sections={AIPoweredLoanApprovalsData.sections}/>
    </div>
  )
}

export default AIPoweredLoanApprovals
