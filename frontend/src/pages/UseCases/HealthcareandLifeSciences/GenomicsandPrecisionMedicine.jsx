import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import GenomicsAndPrecisionMedicineData from '../../../config/UseCases/HealthcareandLifeSciences/GenomicsAndPrecisionMedicineData.js'

const GenomicsandPrecisionMedicine = () => {
  return (
    <div>
      <PageBuilder sections={GenomicsAndPrecisionMedicineData.sections}/>
    </div>
  )
}

export default GenomicsandPrecisionMedicine