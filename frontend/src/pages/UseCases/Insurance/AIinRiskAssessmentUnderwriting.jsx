import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import AIRiskAssessmentAndUnderwritingData from '../../../config/UseCases/Insurance/AIInRiskAssessmentAndUnderwritingData.js'

const AIinRiskAssessmentUnderwriting = () => {
  return (
    <div>
      <PageBuilder sections={AIRiskAssessmentAndUnderwritingData.sections}/>
    </div>
  )
}

export default AIinRiskAssessmentUnderwriting