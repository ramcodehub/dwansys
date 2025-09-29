import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import PredictiveAnalyticsForDiseaseOutbreaksData from '../../../config/UseCases/HealthcareandLifeSciences/PredictiveAnalyticsForDiseaseOutbreaksData'

const PredictiveAnalyticsforDiseaseOutbreaks = () => {
  return (
    <div>
      <PageBuilder sections={PredictiveAnalyticsForDiseaseOutbreaksData.sections}/>
    </div>
  )
}

export default PredictiveAnalyticsforDiseaseOutbreaks
