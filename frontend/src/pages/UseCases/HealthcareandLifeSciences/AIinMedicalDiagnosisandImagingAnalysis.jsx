import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import AIinMedicalDiagnosisandImagingAnalysisData from '../../../config/UseCases/HealthcareandLifeSciences/AIInMedicalDiagnosisAndImagingAnalysisData.js'

const AIinMedicalDiagnosisandImagingAnalysis = () => {
  return (
    <div>
      <PageBuilder sections={AIinMedicalDiagnosisandImagingAnalysisData.sections}/>
    </div>
  )
}

export default AIinMedicalDiagnosisandImagingAnalysis