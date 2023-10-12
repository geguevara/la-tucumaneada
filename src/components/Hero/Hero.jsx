import React from 'react'
import { HeroContainerStyled, HeroImgStyed, HeroTextStyled, LinkProdStyled } from './Hero.styles'
import imgHero from "../../assets/empanadas-fondo.jpg"
import Button from '../UI/Button/Button'

const Hero = () => {
  return (
    <HeroContainerStyled>
        <HeroTextStyled>
            <h1>Amantes de la buena comida</h1>
            <p>del Jardín de la Republica</p>
            <LinkProdStyled to={'/products'}>Comprar</LinkProdStyled>
        </HeroTextStyled>
       <HeroImgStyed>
        <img src={imgHero} alt="" />
       </HeroImgStyed>
    </HeroContainerStyled>
  )
}

export default Hero