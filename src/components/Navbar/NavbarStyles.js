import { NavLink } from "react-router-dom";
import styled, {css} from "styled-components";
import { motion } from "framer-motion";

export const NavbarContainerStyled =styled.header`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #596b5f;
    box-shadow: 0 0 7px 3px #738b7b;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    text-transform: uppercase;
    width: 100%;
    @media(max-width:777px){
        
    }
`;

export const NavbarImgStyled= styled.div`
    & img{
        height: 65px;
        width: 130px;
    }
    
    @media(max-width:777px){
            position: absolute;
            left: 0;
            right: 0;
            text-align: center;
        
    }
`
export const LinksNavbarStyled= styled.div`
    display: flex;
    align-items: center;
    margin: 0 30px;
    gap: 30px;
    @media(max-width:777px){
        justify-content: space-between;
        width: 100%;
    }
`;


export const MenuContainer=styled.div`
display: flex;
align-items: center;
    gap: 30px;
    :hover{
        color: #dbb201;
    }

    @media(max-width:900px){
        gap: 20px;
    }
    @media(max-width:777px){
        flex-direction: column;
        background-color: var(--green);
        padding: 3rem;
        height: 100vh;
        width: 450px;
        gap: 60px;
        z-index: 10;
       /*  &.open{
            transform: none;
        } */
        @media (max-width: 600px){
            width: 50%;
        } 
        @media (max-width: 500px){
            width: 100%;
        } 
    }
`
export const LinksContainerStyled= styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    :hover{
        color: #dbb201;
    }

    @media(max-width:900px){
        gap: 20px;
    }
    @media(max-width:777px){
        position: fixed;
        top: 80px;
        left: 0;
        transition: 1s;
        transform: translateX(-180vh);
        &.open{
            transform: none;
        }
        /* @media (max-width: 600px){
            width: 50%;
        } 
        @media (max-width: 500px){
            width: 100%;
        }  */
    }
`;

export const NavLinkStyled = styled(NavLink)`
position: relative;
    &.active{
       border: 1px solid #dbb201;
       border-radius: 15px;
       padding: 5px 10px;
        color: #dbb201;
    }
    span{
        position: absolute;
        right: 40%;
        font-size: .8em;
        color: #494747;
    }
`

export const MenuNavbarStyled= styled.div`
    display:none;
    font-size: 2.5rem;
    color: white;
    padding-right: 10px;
    cursor: pointer;
    @media(max-width: 777px){
        display: flex;   
        z-index: 1;
    }
`

export const CarritoNavbar= styled.div`
    display: flex;
    z-index: 1;
    position: relative;
    svg{
        font-size: 1.7rem;
        cursor: pointer;
        color: white;
    }
    span{
        padding: 0 4px;
        border-radius: 50%;
        background-color: var(--maiz);
        color: white;
        position: absolute;
        top: 2px;
        right: 9px;
    }
  /*   :hover{
        color: #dbb201;
    } */
`
export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
 
`;