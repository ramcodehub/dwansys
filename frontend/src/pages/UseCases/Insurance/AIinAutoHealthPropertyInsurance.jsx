import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import AIAutoHealthAndPropertyInsuranceData from '../../../config/UseCases/Insurance/AIInAutoHealthAndPropertyInsuranceData'

const AIinAutoHealthPropertyInsurance = () => {
  return (
    <div>
      <PageBuilder sections={AIAutoHealthAndPropertyInsuranceData.sections}/>
    </div>
  )
}

export default AIinAutoHealthPropertyInsurance
