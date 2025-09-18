import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import RegulatoryComplianceAndDocumentProcessingData from '../../../config/UseCases/Insurance/RegulatoryComplianceAndDocumentProcessingData'

const RegulatoryComplianceDocumentProcessing = () => {
  return (
    <div>
      <PageBuilder sections={RegulatoryComplianceAndDocumentProcessingData.sections}/>
    </div>
  )
}

export default RegulatoryComplianceDocumentProcessing
