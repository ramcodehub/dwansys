import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import AIinMentalHealthData from '../../../config/UseCases/HealthcareAndLifeSciences/AIinMentalHealthData'

const AIinMentalHealth = () => {
  return (
    <div>
      <PageBuilder sections={AIinMentalHealthData.sections}/>
    </div>
  )
}

export default AIinMentalHealth
