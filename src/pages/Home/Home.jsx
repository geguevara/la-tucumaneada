import React from 'react'
import { ContainerHome } from './HomeStyles'
import Hero from '../../components/Hero/Hero'
import RecommendedCards from '../../components/Recommended/RecommendedCards'

const Home = () => {
  return (
    <ContainerHome>
      <Hero/>
      <RecommendedCards/>
    </ContainerHome>
    
  )
}

export default Home