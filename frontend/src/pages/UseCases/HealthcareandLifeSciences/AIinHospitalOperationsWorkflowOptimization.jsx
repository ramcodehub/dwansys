import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import AIInHospitalOperationsAndWorkflowOptimizationData from '../../../config/UseCases/HealthcareandLifeSciences/AIInHospitalOperationsAndWorkflowOptimizationData.js'

const AIinHospitalOperationsWorkflowOptimization = () => {
  return (
    <div>
      <PageBuilder sections={AIInHospitalOperationsAndWorkflowOptimizationData.sections}/>
    </div>
  )
}

export default AIinHospitalOperationsWorkflowOptimization