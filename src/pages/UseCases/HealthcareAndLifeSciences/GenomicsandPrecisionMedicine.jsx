import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import GenomicsandPrecisionMedicineData from '../../../config/UseCases/HealthcareAndLifeSciences/GenomicsandPrecisionMedicineData'

const GenomicsandPrecisionMedicine = () => {
  return (
    <div>
      <PageBuilder sections={GenomicsandPrecisionMedicineData.sections}/>
    </div>
  )
}

export default GenomicsandPrecisionMedicine
