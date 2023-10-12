import React from 'react'
import { ContentContainer, LayoutWrapper } from './LayoutStyles'
import Navbar from '../Navbar/Navbar'
import { ContextNavbar } from '../Navbar/ContextNavbar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <LayoutWrapper>
      <ContextNavbar>
        <Navbar/>
      </ContextNavbar>
      
      <ContentContainer>
        {children}
      </ContentContainer>
      
      <Footer/>
    </LayoutWrapper>
  )
}

export default Layout