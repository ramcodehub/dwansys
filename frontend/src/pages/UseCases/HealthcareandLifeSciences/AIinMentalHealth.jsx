import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import AIInMentalHealthData from '../../../config/UseCases/HealthcareandLifeSciences/AIInMentalHealthData.js'

const AIinMentalHealth = () => {
  return (
    <div>
      <PageBuilder sections={AIInMentalHealthData.sections}/>
    </div>
  )
}

export default AIinMentalHealth