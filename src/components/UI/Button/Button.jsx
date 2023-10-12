import React from 'react'
import { StyledButton } from './ButtonStyles'

const Button = ({
    children, 
    disabled=false, 
    hidden= false,
    onClick=(e)=>e.preventDefault()
  }) => {
  return (
    <StyledButton
      whileTap={{scale:0.9}}
      disabled= {disabled}
      hidden={hidden}
      onClick={onClick}
    >
        {children}
    </StyledButton>
  )
}

export default Button