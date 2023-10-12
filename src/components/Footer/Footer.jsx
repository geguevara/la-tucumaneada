import React from 'react'
import {TfiFacebook, TfiLinkedin} from "react-icons/tfi"
import {FiInstagram} from "react-icons/fi"
import {SiGmail} from "react-icons/si"
import { FooterContainerIcons, FooterContainerStyled, FooterSectionStyled } from './FooterStyled'

const Footer = () => {
  return (
    <FooterSectionStyled>
        <FooterContainerStyled>
            <span></span>
            <FooterContainerIcons>
                <TfiFacebook/>
                <FiInstagram/>
                <TfiLinkedin/>
                <SiGmail/>
            </FooterContainerIcons>
            <span></span>
        </FooterContainerStyled>
        <h3> &copy;2023 Geraldina Guevara</h3>
        
    </FooterSectionStyled>
  )
}

export default Footer