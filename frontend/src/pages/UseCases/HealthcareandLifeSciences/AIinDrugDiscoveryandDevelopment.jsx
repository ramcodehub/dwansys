import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import AIInDrugDiscoveryAndDevelopmentData from '../../../config/UseCases/HealthcareandLifeSciences/AIInDrugDiscoveryAndDevelopmentData.js'


const AIinDrugDiscoveryandDevelopment = () => {
  return (
    <div>
      <PageBuilder sections={AIInDrugDiscoveryAndDevelopmentData.sections}/>
    </div>
  )
}

export default AIinDrugDiscoveryandDevelopment