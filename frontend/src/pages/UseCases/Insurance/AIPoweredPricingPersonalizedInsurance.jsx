import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import AIPoweredPricingAndPersonalizedInsuranceData from '../../../config/UseCases/Insurance/AIPoweredPricingAndPersonalizedInsuranceData.js'

const AIPoweredPricingPersonalizedInsurance = () => {
  return (
    <div>
      <PageBuilder sections={AIPoweredPricingAndPersonalizedInsuranceData.sections}/>
    </div>
  )
}

export default AIPoweredPricingPersonalizedInsurance