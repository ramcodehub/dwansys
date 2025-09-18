import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import AIinMedicalDiagnosisandImagingAnalysisData from '../../../config/UseCases/HealthcareAndLifeSciences/AIinMedicalDiagnosisandImagingAnalysisData'

const AIinMedicalDiagnosisandImagingAnalysis = () => {
  return (
    <div>
      <PageBuilder sections={AIinMedicalDiagnosisandImagingAnalysisData.sections}/>
    </div>
  )
}

export default AIinMedicalDiagnosisandImagingAnalysis
