import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import AIInRiskAssessmentAndUnderwritingData from '../../../config/UseCases/Insurance/AIInRiskAssessmentAndUnderwritingData.js'

const AIinRiskAssessmentUnderwriting = () => {
  return (
    <div>
      <PageBuilder sections={AIInRiskAssessmentAndUnderwritingData.sections}/>
    </div>
  )
}

export default AIinRiskAssessmentUnderwriting