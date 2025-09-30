import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import ResourceEfficiencyData from '../../../config/UseCases/Sustainability/ResourceEfficiencyData.js'

const ResourceEfficiency = () => {
  return (
    <div>
      <PageBuilder sections={ResourceEfficiencyData.sections}/>
    </div>
  )
}

export default ResourceEfficiency