import React from 'react'
import CapabilitiesBanner from '../../../components/CapabilitiesBanner/CapabilitiesBanner'
import Overview from '../../../components/Overview/Overview'
import BenifitsCard from '../../../components/CapabilitiesCard/BenifitsCard'
import z from '../../../assets/images/aia.png'

const DataOrchestration = () => {
  return (
    <div>
      <CapabilitiesBanner heading='Data Orchestration'
                        content='Effortlessly transfer data between platforms and systems while maintaining security, accuracy, and reliability.'
                        backgroundImage={z}/>
      <Overview/>
      <BenifitsCard icon='bi bi-shield-check text-black'
            heading='Data Orchestration'
            content="Effortlessly transfer data between platforms and systems while maintaining security, accuracy, and reliability."/>
    </div>
  )
}

export default DataOrchestration
