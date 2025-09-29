import React from 'react'
import PageBuilder from '../../../components/PageBuilder/PageBuilder'
import SocialSentimentAnalysisData from '../../../config/UseCases/Sustainability/SocialSentimentAnalysisData'

const SocialSentimentAnalysis = () => {
  return (
    <div>
      <PageBuilder sections={SocialSentimentAnalysisData.sections}/>
    </div>
  )
}

export default SocialSentimentAnalysis
