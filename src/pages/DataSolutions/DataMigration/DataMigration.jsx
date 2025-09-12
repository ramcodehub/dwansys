import React from 'react'
import CapabilitiesBanner from '../../../components/CapabilitiesBanner/CapabilitiesBanner'
import z from '../../../assets/images/z.jpeg'

const DataMigration = () => {
  return (
    <div>
      <CapabilitiesBanner heading='Data Migration'
                        content='Effortlessly transfer data between platforms and systems while maintaining security, accuracy, and reliability.'
                        backgroundImage={z}/>
    </div>
  )
}

export default DataMigration
